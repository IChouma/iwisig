import React, { Fragment } from 'react'
// import './Event.css'


function Event() {
  return (


      <section class="event">

        <div class="event-left">

          <div class="event-banner">
            <img src="./assets/images/event-img.jpg" alt="event banner" class="banner-img"/>
          </div>

          <button class="play smooth-zigzag-anim-1">
            <div class="play-icon pulse-anim">
              <ion-icon name="play-circle"></ion-icon>
            </div>

            <p>Let's Go !</p>
          </button>

        </div>

        <div class="event-right">

          <p class="section-subtitle">Our Events</p>

          <h2 class="section-title">Join Our Upcoming Events</h2>

          <div class="event-card-group">

            <div class="event-card">

              <div class="content-left">
                <p class="day">28</p>
                <p class="month">Feb, 2022</p>
              </div>

              <div class="content-right">
                <div class="schedule">
                  <p class="time">hours</p>
                  <p class="place">place</p>
                </div>

                <a href="#" class="event-name">Business creativity workshops</a>
              </div>

            </div>

            <div class="event-card">

              <div class="content-left">
                <p class="day">28</p>
                <p class="month">Feb, 2022</p>
              </div>

              <div class="content-right">
                <div class="schedule">
                  <p class="time">Hours</p>
                  <p class="place">Place</p>
                </div>

                <a href="#" class="event-name">Event topic</a>
              </div>

            </div>

            <div class="event-card">

              <div class="content-left">
                <p class="day">28</p>
                <p class="month">Feb, 2022</p>
              </div>

              <div class="content-right">
                <div class="schedule">
                  <p class="time">Hours</p>
                  <p class="place">Place</p>
                </div>

                <a href="#" class="event-name">Event topic</a>
              </div>

            </div>

          </div>

        </div>

      </section>

  )
}

export default Event