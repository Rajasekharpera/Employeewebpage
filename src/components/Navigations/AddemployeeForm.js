import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEmployeeForm = ({ addEmployee }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    email: '',
    mobile: '',
  });
  const [addedEmployee, setAddedEmployee] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(formData);
    setAddedEmployee(formData);
    setFormData({id:'', name: '', location: '', email: '', mobile: '' });
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="employee-form">
        <h4>Add Employee</h4>
         
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
      
        
      
    </div>
  );
};

export default AddEmployeeForm;