import { AppSidebar } from '@/components/layout/AppSidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { ReactNode } from 'react'

const DashboardLayout = ({children}: {children: ReactNode}) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      {children}
    </SidebarProvider>
  )
}

export default DashboardLayout