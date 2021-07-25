import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetExpenses } from '../services/expenses'
import { Button, Row, Col } from 'react-bootstrap'
import { ExpenseForm } from './ExpenseForm'

export const ExpenseList = () => {
  const dispatch = useDispatch()

  const expenses = useSelector((state) => state.expensesReducer.expenses)

  useEffect(() => {
    GetExpenses(dispatch)
  }, [])

  return expenses.length < 1 ? (
    <p className='text-center m-2'>No expenses</p>
  ) : (
    expenses.map((e) => (
      <div style={{ marginBottom: '1rem' }} key={e.id}>
        <ListRow expense={e} />
      </div>
    ))
  )
}

const ListRow = ({ expense }) => {
  const [isEditing, setIsEditing] = useState(false)
  return isEditing ? (
    <ExpenseForm expense={expense} setIsEditing={setIsEditing} />
  ) : (
    <div>
      <Row>
        <Col>{expense.description}</Col>
        <Col>{expense.amount} UAH</Col>
        <Button variant='warning' onClick={() => setIsEditing(!isEditing)}>
          Edit
        </Button>
      </Row>
      <hr />
    </div>
  )
}
