import React, { useEffect } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './Formation.css'
import LogoBlanc from './LogoBlanc.jpg'
import LogoColor from './LogoCouleurs.jpg'

function FormationS() {
  useEffect(() => {
  return () => {
    window.scrollTo(0,0)
  };
}, );
  return (
    <>
    <Header/>
          <section className="course" id="course">


        <h2 className="section-title">FORMATION SUPERIEUR</h2>

        <div className="course-grid">

          <div className="course-card cc">

            <div className="course-banner">
      <h2 className='h2'>FEDE</h2>
            </div>

            <div className="course-content">
            <img src={LogoColor} alt="" className='fede'/>
            <p>this school is in partner with FEDE...</p>

            </div>

          </div>
          <div className="course-card cc">

            <div className="course-banner">
      <h2 className='h2'>DEES Informatique et Réseaux</h2>
            </div>

            <div className="course-content">

              <h3 className="card-title ct">
                <a href="#" className='ct'>Le principal objectif de DEESINF est de fournir un niveau de qualification intermédiaire dans plusieurs domaines d’activités :
• Administration des systèmes d’exploitation Open source et Microsoft <br />
• Administration des réseaux
• Programmation Orientée Objet (POO) <br />
• Bases de données relationnelles <br />
<br /> Durée : 1 an</a>
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
      <h2 className='h2'>D.E.E.S Management et Gestion des PME</h2>
            </div>

            <div className="course-content">

              <h3 className="card-title ct">
                <a href="#" className='ct'>Le DEESGEST prépare les étudiants aux fonction de :
Responsable administratif et Financier, conseiller de direction, responsable de centre de profit, responsable d'agence, consultant junior en organisation au sein de PME,
Cadre des services généraux, chargé d'affaires administrative et financière, chargé de gestion administrative, responsable administratif et financier adjoint au sein de grandes organisations. <br />
<br /> Durée : 1 an </a>
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

export default FormationS
