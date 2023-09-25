import React from 'react'
import './Features.scss'

import asset8 from '../../assets/asset8.svg'
import asset9 from '../../assets/asset9.svg'
import asset10 from '../../assets/asset10.svg'
import asset11 from '../../assets/asset11.svg'
import asset12 from '../../assets/asset12.svg'



const Features = () => {
  return (
    <div id='features' className="feature-container">
      <div className="feature-content">
        <div className="feature-header">
          <img src={asset8} alt="" />
          <h1>The Inception <br /> of <span> BlockCertify </span></h1>
          <p>
          the beginning of a groundbreaking journey in the world of digital credentials. From the very outset, SmartCertify was conceived with a clear mission in mind – to revolutionize the way certificates and credentials are issued, managed, and verified. It was born out of a vision to enhance the trust and security surrounding educational and professional achievements, using the power of blockchain technology. SmartCertify's founders embarked on this path with a deep commitment to eliminating fraud, fostering lifelong learning, and promoting global recognition of digital credentials. This inception represents the first step toward a future where individuals and organizations can transact in a transparent, tamper-proof, and efficient ecosystem of verifiable certificates, facilitating a seamless exchange of knowledge and skills on a global scale.

          </p>
        </div>

        <div className="feature-cards">
          <div className="feature-card">
            <img src={asset9} alt="Logo here" />
            <h1 className="feature-card-header">Blockchain-Powered Security</h1>
            <ul>
              <li>Immutable Records</li>
              <li>Guarding Against Fraud</li>
              <li>Forgery Deterrence</li>
              <li>Building Trust</li>
            </ul>
          </div>

          <div className="feature-card dull-white">
            <img src={asset10} alt="Logo here" />
            <h1 className="feature-card-header">Transparent Verification with Blockchain </h1>
            <ul>
              <li>Instant Authentication</li>
              <li>End-to-End Transparency</li>
              <li>Enhanced Credibility</li>
            </ul>
          </div>

          <div className="feature-card">
            <img src={asset10} alt="Logo here" />
            <h1 className="feature-card-header">Pioneering Certificate Control And Innovation</h1>
            <ul>
              <li>Empowering Control</li>
              <li>Leading Blockchain Innovation</li>
              <li>User-Centric Approach</li>
            </ul>
          </div>

          {/* <div className="feature-card dull-white">
            <img src={asset11} alt="Logo here" />
            <h1 className="feature-card-header">Business Success Strategies</h1>
            <ul>
              <li>2012 years in the industry</li>
              <li>Personal support from established CEOs & experts</li>
              <li>Review and feedback on your business model</li>
            </ul>
          </div> */}

        </div>
      </div>
    </div>
  )
}

export default Features