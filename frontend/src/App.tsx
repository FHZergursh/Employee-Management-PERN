import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import AddEmployee from './pages/AddEmployee.tsx'

const App = () => {
  return (
    <div className='h-screen bg-gray-700 text-blue-100'>
      <Routes>
        <Route path = "/" element={<HomePage />} />
        <Route path = "/addEmployee" element={<AddEmployee />} />
      </Routes>

      

    </div>
  )
}

export default App