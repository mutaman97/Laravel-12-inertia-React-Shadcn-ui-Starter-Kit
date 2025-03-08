import ComponentViewer from '@/components/component-viewer'
import PaymentMethod from '@/components/dashboard/dashboard-v2/payment-method'
import PickDate from '@/components/dashboard/dashboard-v2/pick-date'
import StaticsCard from '@/components/dashboard/dashboard-v2/statics-card'
import TeamMembers from '@/components/dashboard/dashboard-v2/team-members'
import TimeSpentExercising from '@/components/dashboard/dashboard-v2/time-spent-exercising'

const Page = () => {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-14">
      <ComponentViewer title="Statics Card Section" Component={StaticsCard} componentPath="src/components/dashboard/dashboard-v2/statics-card.tsx" />

      <ComponentViewer
        title="Payment Method Section"
        Component={PaymentMethod}
        componentPath="src/components/dashboard/dashboard-v2/payment-method.tsx"
      />

      <ComponentViewer
        title="Time Spent Exercising Section"
        Component={TimeSpentExercising}
        componentPath="src/components/dashboard/dashboard-v2/time-spent-exercising.tsx"
      />

      <ComponentViewer title="Team Members Section" Component={TeamMembers} componentPath="src/components/dashboard/dashboard-v2/team-members.tsx" />

      <ComponentViewer title="Pick Date Section" Component={PickDate} componentPath="src/components/dashboard/dashboard-v2/pick-date.tsx" />
    </div>
  )
}

export default Page
