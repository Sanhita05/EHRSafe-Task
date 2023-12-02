import React from 'react'
import {useState} from 'react'  
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Button, Container, Offcanvas } from 'react-bootstrap';  
import { IoReorderThreeOutline, IoPeople, IoDocumentText } from "react-icons/io5";

function Dashboard() {
    const [show, setShow] = useState(false);  
    const closeSidebar = () => setShow(false);  
    const showSidebar = () => setShow(true);  
  return (
    <div className='offcanva'>
      <Container className=''>  
      <button className='BtnSide' onClick={showSidebar}>  
        <IoReorderThreeOutline />
      </button>  
      <Offcanvas show={show} onHide={closeSidebar}>  
        <Offcanvas.Header closeButton>  
          <Offcanvas.Title><b>@ EHR Safe</b></Offcanvas.Title>  
        </Offcanvas.Header>  
        <Offcanvas.Body className='dashboardAll'>  
        <div className="pSide">
              <div className="py-5 borderBtm">
                <ul>
                  <li>
                    <IoPeople />
                    Patients
                  </li>
                  <li className="sideActive"><IoDocumentText />Health Records</li>
                  <li><IoDocumentText />Prescriptions</li>
                  <li><IoDocumentText />Investigations</li>
                </ul>
              </div>
            </div>
        </Offcanvas.Body>  
      </Offcanvas>  
      </Container>  
    </div>
  )
}

export default Dashboard
