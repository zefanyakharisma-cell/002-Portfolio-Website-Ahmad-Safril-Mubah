import { setRequestLocale } from 'next-intl/server'
import { Nav } from '@/components/ui/Nav'
import { Footer } from '@/components/ui/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Research } from '@/components/sections/Research'
import { Publications } from '@/components/sections/Publications'
import { Teaching } from '@/components/sections/Teaching'
import { MediaCommentary } from '@/components/sections/MediaCommentary'
import { CV } from '@/components/sections/CV'
import { Contact } from '@/components/sections/Contact'
import {
  getResearchThemes,
  getPublications,
  getMediaItems,
  getCvMeta,
} from '@/lib/data'

// Revalidate periodically; admin saves also trigger on-demand revalidation.
export const revalidate = 3600

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const [themes, publications, media, cv] = await Promise.all([
    getResearchThemes(),
    getPublications(),
    getMediaItems(),
    getCvMeta(),
  ])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Research themes={themes} />
        <Publications publications={publications} />
        <Teaching />
        <MediaCommentary items={media} />
        <CV available={cv.available} lastUpdated={cv.lastUpdated} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
