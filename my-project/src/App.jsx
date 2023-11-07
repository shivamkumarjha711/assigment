import { Fragment, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </Fragment>
  )
}

export default App
