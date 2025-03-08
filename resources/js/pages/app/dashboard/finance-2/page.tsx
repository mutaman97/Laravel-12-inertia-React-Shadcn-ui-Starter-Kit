import ActivityCard from '@/components/dashboard/finance-2/activity-card'
import BalanceCard from '@/components/dashboard/finance-2/balance-card'
import BankCard from '@/components/dashboard/finance-2/bank-card'
import CurrencyCard from '@/components/dashboard/finance-2/currency-card'
import CustomerTransactions from '@/components/dashboard/finance-2/customer-transactions'
import ExpenseHistory from '@/components/dashboard/finance-2/expense-history'
import Investment from '@/components/dashboard/finance-2/investment'
import MySavings from '@/components/dashboard/finance-2/my-savings'
import TransactionCard from '@/components/dashboard/finance-2/transaction-card'
import WalletSummary from '@/components/dashboard/finance-2/wallet-summary'

const Page = () => {
  return (
    <div className="grid grid-cols-12 gap-7">
      <BalanceCard className="col-span-12 lg:col-span-6" />
      <CurrencyCard className="col-span-12 lg:col-span-6" />

      <TransactionCard className="col-span-12 lg:col-span-8" />
      <BankCard className="col-span-12 lg:col-span-4" />

      <WalletSummary className="col-span-12 lg:col-span-4" />
      <CustomerTransactions className="col-span-12 lg:col-span-8" />

      <Investment className="col-span-12 lg:col-span-8" />
      <ActivityCard className="col-span-12 lg:col-span-4" />

      <MySavings className="col-span-12 lg:col-span-4" />
      <ExpenseHistory className="col-span-12 lg:col-span-8" />
    </div>
  )
}

export default Page
