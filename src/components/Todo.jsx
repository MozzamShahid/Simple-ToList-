import React, {useState} from 'react'

const Todo = () => {
    const [todoInput, settodoInput] = useState('')
    const [todoList, settodoList] = useState([])

    const handleChange = (e) => {
        settodoInput(e.target.value)
    }

    const handleSubmit = () => {
        settodoList(prev => [...prev, {todoData: todoInput}])
        settodoInput('')
    }

    const deleteinput = (id) => {
        settodoList(prev => prev.filter((_, index) => index != id));
    }
  return (
    <div className='bg-neutral-400 flex flex-col justify-center items-center'>
      <h2>Todo List</h2>
      <input type="text" value={todoInput} onChange={handleChange} />
      <button onClick={handleSubmit} type='button'>Submit</button>
      <div className='flex flex-col gap-2'>
        {todoList.map((list, id) => (
            <div key={id} className='flex gap-5'>{list.todoData}
            <button onClick={() => deleteinput(id)} className='bg-red-400 p-1'>Delete</button></div>
        ))}
      </div>
    </div>
  )
}

export default Todo
