import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { SignIn } from '../services/authentication'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'

export const SignInPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  return (
    <div
      style={{
        width: '23rem',
        margin: 'auto',
        paddingTop: '18px',
        border: '1px solid #cecece',
        padding: '10px',
        marginTop: '50px',
        borderRadius: '5px'
      }}
    >
      <Form
        onSubmit={(event) => {
          event.preventDefault()
          SignIn(dispatch, { username, password })
        }}
      >
        <h4 className='text-center'>Welcome back</h4>
        <InputGroup className='mb-3'>
          <FormControl
            placeholder='Username'
            onChange={(event) => setUsername(event.target.value)}
          ></FormControl>
        </InputGroup>
        <InputGroup className='mb-3'>
          <FormControl
            placeholder='Password'
            type='password'
            onChange={(event) => setPassword(event.target.value)}
          ></FormControl>
        </InputGroup>
        <Button
          type='submit'
          variant='primary'
          style={{ margin: 'auto', display: 'block', width: '10rem' }}
        >
          Sign In
        </Button>
      </Form>
    </div>
  )
}
