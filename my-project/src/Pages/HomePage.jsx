import React, { useState } from 'react'
import axios from "axios"
import Table from "../Componenets/Table"

const HomePage = () => {
  const [task, setTaask] = useState({
    name: "",
    lastName: "",
    email: "",
    mobileNo: "",
    project: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaask({
      ...task,
      [name]: value,
    });
  };

  const handleOnSubmmit = async (e) => {
    e.preventDefault();

    const result = await axios.post("http://localhost:3000/api/v1/add-task", task)

    console.log(result);

    setTaask({
      name: "",
      lastName: "",
      email: "",
      mobileNo: "",
      project: ""
    })

  }

  return (
    <div className='flex justify-evenly'>
      <div className='text-left'>
        <div>Show Task</div>
        <div>
          <Table />
        </div>
      </div>

      <div>
        <h1 className='text-left'>Create Client</h1>

        <form onSubmit={handleOnSubmmit} className='text-left'>
        <div className='flex flex-col align-baseline'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            className='border'
            value={task.name}
            name='name'
            id='name'
            onChange={handleChange}
          />
        </div>

        <div className='flex flex-col align-baseline'>
          <label htmlFor='lastName'>Last Name</label>
          <input
            className='border'
            value={task.lastName}
            name='lastName'
            id='lastName'
            onChange={handleChange}
          />
        </div>

        <div className='flex flex-col align-baseline'>
          <label htmlFor='email'>Eamil</label>
          <input
            className='border'
            value={task.email}
            name='email'
            id='email'
            onChange={handleChange}
          />
        </div>

        <div className='flex flex-col align-baseline'>
          <label htmlFor='mobileNo'>Mobile</label>
          <input
            className='border'
            value={task.mobileNo}
            name='mobileNo'
            id='mobileNo'
            onChange={handleChange}
          />
        </div>

        <div className='flex flex-col align-baseline'>
          <label htmlFor='project'>Project</label>
          <input
            className='border'
            value={task.project}
            name='project'
            id='project'
            onChange={handleChange}
          />
        </div>

        <button type='submit' className='border bg-blue-700 mt-5'>Create Client</button>
        </form>

      </div>
    </div>
  )
}

export default HomePage