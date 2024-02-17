import React from 'react';
import {Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"

import DSA from "./images/DSA.png"
import Lang from "./images/Language.png"
import Video from "./images/video.png"
import Quiz from "./images/quiz.png"
import MorkTest from "./images/score.png"
import Scorecard from "./images/scorecard.png"
export default function Home() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   };
var settings = {

dots: true,
infinite: false,
speed: 500,
slidesToShow: 3,
slidesToScroll: 3,
initialSlide: 0,
responsive: [
  {
    breakpoint: 1284,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
};

    return(
        <>
       
        <div id='home'>
           
       <section id='home1'>
        {/* <div className='welcome'>
<h2>Connect with CodeSquad</h2>
<p>To find your success path with DSA & say Hello to the World!</p>
</div> */}
       </section>
       <section id='about'>
{/* <h2> Our Project provide you a joy</h2> */}
       </section>
       
       <section id='features'>
       
        {/* <h1 style={{color:"#03f4e0"}}>
             Our Features
         </h1> */}
         
         <Slider {...settings} > 
         {/* <div id="feature_container" style={{display:"flex"}}> */}
         <div id='m-feature'>
             <div className="container1" style={{backgroundColor:"rgba(41, 45, 50, 1)"}} >
                 <img src={DSA} alt=""/>
                 <Link to='/' >DSA Visualizer</Link>
                
             </div>
             </div>
             <div>
             <div className="container1" style={{backgroundColor:"rgba(30, 30, 30, 1)"}}>
             <img src={Lang} alt=""/>
                 <Link to='/pLang' >Programming Language</Link>
                 
             </div>
             </div>
             <div>
             <div className="container1" style={{backgroundColor:"rgb(24 24 24 / 87%)"}}>
             <img src={Video} alt=""/>
             <Link to='/' >Learning Videos</Link>
                 
             </div></div>
             <div>
             {/* </div>
             <div id="feature_container" style={{display:"flex"}}> */}
             <div className="container1" style={{backgroundColor:"rgba(41, 45, 50, 1)"}} >
                 <img src={Quiz} alt=""/>
                 <Link to='/' >Daily Quiz</Link>
                
             </div></div>
             <div>
         
             <div className="container1" style={{backgroundColor:"rgba(30, 30, 30, 1)"}}>
             <img src={MorkTest} alt=""/>
                 <Link to='/pLang' >Mork Test</Link>
                 
             </div></div>
             <div>
        
             <div className="container1" style={{backgroundColor:"rgb(24 24 24 / 87%)"}}>
             <img src={Scorecard} alt=""/>
             <Link to='/' >Score Card</Link>
                 
             </div></div>
             
             {/* </div> */}
             </Slider>
         
        
        </section>
        
        <section className='contact'>
 
        </section>
       
       </div>
      
        </>
    )
}
