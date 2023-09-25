import React from 'react'
import './About.scss'

const About = () => {
  return (
    <div id='about' className="about-container">
      <div className='about-content'>
        <div className="about-header">
          <h1>Hello. <br /> We’re what you’ve <br /> been looking for. <br /> Who are we? <br /> <span>We are SmartCertify. </span></h1>
        </div>

        <div className='cards'>

          <div className='card'>
            <h3>01/</h3>
            <h2 className='card-header'>Certificate Validation System Development</h2>
            <p className='card-content'>Develop a certificate validation system using open-source software and blockchain tech. Tasks include selecting software, designing the system, integrating with training programs, and ensuring accuracy and security.</p>
          </div>

          <div className='card'>
            <h3>02/</h3>
            <h2 className='card-header'>User-Friendly Custom Digital Certificate Creation</h2>
            <p className='card-content'>Create an easy-to-use system for custom digital certificate creation with options for customization. Ensure secure storage and verification through the validation system. Provide user training and guidelines.</p>
          </div>


          <div className='card'>
            <h3>03/</h3>
            <h2 className='card-header'>External Certificate Validation Integration</h2>
            <p className='card-content'>Enable other organizations to validate certificates via a secure connection or API. Collaborate, monitor, and improve integration, focusing on data privacy and security.</p>
          </div>   

        </div>
        
      </div>
    </div>
  )
}

export default About