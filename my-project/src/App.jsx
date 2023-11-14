import { Fragment, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import EditTask from './Componenets/EditTask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/edit-task/:id' element={<EditTask />}></Route>
      </Routes>
    </Fragment>
  )
}

export default App
