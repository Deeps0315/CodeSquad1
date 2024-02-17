import React from "react"
import Contact1 from "../components/contact"
import Robo2 from "./images/robo2.png"
import team from "./images/aboutus.png"

export default function aboutUs(){
   return (
    <div>
    
    <div id="Page_2">
   
        
        
        <div className="box2">
          <div id="page_3" >
        <div style={{marginRight:"60px", marginTop:"100px"}} >
            <Contact1/>
        </div>
        <div style={{borderBottom:"2px solid rgb(25, 158, 199)"}}>
        <h1 style={{top:"40px"}}>About Us</h1>
        <h3>Connect with CodeSquad, To find your success path with DSA & say Hello to the World!</h3>
        <h2>Why CodeSquad?</h2>
        <div className="para">
      <p>Despite being an e-learning platform, our website provides an attractive interface which will make learning more fun and interactive. ‘CodeSquad’ focuses on Information Technology related courses. </p>
      <p > Our project 'CodeSquad' offers online instruction that can be delivered anytime and anywhere through a wide range of electronic learning solutions such as Web-based courseware, online discussion groups, Web chat, algo-visualizer, dynamic learning and virtual mentoring.
</p></div></div></div>
<div  id="Page_2" style={{marginTop:"10px", marginLeft: "116px"}}>
          <div className="logo_a">
            <img src={Robo2} alt=""/>
            <h1 style={{padding:"0px", fontSize:"60px",color:"rgb(78, 159, 230)"}}>CodeSquad</h1>
          </div>
        <div className="team">
        <h2>Our Team</h2>
        <div id="Page_2" style={{backgroundColor: "rgb(56, 55, 55)"}} >
        <h3 style={{marginRight:"70px"}}>Sanika Surve</h3><h3>Deepshikha Prajapati</h3></div>
        </div>
        <div className="aboutus"><img src={team} alt=""/></div>
        </div>
{/* <hr style={{width:"84%"}}/> */}

        </div>
        </div>
        <div>
          
        </div>
        </div>
      );
    }
    
   
    