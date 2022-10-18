import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './Home.css'

function Home() {
const ContactUs=useNavigate()

  return (

      <section class="home" id="home">

        <div class="deco-shape shape-1">
          <img src="./assets/images/shape-1.png" alt="art shape" width="70"/>
        </div>
        <div class="deco-shape shape-2">
          <img src="./assets/images/shape-2.png" alt="art shape" width="55"/>
        </div>
        <div class="deco-shape shape-3">
          <img src="./assets/images/shape-3.png" alt="art shape" width="120"/>
        </div>
        <div class="deco-shape shape-4">
          <img src="./assets/images/shape-4.png" alt="art shape" width="30"/>
        </div>

        <div class="home-left">

          <p class="section-subtitle">Welcome To WISIG School</p>

          <h1 class="main-heading">
            attraction word... 
            <span class="underline-img">WISIG <img src="./assets/images/banner-line.png" alt="line"/></span>
          </h1>

          <p class="section-text">
            small description small description small description small description small description small description
          </p>

          <div class="home-btn-group">

            <button
        onClick={()=>ContactUs('/ContactUs')}
            class="btn btn-secondary">
              <p class="btn-text">Contact Us</p>
              <span class="square"></span>
            </button>
          </div>

        </div>

        <div class="home-right">

          <div class="img-box">

            <img src="./assets/images/banner-img-bg.png" alt="colorful background shape" class="background-shape"/>
            <img src="./assets/images/banner-img.png" alt="banner image" class="banner-img"/>

            <img src="./assets/images/banner-aliment-icon-1.png" alt="" class="icon-1 smooth-zigzag-anim-1" width="250"/>
            <img src="./assets/images/banner-aliment-icon-2.png" alt="" class="icon-2 smooth-zigzag-anim-2" width="240"/>
            <img src="./assets/images/banner-aliment-icon-3.png" alt="" class="icon-3 smooth-zigzag-anim-3" width="195"/>
            <img src="./assets/images/banner-aliment-icon-4.png" alt="" class="icon-4 drop-anim"/>

          </div>

        </div>

      </section>

  )
}

export default Home