import ComponentViewer from '@/components/component-viewer'
import Analytics from '@/components/dashboard/crm/analytics'
import CallDuration from '@/components/dashboard/crm/call-duration'
import DealForecastOwner from '@/components/dashboard/crm/deal-forecast-owner'
import DealStatus from '@/components/dashboard/crm/deal-status'
import DealType from '@/components/dashboard/crm/deal-type'
import MostLeads from '@/components/dashboard/crm/most-leads'
import RecentLeads from '@/components/dashboard/crm/recent-leads'
import SalesForecase from '@/components/dashboard/crm/sales-forecase'
import StatisticsCard from '@/components/dashboard/crm/statistics-card'
import ToLoList from '@/components/dashboard/crm/to-do-list'

const Page = () => {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-14">
      <ComponentViewer title="Statistics Card Section" Component={StatisticsCard} componentPath="src/components/dashboard/crm/statistics-card.tsx" />

      <ComponentViewer title="Analytics Section" Component={Analytics} componentPath="src/components/dashboard/crm/analytics.tsx" />

      <ComponentViewer title="Most Leads Section" Component={MostLeads} componentPath="src/components/dashboard/crm/most-leads.tsx" />

      <ComponentViewer title="Deal Status Section" Component={DealStatus} componentPath="src/components/dashboard/crm/deal-status.tsx" />

      <ComponentViewer title="Deal Type Section" Component={DealType} componentPath="src/components/dashboard/crm/deal-type.tsx" />

      <ComponentViewer title="Call Duration Section" Component={CallDuration} componentPath="src/components/dashboard/crm/call-duration.tsx" />

      <ComponentViewer title="Sales Forecase Section" Component={SalesForecase} componentPath="src/components/dashboard/crm/sales-forecase.tsx" />

      <ComponentViewer
        title="Deal Forecast Owner Section"
        Component={DealForecastOwner}
        componentPath="src/components/dashboard/crm/deal-forecast-owner.tsx"
      />

      <ComponentViewer title="Recent Leads Section" Component={RecentLeads} componentPath="src/components/dashboard/crm/recent-leads.tsx" />

      <ComponentViewer title="To Lo List Section" Component={ToLoList} componentPath="src/components/dashboard/crm/to-do-list.tsx" />
    </div>
  )
}

export default Page
