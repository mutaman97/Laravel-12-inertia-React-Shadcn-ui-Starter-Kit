import ComponentViewer from '@/components/component-viewer'
import Analytics from '@/components/dashboard/analytics/analytics'
import AveragePositions from '@/components/dashboard/analytics/average-positions'
import CompletedGoals from '@/components/dashboard/analytics/completed-goals'
import CompletedRates from '@/components/dashboard/analytics/completed-rates'
import SalesCountry from '@/components/dashboard/analytics/sales-country'
import SessionBrowser from '@/components/dashboard/analytics/session-browser'
import TopPerforming from '@/components/dashboard/analytics/top-performing'
import TopQueries from '@/components/dashboard/analytics/top-queries'
import Visitor from '@/components/dashboard/analytics/visitor'

const Page = () => {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-14">
      <ComponentViewer
        title="Average Positions Section"
        Component={AveragePositions}
        componentPath="resources/js/components/dashboard/analytics/average-positions.tsx" // can i use this @ here?
      />

      <ComponentViewer title="Analytics Section" Component={Analytics} componentPath="resources/js/components/dashboard/analytics/analytics.tsx" />

      <ComponentViewer title="Visitor Section" Component={Visitor} componentPath="resources/js/components/dashboard/analytics/visitor.tsx" />

      <ComponentViewer
        title="Session Browser Section"
        Component={SessionBrowser}
        componentPath="resources/js/components/dashboard/analytics/session-browser.tsx"
      />

      <ComponentViewer
        title="Completed Goals Section"
        Component={CompletedGoals}
        componentPath="resources/js/components/dashboard/analytics/completed-goals.tsx"
      />

      <ComponentViewer
        title="Completed Rates Section"
        Component={CompletedRates}
        componentPath="resources/js/components/dashboard/analytics/completed-rates.tsx"
      />

      <ComponentViewer
        title="Sales Country Section"
        Component={SalesCountry}
        componentPath="resources/js/components/dashboard/analytics/sales-country.tsx"
      />

      <ComponentViewer
        title="Top Performing Section"
        Component={TopPerforming}
        componentPath="resources/js/components/dashboard/analytics/top-performing.tsx"
      />

      <ComponentViewer
        title="Top Queries Section"
        Component={TopQueries}
        componentPath="resources/js/components/dashboard/analytics/top-queries.tsx"
      />
    </div>
  )
}

export default Page
