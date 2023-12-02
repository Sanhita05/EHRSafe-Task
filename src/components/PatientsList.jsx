// PatientList.js
import React, { useState } from 'react';
import patientsData from './PatientsData';
import { IoMdSearch } from "react-icons/io";


const PatientsList = ({ onSelectPatient, activePatientId }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredPatients = patientsData
      .filter(patient =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice(0, 4);

  return (
    <div className='SearchInput'>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <span className='srIcn'><IoMdSearch /></span>
      <ul>
        {filteredPatients.map(patient => (
          <li
          key={patient.id}
          onClick={() => onSelectPatient(patient)}
          className={activePatientId === patient.id ? 'active' : ''}
        >
          {patient.name}
        </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientsList;
