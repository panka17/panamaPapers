import React, {useState} from 'react';
import './Registration.scss';
import {Link} from 'react-router-dom';


function Registration() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const validateForm = () => {
    
    if(!formData.username || !formData.email || !formData.password || !formData.cpassword) return alert('Please fill all the fields')
    else if(formData.username.length < 4) return alert('Name must be at least 4 characters')
    else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) return alert('Please enter a valid email')
    else if(formData.password.length < 4) return alert('password must be at least 4 characters')
    else if(!(formData.cpassword === formData.password)) return alert('passwords must be same')
    else return true


  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      
      const response = await fetch('http://localhost:3000/user/register', {
        withCredntials: true,
        credentials: 'include',  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if(response.ok){
        setTimeout(() => {
          alert('Registration Successful')
          window.location.href = '/login';
        }, 2000);
      }

      else{
        const errorMessage = await response.text();
        alert(errorMessage);
      }
      
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="register">

        <form action='/login' className='register-myform' onSubmit={handleSubmit}>
            <div className="form-header">
                <h1>SIGN UP</h1>
            </div>
            
            <div className="form-content">
              <div className="form-group">
                  <label htmlFor="email">Name</label>
                  <input type="text" name='username' id='name' value={formData.name} onChange={handleInputChange} placeholder='Enter your Name' />
              </div>
              <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" name='email' id='email' value={formData.email} onChange={handleInputChange} placeholder='Enter your email' />
              </div>
              <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input type="password" name='password' id='password' value={formData.password} onChange={handleInputChange} placeholder='Enter your password' />
              </div>

              <div className="form-group">
                  <label htmlFor="password">Confirm Password:</label>
                  <input type="password" name='cpassword' id='cpassword' value={formData.cpassword} onChange={handleInputChange} placeholder='ReEnter your password' />
              </div>

              <div className="form-button">
                  <button type='submit'>Sign Up</button>
              </div>
              <div className="form-group">
                  <p>Already have an account? <Link to='/login'>Sign In</Link></p>
              </div>
            </div>

        </form>
    </div>

  );
}

export default Registration;