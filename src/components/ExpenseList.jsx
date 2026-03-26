import React from 'react'
import ExpenseItem from './ExpenseItem'
import '../styles/list.css'

const ExpenseList = ({ expenses, onDelete }) => {
  if (expenses.length === 0) {
    return <div className="no-expenses">No expenses yet. Add one to get started!</div>
  }

  return (
    <div className="expense-list">
      <h2>Expense History</h2>
      {expenses.map((expense) => (
        <ExpenseItem 
          key={expense.id} 
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          category={expense.category}
          date={expense.date}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default ExpenseList