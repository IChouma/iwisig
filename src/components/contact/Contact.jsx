import React,{Fragment} from 'react';
import { useNavigate } from 'react-router-dom';
// import './Contact.css'


function Contact() {
  const contact=useNavigate()
  return (
      <section class="contact">

        <div class="contact-card" id="contact">
          <img src="./assets/images/cta-bg-img.png" alt="shape" class="contact-card-bg"/>

          <h2>Start Your Best Formations With Us</h2>

          <button 
          onClick={()=>contact('/ContactUs')}
          class="btn btn-primary">
            <p class="btn-text">Contact Us</p>
            <span class="square"></span>
          </button>
        </div>

      </section>

  )
}

export default Contact
