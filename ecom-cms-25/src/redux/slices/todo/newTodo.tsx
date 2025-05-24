"use client"
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo} from '../todoChai/todoSlice.js'
const NewTodo = () => {

  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler=(e:any)=>{
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }
  return (
    <form onSubmit={addTodoHandler} className='flex items-center gap-2 p-4 bg-white rounded-lg shadow-md'>
      <input
        type='text'
        className='flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-400'
        placeholder='Enter a todo'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type='submit'
        className='px-5 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 ease-in-out'
      >
        Add Todo
      </button>
    </form>
  )
}

export default NewTodo
