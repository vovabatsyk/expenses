import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import ToastMiddleware from '../middlewares/ToastMiddleware'
import authenticationSlice from './authenticationSlice'
import { expensesReducer } from './expensesReducer'

export default configureStore({
  reducer: {
    authenticationSlice: authenticationSlice,
    expensesReducer: expensesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ToastMiddleware)
})
