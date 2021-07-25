import {
  ActionCreators,
  setExpensesError,
  newExpenseError,
  editExpenseError,
  deleteExpenseError
} from '../app/expensesReducer'
import * as axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://localhost:5001/Expenses'
})

axiosInstance.interceptors.request.use((config) => {
  config.headers = {
    authorization: 'Bearer ' + sessionStorage.getItem('token')
  }
  return config
})

export const GetExpenses = async (dispatch) => {
  try {
    const { data } = await axiosInstance.get()

    dispatch(ActionCreators.setExpenses(data))
  } catch (error) {
    dispatch(setExpensesError())
  }
}
export const NewExpenses = async (dispatch, expense) => {
  try {
    const { data } = await axiosInstance.post('', expense)

    dispatch(ActionCreators.newExpenses(data))
  } catch (error) {
    dispatch(newExpenseError())
  }
}

export const EditExpenses = async (dispatch, expense) => {
  try {
    await axiosInstance.put('', expense)
    dispatch(ActionCreators.editExpenses(expense))
  } catch (error) {
    dispatch(editExpenseError())
  }
}

export const DeleteExpenses = async (dispatch, expense) => {
  try {
    await axiosInstance.delete('', { data: { ...expense } })
    dispatch(ActionCreators.deleteExpenses(expense))
  } catch (error) {
    dispatch(deleteExpenseError())
  }
}
