import ComponentViewer from '@/components/component-viewer'
import ActivityCard from '@/components/dashboard/project-management/activity-card'
import AppCalender from '@/components/dashboard/project-management/app-calender'
import Chat from '@/components/dashboard/project-management/chat'
import ProjectProgress from '@/components/dashboard/project-management/project-progress'
import ReportCard from '@/components/dashboard/project-management/report-card'
import StatisticCards from '@/components/dashboard/project-management/statistics-cards'
import TaskDistribution from '@/components/dashboard/project-management/task-distribution'
import ToDoList from '@/components/dashboard/project-management/to-do-list'
import WelcomeCard from '@/components/dashboard/project-management/welcome-card'

const Page = () => {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-14">
      <ComponentViewer
        title="Welcome Card Section"
        Component={WelcomeCard}
        componentPath="src/components/dashboard/project-management/welcome-card.tsx"
      />

      <ComponentViewer
        title="Project Progress Section"
        Component={ProjectProgress}
        componentPath="src/components/dashboard/project-management/project-progress.tsx"
      />

      <ComponentViewer
        title="Report Card Section"
        Component={ReportCard}
        componentPath="src/components/dashboard/project-management/report-card.tsx"
      />

      <ComponentViewer
        title="Statistic Cards Section"
        Component={StatisticCards}
        componentPath="src/components/dashboard/project-management/statistics-cards.tsx"
      />

      <ComponentViewer
        title="App Calender Section"
        Component={AppCalender}
        componentPath="src/components/dashboard/project-management/app-calender.tsx"
      />

      <ComponentViewer
        title="Task Distribution Section"
        Component={TaskDistribution}
        componentPath="src/components/dashboard/project-management/task-distribution.tsx"
      />

      <ComponentViewer
        title="Activity Card Section"
        Component={ActivityCard}
        componentPath="src/components/dashboard/project-management/activity-card.tsx"
      />

      <ComponentViewer title="To Do List Section" Component={ToDoList} componentPath="src/components/dashboard/project-management/to-do-list.tsx" />

      <ComponentViewer title="Chat Section" Component={Chat} componentPath="src/components/dashboard/project-management/chat.tsx" />
    </div>
  )
}

export default Page
