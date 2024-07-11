import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import EmployeeTable from './components/Navigations/EmplyeeTable';
import Home from './components/Navigations/Home';
import AddEmployeeForm from './components/Navigations/AddemployeeForm';
import EditEmployeeForm from './components/Navigations/EditemployeeForm';
import { employees as initialEmployees } from './data/Employees';
import './App.css';

const App = () => {
  const [employees, setEmployees] = useState(
    initialEmployees.map(employee => ({
      ...employee,
      editCount: 0,
      deleteCount: 0,
    }))
  );
  const [nextId, setNextId] = useState(initialEmployees.length + 1);

  const addEmployee = (employee) => {
    setEmployees([...employees, { ...employee, id: nextId, editCount: 0, deleteCount: 0 }]);
    setNextId(nextId + 1);
  };

  const editEmployee = (employee) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === employee.id
          ? { ...employee, editCount: emp.editCount + 1, deleteCount: emp.deleteCount }
          : emp
      )
    );
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === updatedEmployee.id
          ? { ...updatedEmployee, editCount: employee.editCount, deleteCount: employee.deleteCount }
          : employee
      )
    );
  };

  const deleteEmployee = (id) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === id
          ? { ...employee, deleteCount: employee.deleteCount + 1 }
          : employee
      ).filter(employee => employee.id !== id)
    );
  };

  return (
    <Router>
      <div className="App">
        <h1>Employee Management System</h1>
        <nav className='navbar'>
           <Link to="/list">Employee List</Link>  <Link to="/add">Add Employee</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route
            path="/list"
            element={
              <EmployeeTable
                employees={employees}
                editEmployee={editEmployee}
                deleteEmployee={deleteEmployee}
              />
            }
          />
          <Route path="/add" element={<AddEmployeeForm addEmployee={addEmployee} />} />
          <Route path="/edit/:id" element={<EditEmployeeForm employees={employees} updateEmployee={updateEmployee} />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
