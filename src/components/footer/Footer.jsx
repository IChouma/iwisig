import React from 'react';
import { useState } from 'react';
// import './Footer.css'

function Footer(){
const [mail,setmail]=useState("")
const url= `https://wa.me/+212661771140?text=mail :${mail}`
  return (

    <footer>

      <div class="footer-grid">

        <div class="grid-item">

          <div class="footer-logo">
            <img src="./assets/images/logo.png" alt="educator logo white"/>
          </div>

          <p class="footer-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Dolorum suscipit modi quos ducimus facilis, officiis, 
             incidunt molestiae dolore repellat porro deleniti ut veritatis perspiciatis velit.
             Facere, unde architecto! Tempora, aliquam..
          </p>

          <div class="social-link">
            <a href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
          </div>

        </div>

        <ul class="grid-item">

          <h4 class="item-heading">Our Link</h4>

          <li class="list-item">
            <a href="/">Home</a>
          </li>

          <li class="list-item">
            <a href="#about">About Us</a>
          </li>

          <li class="list-item">
            <a href="#category">Courses</a>
          </li>

          <li class="list-item">
            <a href="#blog">Blog</a>
          </li>

          <li class="list-item">
            <a href="#contact">Contact Us</a>
          </li>

        </ul>

        <ul class="grid-item">

          <h4 class="item-heading">Contact info</h4>





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

        <div class="grid-item">

          <h4 class="item-heading">Subscribe Now</h4>

          <div class="wrapper">
            <form action={''}>
            <input 
            onChange={(e)=>setmail(e.target.value)}
            type="text" name="subscribe" placeholder="Email Address"/>
            
            <button
            type='submit'
            onClick={()=>window.open(url).focus}
            class="send-btn">
              <ion-icon name="paper-plane"></ion-icon>
            </button>
            </form>
          </div>

        </div>

      </div>

      <p class="copyright">
        Copyright © 2022 <a href="#">codechouma</a>. All rights reserved.
      </p>

    </footer>


  )
}



export default Footer;

