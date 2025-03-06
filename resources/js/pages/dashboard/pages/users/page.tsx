import { Button } from '@/components/ui/button'
import { Link, PageProps } from '@inertiajs/react'
import UsersDataTable from './data-table'

// Define the type for the props
interface UsersPageProps extends PageProps {
  users: any[] // Replace `any` with the actual type of your user data
}

export default function Page({ users }: UsersPageProps) {
  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Users</h1>
        <Button asChild>
          <Link href="#">{/*<PlusCircledIcon className="me-2" /> Add New User*/}</Link>
        </Button>
      </div>
      <UsersDataTable data={users} />
    </>
  )
}
