import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EmployeeTable = ({ employees, editEmployee, deleteEmployee }) => {
  const [filter, setFilter] = useState('');

  const handleDelete = (id) => {
    deleteEmployee(id);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Employee List</h2>
      <div>
        <h4>Filter by:</h4>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <p>Total Number of Employees: {filteredEmployees.length}</p>
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id} </td>
              <td>{employee.name}</td>
              <td>{employee.location}</td>
              <td>{employee.email}</td>
              <td>{employee.mobile}</td>
              <td>
                <Link to={`/edit/${employee.id}`}>
                  Edit {employee.editCount} 
                </Link>
              </td>
              <td>
                <Link to="#" onClick={() => handleDelete(employee.id)}>
                  Delete ({employee.deleteCount})
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
