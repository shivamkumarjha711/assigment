import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const EditTask = (props) => {
    const navigate = useNavigate()
    const {id} = useParams()
    // console.log(id);
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
    
        const result = await axios.put(`http://localhost:3000/api/v1/edit-task/${id}`, task)
    
        // console.log(result);
    
        navigate("/")
    
      }

  return (
    <div>
        <h1 className='text-left'>Edit Client</h1>

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

        <button type='submit' className='border bg-blue-700 mt-5'>Edit Client</button>
        </form>
        
      </div>
  )
}

export default EditTask