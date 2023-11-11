import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Table = () => {
    const navigate = useNavigate()
    const [tasks, setTask] = useState()
    // console.log(tasks);

    const handleDelete = async (id) => {
        if (window.confirm("Are you want to delete task ? ")) {
            const res = await axios.delete(`http://localhost:3000/api/v1/delete-task/${id}`)
            // console.log(res);
            getAllTask()
        }
    }

    // const handleEditTask = async () => {
    //     navigate("/edit-task")
    // }
    
    const getAllTask = async () => {
        const tasks = await axios.get("http://localhost:3000/api/v1/all-tasks")
        // console.log(tasks.data.tasks);
        setTask(tasks)
    }

    useEffect(() => {
        getAllTask()

    }, [])

  return (
    <div>
        <table className='text-left'>
            <thead>
                <tr className='bg-gray-200'>
                    <th>S. No. </th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Mobile No.</th>
                    <th>Project</th>
                </tr>
            </thead>
            <tbody>
                {tasks?.data?.tasks?.map((task, ind) => {
                    return (
                        <tr key={task._id}>
                            <td>{ind + 1}</td>
                            <td>{task.name}</td>
                            <td>{task.lastName}</td>
                            <td>{task.email}</td>
                            <td>{task.mobileNo}</td>
                            <td>{task.project}</td>
                            <td><button onClick={() => navigate("/edit-task", {state: task})}>Edit</button></td> | 
                            <td><button onClick={() => handleDelete(task._id)}>Delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Table