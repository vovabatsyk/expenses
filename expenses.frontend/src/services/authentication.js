import * as axios from 'axios'
import { toast } from 'react-toastify'
import { userAuthenticated } from '../app/authenticationSlice'

const axiosInstance = axios.create({
  baseURL: 'https://localhost:5001/Authentication'
})

export const SignUp = async (dispatch, credentials) => {
  try {
    const { data } = await axiosInstance.post('/signup', credentials)
    dispatch(userAuthenticated(data))
  } catch (error) {
    toast.error('Username already exists')
  }
}

export const SignIn = async (dispatch, credentials) => {
  try {
    const { data } = await axiosInstance.post('/signin', credentials)
    dispatch(userAuthenticated(data))
  } catch (error) {
    toast.error('Invalid username or password')
  }
}
