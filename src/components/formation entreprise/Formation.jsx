import React, { useEffect } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './Formation.css'

function FormationE() {
  useEffect(() => {
  return () => {
    window.scrollTo(0,0)
  };
}, );
  return (
    <>
    <Header/>
          <section className="course" id="course">


        <h2 className="section-title st">FORMATION ENTREPRISE</h2>

        <div className="course-grid cg">
<h1>
Formation - Entreprise
</h1>
<p>
Nous vous invitons à découvrir ci-après une liste non exhaustive de nos principales modules de Formation :
</p>
<h1>
Informatique :
</h1>
<ul>
<li>
Windows (XP, VISTA, LINUX, 2003 SRVER)
</li>
<li>
Internet
</li>
<li>
Bureautique (Office 2003, 2007).
</li>
<li>
Les méthodologies et langages de programmation (C, C++, Java, Visual Basic, PHP…..)
</li>
<li>
Les Bases de Données (Access, MYSQL, MERISE, UML….)
</li>
<li>
Les système et réseaux
</li>
<li>
La gestion de projet
</li>
<li>
Messagerie (Outlook, Gmail, Hotmail, Yahoo …..)
</li>
<li>
Auto Cad : D.A.O – P.A.O
</li>
</ul>
<h1>
Gestion :
</h1>
<ul>
<li>
Marketing
</li>
<li>
Technique Commerciales
</li>
<li>
Gestion Financière
</li>
<li>
Comptabilité Professionnelle (Analytique, Société, Général S.A)
</li>
</ul>
<h1>
Langues et Communications :
</h1>
<ul>
  <li>

Français
  </li>
  <li>

Anglais
  </li>
  <li>

Espagnol
  </li>
  <li>

Italienne
  </li>
  <li>

Allmend
  </li>
  <li>
Communication Professionnelle : (Verbale et gestuelle)
  </li>
</ul>


       
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default FormationE
