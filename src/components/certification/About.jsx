import React from 'react';
// import './About.css'

function About() {
  return (

      <section class="about" id="about">

        <div class="about-left">

          <div class="img-box">
            <img src="./assets/images/about-img-bg.png" alt="about bg" class="about-bg"/>

            <img src="./assets/images/about-img.png" alt="about person" class="about-img"/>

            <img src="./assets/images/banner-aliment-icon-1.png" alt="" class="icon-1 smooth-zigzag-anim-1" width="250"/>
            <img src="./assets/images/banner-aliment-icon-3.png" alt="" class="icon-2 smooth-zigzag-anim-3" width="195"/>
          </div>

        </div>

        <div class="about-right">

          <p class="section-subtitle">About Us</p>

          <h2 class="section-title">We Have Best Online and Present Education</h2>

          <p class="section-text">
            description description description description description description description description description description 
          </p>

          <ul class="about-ul">

            <li>
              <ion-icon name="checkmark-circle"></ion-icon>
              <p>Attractive word.....</p>
            </li>

            <li>
              <ion-icon name="checkmark-circle"></ion-icon>
              <p>Attractive word.....</p>
            </li>

            <li>
              <ion-icon name="checkmark-circle"></ion-icon>
              <p>Attractive word.....</p>
            </li>

          </ul>

          <button class="btn btn-primary">
            <p class="btn-text">Explore More</p>
            <span class="square"></span>
          </button>

        </div>

      </section>
  )
}

export default About
