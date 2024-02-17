import React from "react"
import "./component.css"
import { Link } from "react-router-dom"
import insta from "../pages/images/instagram.png"
import fb from "../pages/images/facebook.png"
import twitter from "../pages/images/twitter.png"
import telegram from "../pages/images/telegram.png"

export default function contact(){
   return (
    <div className="contact">
      <ul>
                <li><Link to=""><img src={insta} alt=""/></Link></li>
                <li><Link to="/"><img src={fb} alt=""/></Link></li>
                <li><Link to="/"><img src={telegram} alt=""/></Link></li>
                <li><Link to="/"><img src={twitter} alt=""/></Link></li>
            </ul>
    </div>
   )}