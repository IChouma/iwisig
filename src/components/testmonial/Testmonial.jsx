import React from 'react';
// import './Testmonial.css'

function Testmonial(){


  return (

      <section class="testimonials">

        <div class="testimonials-left">

          <p class="section-subtitle">Testimonial</p>

          <h2 class="section-title">What Our Client Says About Us</h2>

          <p class="section-text">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Sunt tenetur, ratione pariatur iure, autem quis a impedit quos cum 
           doloremque omnis quasi quaerat doloribus! Aperiam et architecto ab totam sapiente.
          </p>

        </div>

        <div class="testimonials-right">

          <div class="testimonials-card">
            <img src="./assets/images/quote.png" alt="quote icon" class="quote-img"/>

            <p class="testimonials-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Minus reprehenderit possimus consectetur quae saepe modi in ipsum sed asperiores recusandae.
             Aliquid repellat ea laborum qui itaque iure quia dolorum molestias?
            </p>

            <div class="testimonials-client">

              <div class="client-img-box">
                <img src="./assets/images/client.jpg" alt="client christine rose"/>
              </div>

              <div class="client-detail">
                <h4 class="client-name">Rachida</h4>

                <p class="client-title">Customer</p>
              </div>

            </div>
          </div>

        </div>

      </section>


  )
}



export default Testmonial;

