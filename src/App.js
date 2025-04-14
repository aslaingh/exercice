import React from 'react'
//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Projects from './components/ProjectsPage'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/Projects' element={<ProjectsPage/>} />
      
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App