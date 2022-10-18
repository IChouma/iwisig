import React, { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './Formation.css'

function ContactUs() {
  const [name,setName]=useState("")
  const [phone,setPhone]=useState("")
  const [mail,setMail]=useState("")
  const [city,setCity]=useState("")
const url= `https://wa.me/+212661771140?text=name :${name}
\n phone : ${phone} 
\n Email : ${mail}
\n ville : ${city} `

useEffect(() => {
  return () => {
    window.scrollTo(0,0)
  };
}, );

  return (
    <>
    <Header/>
          <section className="course " id="course">


        <h2 className="section-title  st">CONTACT US</h2>

        <div className="course-grid cg csection">
                <div class="grid-item">

          

          <div class="wrapper inputwrapp">
            <div className='cinfo'>
              <h4 class="item-head">Subscribe Now</h4>
              <form action={url}>
            <input
            onChange={(e)=>setName(e.target.value)}
            className='input' type="text" name="subscribe" placeholder="Full name"/>

            <input 
            onChange={(e)=>setPhone(e.target.value)}
             className='input' type="text" name="subscribe" placeholder="Phone Number"/>

            <input
            onChange={(e)=>setMail(e.target.value)}
             className='input' type="text" name="subscribe" placeholder="Email Address"/>
             
            <input
            onChange={(e)=>setCity(e.target.value)}
             className='input' type="text" name="subscribe" placeholder="City"/>
            <button
            onSubmit={()=>console.log(name, phone, mail,  city)}
            className='submit'>SUBMIT</button>
            </form>
            </div>
            <div className='address'>
              <h4 class="item-head">CONTACT INFO</h4>
              <ul class="grid-item">


          <li class="list-item">
            <a href="#">Avenue Med V,
            Imm 161 (OAPAM) ESC A et B,
            3éme Etage N° 9 Kenitra.</a>
          </li>

          <li class="list-item">
            <a href="#">Email : wisig-institut-k@hotmail.fr</a>
          </li>

          <li class="list-item">
            <a href="#">site Web : www.institutwisig.com</a>
          </li>

          <li class="list-item">
            <a href="#">+212-537-361-433</a>
          </li>

        </ul>
            </div>
            {/* <button class="send-btn">
              <ion-icon name="paper-plane"></ion-icon>
            </button> */}
          </div>

        </div>


       
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default ContactUs
