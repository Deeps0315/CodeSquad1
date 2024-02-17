import React,{useRef} from "react"
import Contact from "./images/phone.png"
import emailjs from '@emailjs/browser';
import {toast} from 'react-hot-toast';

import Contact1 from "../components/contact"
import "./AandC.css"
export default function contactUs(){
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_slac5z3', 'template_viev7kg', form.current, {
        publicKey: 'n0x2itnfpAGsyZVgh',
      })
      .then(
        () => {
            toast.success("successfully sent!!!");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
   return (
    
    <div>
    
    <div id="Page_2">
   
        
        
        
        <div className="box2 address" >
        <div id="page_3">
        <div className="box2"style={{marginRight:"60px", marginTop:"100px" , position:"sticky"}} >
            <Contact1/>
        </div><div className="box2">
        <div>
            <h1>Contact Us</h1>
        </div><hr></hr>
            <h2>Grievance Redressal</h2>
            <p>where you can share all your queries, feedback, complaints, or any concern you may have about our courses, and programs.</p>
            <p>You may also write to us on CodeSquad@gmail.com or call us on +91 917-533-2489 or +91 930-789-0191</p>
            <h2>Address</h2>
            <p>+1 999 999 999  Lab 107  SMT.Chandibai Himatmal Mansukhani College- Ulhasnagar(west)</p>
        </div></div></div>
        <div className="box2">
            <img style={{width:"280px", height:"350px",marginTop:"60px", marginLeft:"25px"}}src={Contact} alt="img"/>
            </div>
        <div className="box2 form">
            <h2>Get In Touch</h2>
            <form ref={form} onSubmit={sendEmail} >
                <div className="f_element">
                <label>Name : </label>
            <input name="from_name" type="text"  />
            </div>
            <div className="f_element">
            <label>Email : </label>
            <input name="from_email"  type="email"  />
            </div>
            <div className="f_element">
            <label>Leave Us Message : </label>
            <textarea name="message" />
      <input type="submit" value="Send" />
            </div>
            </form>
        </div>
        </div>
       
        </div>
      );
    }