import { ExpenseForm } from './ExpenseForm'
import { ExpenseList } from './ExpenseList'

export const HomePage = () => {
  return (
    <div className='container'>
      <h3 className='mt-2 text-center'>New Expenses</h3>
      <ExpenseForm />
      <hr />
      <h3 className='text-center'>Your Expenses</h3>
      <ExpenseList />
    </div>
  )
}
