import React from 'react';
import { BrowserRouter as Router, Routes , Route, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import Home from './pages/Home';

function App() {

  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        </Routes>
    </Router>
  )
}

export default App

