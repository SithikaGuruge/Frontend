import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/login";
import About from "./Components/about";
import Dashboard from "./Components/dashboard";
import Employee from "./Components/Employee/Employee";
import Admin from "./Components/Admin/Admin";
import ManUI from "./Components/ManUI/ManUI";
import EmployeeUI from "./Components/EmpUI/EmployeeUI";
import SupervisorUI from "./Components/SupervisorUI/SupervisorUI";
import PersonalInfo from "./Components/EmpUI/PersonalInfo";
import AdminUI from "./Components/Admin/AdminUi";
import AccountantUI from "./Components/Accountant/AccUI";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Dashboard />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/login/Employee" element={<Employee />}></Route>
            <Route path="/login/Admin" element={<Admin />}></Route>
            <Route path="/login/Employee:JT001" element={<ManUI />}></Route>
            <Route
              path="/login/Employee:JT002"
              element={<SupervisorUI />}
            ></Route>
            <Route
              path="/login/Employee:JT003"
              element={<AccountantUI />}
            ></Route>
            <Route
              path="/login/Employee:JT004"
              element={<EmployeeUI />}
            ></Route>
            <Route
              path="/login/Employee:JT005"
              element={<EmployeeUI />}
            ></Route>
            <Route
              path="/login/Employee/EmployeeUI/PersonalInfo"
              element={<PersonalInfo />}
            ></Route>
            <Route path="/login/Admin/AdminUI" element={<AdminUI />}></Route>
            <Route path="*" element={<h1>Not Found</h1>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
