import { createAction } from '@reduxjs/toolkit'

export const setExpensesError = createAction('setExpensesError')
export const newExpenseError = createAction('newExpenseError')
export const editExpenseError = createAction('editExpenseError')
export const deleteExpenseError = createAction('deleteExpenseError')

const initialState = {
  expenses: []
}

export const ActionTypes = {
  SET_EXPENSES: 'SET_EXPENSES',
  NEW_EXPENSES: 'NEW_EXPENSES',
  EDIT_EXPENSES: 'EDIT_EXPENSES',
  DELETE_EXPENSES: 'DELETE_EXPENSES'
}

export const ActionCreators = {
  setExpenses: (payload) => ({ type: ActionTypes.SET_EXPENSES, payload }),
  newExpenses: (payload) => ({ type: ActionTypes.NEW_EXPENSES, payload }),
  editExpenses: (payload) => ({ type: ActionTypes.EDIT_EXPENSES, payload }),
  deleteExpenses: (payload) => ({ type: ActionTypes.DELETE_EXPENSES, payload })
}

export const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_EXPENSES:
      return { ...state, expenses: [...action.payload] }

    case ActionTypes.NEW_EXPENSES:
      return { ...state, expenses: [action.payload, ...state.expenses] }

    case ActionTypes.EDIT_EXPENSES:
      var expenses = state.expenses.map((e) => {
        if (e.id === action.payload.id) {
          e = action.payload
        }
        return e
      })
      return { ...state, expenses: [...expenses] }

    case ActionTypes.DELETE_EXPENSES:
      var expenses = state.expenses.filter((e) => e.id !== action.payload.id)
      return { ...state, expenses: [...expenses] }

    default:
      return state
  }
}
