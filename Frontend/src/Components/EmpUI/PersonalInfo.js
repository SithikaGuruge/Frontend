import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const PersonalInfo = () => {
  const [column, setColumn] = useState([]);
  const [record, setRecord] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/personalInfo")
      .then((response) => response.json())
      .then((data) => {
        setColumn(Object.keys(data[0]));
        setRecord(data);
      })
      .catch((error) => console.error("Error fetching data2:", error));
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/login/Employee" className="navbar-brand">
            Logout
          </Link>
        </div>
      </nav>
      <h1>Personal Informations</h1>
      {record.map((record, i) => (
        <div className="d-flex justify-content-center align-items-center gradient-bg bg-primary vh-100">
          <tr key={i}>
            <h6>Employee ID : {record.Employee_ID}</h6>
            <h6>Name : {record.Name}</h6>
            <h6>Organization Name :{record.Organization_Name}</h6>

            <h6>
              Birthdate : {new Date(record.Birthdate).toLocaleDateString()}
            </h6>
            <h6>Marital Status : {record.Marital_status}</h6>
            <h6>
              Emergency Contact Number : {record.Emergency_contact_Number}
            </h6>
            <h6>Status Type : {record.Status_Type}</h6>
            <h6>Job Title : {record.Job_Title}</h6>
            <h6>Supervisor_Name : {record.Supervisor_Name}</h6>
          </tr>
        </div>
      ))}

      {column == null && <p>Loading....</p>}
    </div>
  );
};

export default PersonalInfo;
