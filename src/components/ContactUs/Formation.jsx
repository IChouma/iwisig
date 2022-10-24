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
  function whatsapp(){

    const url= "https://wa.me/+212661771140?text="
    +"Name : "+name+"%0a"
    +"Email : "+phone+"%0a"
    +"Phone : "+mail+"%0a"
    +"city : "+city+"%0a"
    window.open(url,'_blank').focus()
  }

useEffect(() => {
  return () => {
    window.scrollTo(0,0)
  };
}, );

  return (
    <>
    <Header/>
          <section className={"course "} id="course">


        <h2 className={"section-title  st"}>CONTACT US</h2>

        <div className={"course-grid cg csection"}>
                <div className={"grid-item"}>

          

          <div className={"wrapper inputwrapp"}>
            <div className={'cinfo'}>
              <h4 className={"item-head"}>Subscribe Now</h4>
              <form action={``}>
            <input
            onChange={(e)=>setName(e.target.value)}
            className={'input'} type="text" name="subscribe" placeholder="Full name"/>

            <input 
            onChange={(e)=>setPhone(e.target.value)}
             className={'input phoneinput'} type="number" name="subscribe" placeholder="Phone Number"/>

            <input
            onChange={(e)=>setMail(e.target.value)}
             className={'input'} type="email" name="subscribe" placeholder="Email Address"/>
             
            <input
            onChange={(e)=>setCity(e.target.value)}
             className={'input'} type="text" name="subscribe" placeholder="City"/>
            <button
            onClick={()=>whatsapp()}
            className={'submit'}>SUBMIT</button>
            </form>
            </div>
            <div className={'address'}>
              <h4 className={"item-head"}>CONTACT INFO</h4>
              <ul className={"grid-item"}>


          <li className={"list-item"}>
            <a href="#">Avenue Med V,
            Imm 161 (OAPAM) ESC A et B,
            3éme Etage N° 9 Kenitra.</a>
          </li>

          <li className="list-item">
            <a href="#">Email : wisig-institut-k@hotmail.fr</a>
          </li>

          <li className={"list-item"}>
            <a href="#">site Web : www.institutwisig.com</a>
          </li>

          <li className={"list-item"}>
            <a href="#">+212-537-361-433</a>
          </li>

        </ul>
            </div>
          </div>

        </div>


       
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default ContactUs
