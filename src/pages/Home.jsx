import React, { useState, useEffect } from 'react'
import ExpenseForm from '../components/ExpenseForm'
import ExpenseList from '../components/ExpenseList'
import Summary from '../components/Summary'
import '../styles/index.css'

const Home = () => {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('expenses');
    return saved ? JSON.parse(saved) : [];
  })

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses])

  function addExpense(expense) {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  }

  function deleteExpense(id) {
    setExpenses(expenses.filter(item => item.id !== id));
  }

  const total = expenses.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0); 

  return (
    <div className="app-container">
      <h1>Student Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <Summary total={total} expenseCount={expenses.length} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  )
}

export default Home