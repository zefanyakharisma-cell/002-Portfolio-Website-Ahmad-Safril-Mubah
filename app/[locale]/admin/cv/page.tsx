import { requireUser } from '@/lib/auth'
import { AdminShell } from '@/components/admin/AdminShell'
import { CVUpload } from '@/components/admin/CVUpload'
import { getCvMeta } from '@/lib/data'

export default async function CvAdminPage() {
  const user = await requireUser()
  const cv = await getCvMeta()

  return (
    <AdminShell email={user.email ?? ''} title="Curriculum Vitae">
      <CVUpload available={cv.available} lastUpdated={cv.lastUpdated} />
    </AdminShell>
  )
}
