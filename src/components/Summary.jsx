import React from 'react'
import '../styles/summary.css'

const Summary = ({ total, expenseCount }) => {
  return (
    <div className="summary">
      <div className="summary-card">
        <h3>Total Expenses</h3>
        <p className="total-amount">${parseFloat(total).toFixed(2)}</p>
      </div>
      <div className="summary-card">
        <h3>Number of Expenses</h3>
        <p className="expense-count">{expenseCount}</p>
      </div>
    </div>
  )
}

export default Summary