import React from 'react'
import PatientsData from '../components/PatientsData'
import Dashboard from '../components/Dashboard'

function Home() {
    return (
        <div>
            <React.StrictMode>
                <Dashboard />
                {/* <PatientsData/> */}
            </React.StrictMode>
    </div>
  )
}
export default Home
