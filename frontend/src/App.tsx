import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const routes = (
  <Router>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<SignUp />} />
    </Routes>
  </Router>
)

function App() {
  return (
    <div>
      {routes}
    </div>
  )
}

export default App