import React from 'react';
import './courses.css';
import img2 from './img2.jpg';
import img1 from './img1.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';
import img7 from './img7.jpg';
import img8 from './img8.jpg';
import img9 from './img9.jpg';
import img10 from './img10.jpg';
import img11 from './img11.jpg';
import img12 from './img12.jpg';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

function Courses() {
  const click=useRef()
  const submitt=useRef()
  const state=[
    {img:img11,title:"wisig formations"},
    {img:img4,title:"DT,DTS,DQ..."},
    {img:img10,title:"Cycle superieur"},
    {img:img5,title:"Languages world"},
    {img:img1,title:"Baccalaureat technique"},
    {img:img2,title:"Informatique world"},
    {img:img6,title:"developement Informatique"},
    {img:img8,title:"Gestion Informatisé"},
    {img:img7,title:"Gestion des Entreprises"},
    {img:img9,title:"Licence et Master"},
    {img:img12,title:"development informatique et gestion des entreprises"},
    {img:img3,title:"Cycle superieur"},
  ]
function submit(){
submitt.click()
}
  const formation= state.map((item)=>{
    return(
                <div class="course-card">
            <div class="course-banner">
              <img src={item.img} alt="course banner"/>
              <div class="course-tag-box">
              </div>
            </div>

            <div class="course-content">
              <div class="wrapper border-bottom wborder">
                <div class="rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>
              </div>
              <div class="wrapper wborder">
                <div class="enrolled">
                  <form action={`https://wa.me/+212661771140?text= Salut! \nj'ai vu ceci ${item.title} sur votre website`}>
                    <input className='inp' type="text" defaultValue={item.title} />
                    <button ref={submitt}
                    onClick={()=>window.open(`https://wa.me/+212661771140?text= Salut! \nj'ai vu ceci (${item.title}) sur votre website`,'_blank').focus()} className='' type='submit'>
                 <a  onClick={()=>submit()} 
             href="" className='whatsapp'>
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
                    </button>
                    </form>

            
                </div>
              </div>
            </div>

          </div>
    )
  })
  return (

      <section class="course" id="course">

        <p class="section-subtitle">Our Online Courses</p>

        <h2 class="section-title">Find The Right Online Course For You</h2>

        <div class="course-grid">


{formation}
     

        </div>


      </section>
  )
}

export default Courses