import React, { useEffect } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './Formation.css'

function Formation() {
  useEffect(() => {
  return () => {
    window.scrollTo(0,0)
  };
}, );
  return (
    <>
    <Header/>
          <section className="course" id="course">


        <h2 className="section-title st">FORMATION INICIAL</h2>

        <div className="course-grid">

          <div className="course-card cc">

            <div className="course-banner">
      <h2 className='h2'>Techniciens Spécialisés</h2>
            </div>

            <div className="course-content">

              <h3 className="card-title ct">
                <a href="#" className='ct'>Technicien Spécialisé en Développement Informatique
Cette formation est destinée à former des Analystes en informatique <br /> de gestion ayant pour mission d’organiser et d’exploiter les données relatives à la gestion <br />
<br /> Durée : 2ans
Niveau Admission : <br />
<br /> Baccalauréat (toute série) ou plus + Entretien</a>
              </h3>


              <div className="wrapper">

                <div className="enrolled">
                  <div className="icon-user">
                    <img src="./assets/images/student-icon.png" alt="user icon"/>
                  </div>
                </div>
              </div>

            </div>

          </div>
          <div className="course-card cc">

            <div className="course-banner">
      <h2 className='h2'>Techniciens GI</h2>
            </div>

            <div className="course-content">

              <h3 className="card-title ct">
                <a href="#" className='ct'>Diplôme de Technicien En Gestion Informatisée
Ce profil est destiné à former des techniciens en informatique <br /> de gestion capable d’utiliser et/ou participer au développement des applications informatiques en matière de gestion. <br />
<br /> Durée : 2ans
<br /> Niveau Admission :
<br /> Niveau Baccalauréat (toute série) ou plus + Entretien </a>
              </h3>


              <div className="wrapper">

                <div className="enrolled">
                  <div className="icon-user">
                    <img src="./assets/images/student-icon.png" alt="user icon"/>
                  </div>
                </div>
              </div>

            </div>

          </div>
          <div className="course-card cc">

            <div className="course-banner">
      <h2 className='h2'>Techniciens Comptable</h2>
            </div>

            <div className="course-content">

              <h3 className="card-title ct">
                <a href="#" className='ct'>Technicien Comptabilité d'Entreprise
Ce profil est destiné à former des techniciens des techniciens en comptabilité (1) assure les fonctions généralement dévolues à l’employé de comptabilité ou le comptable indépendant. <br />
<br /> Durée : 2ans
<br /> Niveau Admission :
<br /> Niveau Baccalauréat (toute série) ou plus + Entretien</a>
              </h3>


              <div className="wrapper">

                <div className="enrolled">
                  <div className="icon-user">
                    <img src="./assets/images/student-icon.png" alt="user icon"/>
                  </div>
                </div>
              </div>

            </div>

          </div>
          <div className="course-card cc">

            <div className="course-banner">
      <h2 className='h2'>Qualification</h2>
            </div>

            <div className="course-content">

              <h3 className="card-title ct">
                <a href="#" className='ct'>Diplôme de Qualification Opérateur de Saisie
L’Opérateur en Informatique est appelé à exécuter des opérations de saisie avec dextérité <br />
<br /> Durée : 1an
<br /> Niveau Admission :
<br /> Niveau 9ème A.F ou plus + Entretien</a>
              </h3>


              <div className="wrapper">

                <div className="enrolled">
                  <div className="icon-user">
                    <img src="./assets/images/student-icon.png" alt="user icon"/>
                  </div>
                </div>
              </div>

            </div>

          </div>



       
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Formation
