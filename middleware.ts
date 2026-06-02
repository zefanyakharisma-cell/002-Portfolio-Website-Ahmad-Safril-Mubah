import createIntlMiddleware from 'next-intl/middleware'
import { NextResponse, type NextRequest } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { routing } from './i18n/routing'

const intlMiddleware = createIntlMiddleware(routing)

const LOCALE_PREFIX = /^\/(en|id)/

function stripLocale(pathname: string) {
  return pathname.replace(LOCALE_PREFIX, '') || '/'
}

export async function middleware(req: NextRequest) {
  // Run next-intl first so it owns locale negotiation, redirects and rewrites.
  const res = intlMiddleware(req)

  // Without Supabase configured there is no session to refresh or admin to guard.
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return res
  }

  // Refresh the Supabase auth session and mirror cookies onto the intl response.
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return req.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            res.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Protect every /admin route except the login page.
  const path = stripLocale(req.nextUrl.pathname)
  const isAdmin = path.startsWith('/admin')
  const isLogin = path.startsWith('/admin/login')

  if (isAdmin && !isLogin && !user) {
    const locale = req.nextUrl.pathname.match(LOCALE_PREFIX)?.[1] ?? routing.defaultLocale
    return NextResponse.redirect(new URL(`/${locale}/admin/login`, req.url))
  }

  return res
}

export const config = {
  // Match all pathnames except for static assets, _next, and files with extensions.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
