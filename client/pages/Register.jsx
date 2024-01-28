import {useState} from "react";
import axios from'axios';
import {toast} from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
import './register.css'


import img1 from './images/rebimg.png';
import img2 from './images/robo.png';
import img3 from './images/user-logo.png';
import img4 from './images/email-logo.png';
import img5 from './images/key-logo.png';
import img6 from './images/padlock-logo.png';
import img7 from './images/left-arrow.png';
import img8 from './images/profile.png';


export default function Register() {
    const navigate=useNavigate();
    const [data, setData]=useState({
        name:'',
        email:'',
        password:'',
        cpass:''
    }
    )
    const registerUser=async(e)=>{
        e.preventDefault();
        const{name,email,password,cpass}=data
        try{
            const {data}= await axios.post('/register',{
                name,email,password,cpass
            })
            if(data.error){
                toast.error(data.error)
            }else{
                setData({})
                toast.success('Registered successfully! Welcome to CodeSquad:)')
                navigate('/login')
            }
        }catch(error)
        {
                console.log(error)
        }   
 }


    return(
    //     <div style={{position: "relative", top:"0px", width:"100%", height:"100%"}}>
            
    //     <div className='head-image'>
    //     <img style={{ width:"100%", height: "100%"}}src={img1} alt=""/>
    //     </div>
    //     <div className="hello">
    //         <img className="imgbg2" src={img8} alt=""/>
    //         <div style={{width:"10px",height:"60px", display:"grid", alignItems:"center", gridTemplateColumns:"1fr 1fr 1fr",columnGap:"5px"}}>
    //         <img className="imgbg22" src={img2} alt=""/>
    //         <div className='pname' >
    //         <h1 >CodeSquad</h1>
    //         </div>
    //         </div>

    //     <form onSubmit={registerUser} style={{width:"400px"}} >
    //          <div className="form_field">
    // <img className="imgbg3" src={img3} alt=""/>
    //     <input  type="text" name="name" placeholder="NAME"
    //      value={data.name} onChange={(e)=>setData({...data,name:e.target.value})} />
    //     </div>
    //     <div className="form_field">
    //     <img className="imgbg3" src={img4} alt=""/>
    //     <input  type="email" name="email" placeholder="EMAIL"
    //     value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}/>
    //     </div>
    //     <div className="form_field">
    //     <img className="imgbg3" src={img5} alt=""/>
    //     <input type="password" name="password" placeholder="PASSWORD"
    //     value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
    //     </div>
    //     <div className="form_field">
    //     <img className="imgbg3" src={img6} alt=""/>
    //     <input type="password" name="cpass" placeholder="CONFIRM PASSWORD" value={data.cpass}
    //      onChange={(e)=>setData({...data,cpass:e.target.value})}/>
    //     </div><div >
    //     <button className='button'>CREATE ACCOUNT</button></div>
    // </form>
    //     </div>

    // <div className='sign-in-outer'>
    //     <div className='sign-in-inner'>
    //         <h1 className='sign-text'>SIGN UP</h1>
    //     </div>
    // </div>

    // <div className='Login-box'>
    //     <h4 style={{color:'rgb(24, 79, 161)',display:"block" ,fontFamily: "'Marcellus SC', serif"}}>Already have an Account?</h4>
    //     <h1 style={{color:"rgb(24, 79, 161)",display:"block",marginLeft:"18%",fontFamily: "'Marcellus SC', serif"}}>LOG IN</h1>
    //     <button style={{border:"none",backgroundColor:"white",display:"block",marginLeft:"20%"}}  > 
    //     <img style={{display:"block",marginLeft:"10%", width:"90px",height:"55px"}}  src={img7} alt=""/>
    //     </button>
    // </div>
    // </div>
    // )
    <div id="full"> 
        
            
    
      <section id='heading'>
           <div id="heading2">
            <img className="robo" src={img2} alt=""/>
            <div className='pname' >
            <h1 >CodeSquad</h1>
            </div>
            </div>
            </section>
            <div id="page">
            <div className="box">
            
            <section id='register'>
    <form onSubmit={registerUser} style={{width:"400px"}} >
        <h1 className="pname main">Sign Up</h1>
    <div className="form_field">
    <img className="imgbg3" src={img3} alt=""/>
        <input  type="text" name="name" placeholder="NAME"
         value={data.name} onChange={(e)=>setData({...data,name:e.target.value})} />
        </div>
        <div className="form_field">
        <img className="imgbg3" src={img4} alt=""/>
        <input  type="email" name="email" placeholder="EMAIL"
        value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}/>
        </div>
        <div className="form_field">
        <img className="imgbg3" src={img5} alt=""/>
        <input type="password" name="password" placeholder="PASSWORD"
        value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
        </div>
        <div className="form_field">
        <img className="imgbg3" src={img6} alt=""/>
        <input type="password" name="cpass" placeholder="CONFIRM PASSWORD" value={data.cpass}
         onChange={(e)=>setData({...data,cpass:e.target.value})}/>
        </div><div>
        <button className='button'>CREATE ACCOUNT</button></div>
    </form>
    </section>
    </div>
    <div className="box">
    <hr></hr>
    </div>
    <div className="box">
        <section id="register">
        <div className="rtol">
        <p>already have an Account?</p>
        <Link to={'/login'} className="pname"><h1>Login</h1></Link></div>
        </section>
    </div>
    </div>
    </div>
    
    )
}