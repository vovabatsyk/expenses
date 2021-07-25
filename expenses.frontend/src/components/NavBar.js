import { Nav, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../app/authenticationSlice'

export const Navbar = () => {
  const { isLoggedIn } = useSelector((state) => state.authenticationSlice)
  const dispatch = useDispatch()

  return (
    <Nav className='navbar navbar-dark'>
      <h2 style={{ fontFamily: 'Oxygen, cursive' }}>My Expenses</h2>
      {isLoggedIn ? (
        <Button
          variant='outline-info'
          href='/signin'
          onClick={() => dispatch(logout())}
        >
          Log out
        </Button>
      ) : (
        <div className='flex'>
          <NavLink to='/signup' className='link'>
            Sign up
          </NavLink>
          <NavLink to='/signin' className='ml-3 link'>
            Sign in
          </NavLink>
        </div>
      )}
    </Nav>
  )
}
