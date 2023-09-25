import React, {useState} from 'react';
import './Login.scss';
import {Link} from 'react-router-dom';




function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const validateForm = () => {

    if(!formData.email || !formData.password) return alert('Please fill all the fields')
    else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) return alert('Please enter a valid email')
    else if(formData.password < 4) return alert('password must be at least 4 characters')
    else return true


  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const response = await fetch('http://localhost:3000/user/login', {
        withCredntials: true,
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        
        setTimeout(() => {
          alert('login Successful')
          window.location.href = '/panel';
          console.log('Form submitted:', formData);
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
    <div className="login">

        <form action='/' className='myform' onSubmit={handleSubmit}>
            <div className="form-header">
                <h1>SIGN IN TO Y0UR ACCOUNT</h1>
            </div>
            
            <div className="form-content">
              <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" name='email' id='email' value={formData.email} onChange={handleInputChange} placeholder='Enter your email' />
              </div>
              <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input type="password" name='password' id='password' value={formData.password} onChange={handleInputChange} placeholder='Enter your password' />
              </div>
              <div className="form-button">
                <a href='http://localhost:5000/'>Sign In</a>
                  
              </div>
              <div className="form-group">
                  <p>Don't have an account? <Link to='/register'>Sign Up</Link></p>
              </div>
            </div>

        </form>
    </div>

  );
}

export default Login;