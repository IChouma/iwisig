import React from 'react'
import './courses.css'
import  {Link, useNavigate } from 'react-router-dom';

function CoursesP() {
  return (

            <section id='category' class="category">

        <p class="section-subtitle">Formation  Category</p>

        <h2 class="section-title">Explore Popular Formations</h2>

        <ul class="course-item-group">

        <Link to='Formation'>  <li class="course-category-item">

            <div class="wrapper">
              <img src="./assets/images/course-category-icon-1.png" alt="category icon" class="category-icon default"/>

              <img src="./assets/images/course-category-icon-1-w.png" alt="category icon white"
                class="category-icon hover"/>
            </div>

            <div class="course-category-content">
              <h3 class="category-title">
                <a href="#">Formation Initial</a>
              </h3>

              <p class="category-subtitle">Techniciens Spécialisés, Techniciens GI, Techniciens Comptable, 
              Diplôme de Qualification...</p>
            </div>

          </li></Link>
          <Link to='FormationS'><li class="course-category-item">

            <div class="wrapper">
              <img src="./assets/images/course-category-icon-2.png" alt="category icon" class="category-icon default"/>

              <img src="./assets/images/course-category-icon-2-w.png" alt="category icon white"
                class="category-icon hover"/>
            </div>

            <div class="course-category-content">
              <h3 class="category-title">
                <a href="#">Formation Supérieur</a>
              </h3>

              <p class="category-subtitle">DEES Informatique et Réseaux, D.E.E.S Management et Gestion des PME...</p>
            </div>

          </li></Link>
         <Link to='FormationE'> <li class="course-category-item">

            <div class="wrapper">
              <img src="./assets/images/course-category-icon-3.png" alt="category icon" class="category-icon default"/>

              <img src="./assets/images/course-category-icon-3-w.png" alt="category icon white"
                class="category-icon hover"/>
            </div>

            <div class="course-category-content">
              <h3 class="category-title">
                <a href="#">Formation - Entreprise</a>
              </h3>

              <p class="category-subtitle">Informatique, Gestion, Langues et Communications...</p>
            </div>

          </li></Link>
         <Link to='FormationP'> <li class="course-category-item">

            <div class="wrapper">
              <img src="./assets/images/course-category-icon-4.png" alt="category icon" class="category-icon default"/>

              <img src="./assets/images/course-category-icon-4.png" alt="category icon white"
                class="category-icon hover"/>
            </div>

            <div class="course-category-content">
              <h3 class="category-title">
                <a href="#">Formation particulier</a>
              </h3>

              <p class="category-subtitle">PHP / MYSQL,Langage C / C++, JAVA, Bureautique,web developement... </p>
            </div>

          </li></Link>


        </ul>

      </section>
  )
}

export default CoursesP