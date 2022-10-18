import React from 'react'
// import './Blog.css'


function Blog() {
  return (

      <section class="blog" id="blog">

        <p class="section-subtitle">Our Blog</p>

        <h2 class="section-title">Latest Blog & News</h2>

        <div class="blog-grid">

          <div class="blog-card">

            <div class="blog-banner-box">
              <img src="./assets/images/blog-1.jpg" alt="blog banner"/>
            </div>

            <div class="blog-content">

              <h3 class="blog-title">
                <a href="#">Blog title....</a>
              </h3>

              <div class="wrapper">

                <div class="blog-publish-date">
                  <img src="./assets/images/calendar.png" alt="calendar icon"/>

                  <a href="#">07 Jan, 2022</a>
                </div>

                <div class="blog-comment">
                  <img src="./assets/images/comment.png" alt="comment icon"/>

                  <a href="#">3 Comments</a>
                </div>

              </div>

            </div>

          </div>

          <div class="blog-card">

            <div class="blog-banner-box">
              <img src="./assets/images/blog-2.jpg" alt="blog banner"/>
            </div>

            <div class="blog-content">

              <h3 class="blog-title">
                <a href="#">Blog title....</a>
              </h3>

              <div class="wrapper">

                <div class="blog-publish-date">
                  <img src="./assets/images/calendar.png" alt="calendar icon"/>

                  <a href="#">04 Jan, 2022</a>
                </div>

                <div class="blog-comment">
                  <img src="./assets/images/comment.png" alt="comment icon"/>

                  <a href="#">10 Comments</a>
                </div>

              </div>

            </div>

          </div>

          <div class="blog-card">

            <div class="blog-banner-box">
              <img src="./assets/images/blog-3.jpg" alt="blog banner"/>
            </div>

            <div class="blog-content">

              <h3 class="blog-title">
                <a href="#">Blog title....</a>
              </h3>

              <div class="wrapper">

                <div class="blog-publish-date">
                  <img src="./assets/images/calendar.png" alt="calendar icon"/>

                  <a href="#">01 Jan, 2022</a>
                </div>

                <div class="blog-comment">
                  <img src="./assets/images/comment.png" alt="comment icon"/>

                  <a href="#">5 Comments</a>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

  )
}

export default Blog
