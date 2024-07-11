import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditEmployeeForm = ({ employees, updateEmployee, deleteEmployee }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const employeeToEdit = employees.find((employee) => employee.id === parseInt(id));

  const [formData, setFormData] = useState(
    employeeToEdit
      ? {
          id: employeeToEdit.id,
          name: employeeToEdit.name,
          location: employeeToEdit.location,
          email: employeeToEdit.email,
          mobile: employeeToEdit.mobile,
          deleteCount: employees.length,
        }
      : {
          id: '',
          name: '',
          location: '',
          email: '',
          mobile: '',
          deleteCount: employees.length,
        }
  );

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employeeToEdit) {
      updateEmployee(formData);
      setIsSubmitted(true);
    }
  };

  const handleBack = () => {
    navigate('/employee-list');
  };

  

  return (
    <div>
      {isSubmitted ? (
        <div>
          <h4>Employee Details:</h4>
          <p>Name: {formData.name}</p>
          <p>Location: {formData.location}</p>
          <p>Email: {formData.email}</p>
          <p>Mobile: {formData.mobile}</p>
          
          <button className='button-1' onClick={handleBack}>Back</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="employee-form">
          <h4>Edit Employee</h4>
          <div>
            <label>Employee Name:</label>
            <input
              type="text"
              name="name"
              placeholder=""
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Location:</label>
            <input
              type="text"
              name="location"
              placeholder=""
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder=""
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Mobile:</label>
            <input
              type="text"
              name="mobile"
              placeholder=""
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
          <button className='button' type="submit">Submit</button>
          
        </form>
      )}
     
    </div>
  );
};

export default EditEmployeeForm;