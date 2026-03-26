import React from 'react'
import '../styles/item.css'

const ExpenseItem = ({ id, title, amount, category, date, onDelete }) => {
  return (
    <div className="expense-item">
      <div className="expense-info">
        <h3>{title}</h3>
        <p className="category">{category}</p>
        <p className="date">{new Date(date).toLocaleDateString()}</p>
      </div>
      <div className="expense-amount">${parseFloat(amount).toFixed(2)}</div>
      <button className="delete-btn" onClick={() => onDelete(id)}>Delete</button>
    </div>
  )
}

export default ExpenseItem