import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';

const Table = () => {
    const [openModal, setOpenModal] = useState(false);
    // const [email, setEmail] = useState('');
    const [tasks, setTask] = useState()
    const [preTask, setPreTask] = useState({
        name: '',
        lastName: '',
        email: '',
        mobileNo: '',
        project: ''
    });

    const getAllTask = async () => {
        const response  = await axios.get("http://localhost:3000/api/v1/all-tasks")
        console.log(response.data.tasks);
        setTask(response)
    }

    function onCloseModal() {
        setOpenModal(false);
        // setEmail('');
    }

    const handleDelete = async (id) => {
        if (window.confirm("Are you want to delete task ? ")) {
            const res = await axios.delete(`http://localhost:3000/api/v1/delete-task/${id}`)
            // console.log(res);
            getAllTask()
        }
    }

    const singleTask = async (id) => {
        const {data} = await axios.get(`http://localhost:3000/api/v1/task/${id}`)
        // const singletask = data.task
        console.log(data.task);
        setPreTask(data.task)
    }
    

    const handleOnSubmmit = async (id) => {

        const result = await axios.put(`http://localhost:3000/api/v1/edit-task/${id}`, preTask)
    
        console.log(result);
    
        setOpenModal(false)

        getAllTask()
      }

    // console.log(tasks);

    

    useEffect(() => {
        getAllTask()
    }, [])

    // useEffect(() => {
    //     singleTask()
    // }, [preTask._id])

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
                            <td><button onClick={() => handleDelete(task._id)}>Delete</button> | </td>

                            <td>
                                <Button onClick={() => {
                                    setOpenModal(true);
                                    singleTask(task._id);
                                }}>Edit</Button>
                                <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                                    <Modal.Header />
                                    <Modal.Body>
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit Client</h3>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="name" value="Your name" />
                                            </div>
                                            <TextInput
                                                id="name"
                                                value={preTask.name}
                                                onChange={(event) => setPreTask({...preTask, name: event.target.value})}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="lastName" value="Your lastName" />
                                            </div>
                                            <TextInput
                                                id="lastName"
                                                value={preTask.lastName}
                                                onChange={(event) => setPreTask({...preTask, lastName: event.target.value})}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="email" value="Your email" />
                                            </div>
                                            <TextInput
                                                id="email"
                                                value={preTask.email}
                                                onChange={(event) => setPreTask({...preTask, email: event.target.value})}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="mobileNo" value="Your mobileNo" />
                                            </div>
                                            <TextInput
                                                id="mobileNo"
                                                value={preTask.mobileNo}
                                                onChange={(event) => setPreTask({...preTask, mobileNo: event.target.value})}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="project" value="Your project" />
                                            </div>
                                            <TextInput
                                                id="project"
                                                value={preTask.project}
                                                onChange={(event) => setPreTask({...preTask, project: event.target.value})}
                                                required
                                            />
                                        </div>
                                        {JSON.stringify(preTask)}
                                        <div className="w-full">
                                            <Button onClick={() => handleOnSubmmit(task._id)}>Done</Button>
                                        </div>
                                    </div>
                                    </Modal.Body>
                                </Modal>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Table