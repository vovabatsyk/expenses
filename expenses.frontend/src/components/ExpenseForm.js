import { React, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { DeleteExpenses, EditExpenses, NewExpenses } from '../services/expenses'

export const ExpenseForm = ({ expense, setIsEditing }) => {
  const dispatch = useDispatch()
  const descriptions = ['Privat bank', 'Monobank', 'PUMB', 'Credit privatbank']
  const [amount, setAmount] = useState(0)
  const [description, setDescription] = useState(descriptions[0])
  const [isNewExpense, setIsNewExpense] = useState(true)

  useEffect(() => {
    if (expense !== undefined) {
      setIsNewExpense(false)
      setAmount(expense.amount)
      setDescription(expense.description)
    } else {
      setIsNewExpense(true)
    }
  }, [expense])

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        if (isNewExpense) {
          NewExpenses(dispatch, { description, amount: Number(amount) })
        } else {
          EditExpenses(dispatch, {
            id: expense.id,
            description,
            amount: Number(amount)
          })
          setIsEditing(false)
        }
      }}
      className='m-2 w-100'
    >
      <Row>
        <Col>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as='select'
            onChange={(event) => setDescription(event.target.value)}
          >
            {descriptions.map((d, i) => (
              <option key={i}>{d}</option>
            ))}
          </Form.Control>
        </Col>
        <Col>
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type='number'
            step='0.1'
            placeholder={amount}
            onChange={(event) => setAmount(event.target.value)}
          ></Form.Control>
        </Col>
        <div style={{ marginTop: 'auto' }}>
          {isNewExpense ? (
            <Button variant='info' type='submit' className='mr-2'>
              Add
            </Button>
          ) : (
            <div className='mt-2 ml-3'>
              <Button
                variant='danger'
                className='mr-2'
                onClick={() => DeleteExpenses(dispatch, expense)}
              >
                Delete
              </Button>
              <Button variant='success' type='submit' className='mr-2'>
                Save
              </Button>
              <Button
                variant='primary'
                className='mr-2'
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
            </div>
          )}
        </div>
      </Row>
    </Form>
  )
}
