import CalendarDateRangePicker from "@/components/date-range-picker";
import TeamMembersCard from "./cards/theme-members";
import SubscriptionsCard from "./cards/subscriptions";
import TotalRevenueCard from "./cards/total-revenue";
import { ChatCard } from "./cards/chat";
import { Button } from "@/components/ui/button";
import MetricCard from "./cards/metric";
import { PaymentsCard } from "./cards/payment";
import { PaymentMethodCard } from "./cards/payment-method";
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Page() {
  return (
    <>
    <AppLayout breadcrumbs={breadcrumbs}>
        <Head title="Dashboard" />
        <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
            <div className="mb-4 flex items-center justify-between space-y-2">
                <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                <div className="flex items-center space-x-2">
                <CalendarDateRangePicker />
                <Button>Download</Button>
                </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
                <TeamMembersCard />
                <SubscriptionsCard />
                <TotalRevenueCard />
                <ChatCard />
                <div className="lg:col-span-2">
                <MetricCard className="h-full" />
                </div>
                <div className="lg:col-span-2">
                <PaymentsCard className="h-full" />
                </div>
                <PaymentMethodCard />
            </div>
        </div>
      </AppLayout>
    </>
  );
}
