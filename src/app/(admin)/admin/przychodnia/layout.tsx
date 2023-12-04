import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/auth"
import { ClinicTabs } from "@/components/nav/admin/clinic-tabs"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Shell } from "@/components/shells/shell"

export default async function ClinicLayout({
  children,
}: React.PropsWithChildren): Promise<JSX.Element> {
  const user = await getCurrentUser()
  if (!user) redirect("/logowanie")

  return (
    <Shell variant="sidebar">
      <div className="xxs:flex-row flex flex-col gap-4 pr-1">
        <PageHeader className="my-8 flex-1">
          <PageHeaderHeading size="sm">Przychodnia</PageHeaderHeading>
          <PageHeaderDescription size="sm">
            Zarządzaj danymi, dostępnością i rezerwacjami przychodni
          </PageHeaderDescription>
        </PageHeader>
      </div>
      <div className="space-y-8 overflow-auto">
        <ClinicTabs />
        {children}
      </div>
    </Shell>
  )
}