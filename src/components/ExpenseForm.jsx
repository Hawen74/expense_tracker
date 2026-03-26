import React, { useState } from 'react'
import '../styles/form.css'

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !date) {
      alert("Please fill in all fields");
      return;
    }
    onAddExpense({ title, amount, category, date });
    setTitle("");
    setAmount("");
    setCategory("Food");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text'
        placeholder='Enter item'
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='number'
        placeholder='Enter amount ($)'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Books">Books</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
      </select>
      <input 
        type='date'
        placeholder='Enter a date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default ExpenseForm