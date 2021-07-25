import {
  ActionTypes,
  setExpensesError,
  newExpenseError,
  editExpenseError,
  deleteExpenseError
} from '../app/expensesReducer'
import { toast } from 'react-toastify'

const { DELETE_EXPENSES, EDIT_EXPENSES, NEW_EXPENSES } = ActionTypes

const ToastMiddleware = () => (next) => (action) => {
  switch (action.type) {
    case NEW_EXPENSES:
      toast.success('New expense added success')
      break

    case EDIT_EXPENSES:
      toast.success('Expense edited successfully')
      break

    case DELETE_EXPENSES:
      toast.success('Expense deleted successfully')
      break

    case setExpensesError.type:
      toast.error('Error loading expenses')
      break
    case newExpenseError.type:
      toast.error('Error adding expense')
      break
    case editExpenseError.type:
      toast.error('Error editing expenses')
      break
    case deleteExpenseError.type:
      toast.error('Error deleting expenses')
      break

    default:
      break
  }
  return next(action)
}

export default ToastMiddleware
