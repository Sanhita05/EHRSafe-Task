import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoPeople, IoDocumentText } from "react-icons/io5";
import { IoMdSearch, IoIosArrowDown } from "react-icons/io";
import PatientsList from "./PatientsList";
import PatientDetails from "./PatientDetails";
import Sidebar from "./Sidebar";
function Dashboard() {
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
  };
  // const [show, setShow] = useState(true);
  // const closeSidebar = () => setShow(false);
  // const showSidebar = () => setShow(true);
  return (
    <div>
      <div className="dashboardAll">
        <div className="row gx-0">
          <div className="col-xl-2 col-lg-3">
            <div className="pSide TabHide">
              <div className="Logo pb-3">
                <h5>@ EHR Safe</h5>
              </div>
              <div className="py-5 borderBtm">
                <ul>
                  <li>
                    <IoPeople />
                    Patients
                  </li>
                  <li className="sideActive">
                    <IoDocumentText />
                    Health Records
                  </li>
                  <li>
                    <IoDocumentText />
                    Prescriptions
                  </li>
                  <li>
                    <IoDocumentText />
                    Investigations
                  </li>
                </ul>
              </div>
              <ul className="mt-5 pt-5">
                <li className="mt-5 pt-5">
                  <IoPeople />
                  Contact Us
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-10 col-lg-9">
            <div className="">
              <div className="header sticky-top d-flex justify-content-between align-items-center">
                <div className="hideLg d-flex align-items-center">
                  <Sidebar />
                  {/* <h5><b>@ EHR Safe</b></h5> */}
                </div>
                <div className="lSec">
                  <h4>Health Records</h4>
                </div>
                <div className="profile d-flex">
                  <img src="../assets/images/Customer1.webp" alt="" />
                  <div className="name">Matthew Parker <IoIosArrowDown /></div>
                </div>
              </div>
              {/* <DetailsSec /> */}
              {/* <PatientsList /> */}
              <div className="detailPart">
                <div className="row mb-3">
                  <div className="col-5 ms-auto">
                    <div className="d-flex align-items-center">
                    <div className="SearchInput">
                      <input
                        className="searchNew"
                        type="text"
                        placeholder="Search"
                        // value={searchTerm}
                        // onChange={e => setSearchTerm(e.target.value)}
                      />
                      <span className="srIcn">
                        <IoMdSearch />
                      </span>
                    </div>
                    <div className="searchNew dateFilter">
                        <div className="date">Sort by: <b>Date</b> <IoIosArrowDown /></div>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="listP">
                      <PatientsList
                        onSelectPatient={handleSelectPatient}
                        activePatientId={selectedPatient?.id}
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="SelecP listP">
                      <PatientDetails selectedPatient={selectedPatient} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
