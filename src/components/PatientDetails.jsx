// PatientDetails.js
import React from "react";

const PatientDetails = ({ selectedPatient }) => {
  if (!selectedPatient) {
    return <div>Select a patient to view details</div>;
  }

  return (
    <div>
      <ul>
        {selectedPatient.records.map((record, index) => (
          <li key={index}>
            <div className="d-flex justify-content-between">
              <p>{record.diagnosis}</p>

              <p>{record.date}</p>
            </div>
            <div className="name">{record.updatedby}</div>
            <p>{record.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientDetails;
