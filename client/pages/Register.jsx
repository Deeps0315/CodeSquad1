import {useState} from "react";
import axios from'axios';
import {toast} from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
import {EyeInvisibleOutlined, EyeOutlined} from "@ant-design/icons";
import './register.css'

import img2 from './images/robo.png';
import img3 from './images/user-logo.png';
import img4 from './images/email-logo.png';
import img5 from './images/key-logo.png';
import img6 from './images/padlock-logo.png';
import img1 from './images/smirking-face.png';
export default function Register() {
    const navigate=useNavigate();
    const [data, setData]=useState({
        name:'',
        email:'',
        password:'',
        cpass:''
    }
    )
    const[visible,setVisible]=useState(false);
    const[cvisible,setCvisible]=useState(false);
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
   
    <div id="full"> 
        <section id='heading'>
           <div id="heading2">
            <img className="robo" src={img2} alt=""/>
            <div className='pname' >
            <h1 style={{fontFamily:'cursive'}} >CodeSquad</h1>
            </div>
            </div>
            
            </section>
            {/* <div>
            <h2>If you don't mind can I have your email id <img style={{width:'25px',height:'25px'}} src={img1} alt='img'/> ,<br></br> Just for registration!!!</h2>
            </div> */}
            <div id="page">
                {/* <div className="box">
                    <section id="register">
                <div className="pline">
            <h2>If you don't mind can I have your email id? <img style={{width:'25px',height:'25px'}} src={img1} alt='img'/>  Just for registration!!!</h2>
            </div></section>
                </div> */}
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
        <input  name="password" placeholder="PASSWORD"
        type={visible ? "text":"password"}
        value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
        <div className="visible1" onClick={()=>setVisible(!visible)}>{
            visible ? <EyeOutlined/>:<EyeInvisibleOutlined/>
            }</div>
        </div>
        <div className="form_field">
        <img className="imgbg3" src={img6} alt=""/>
        <input type={cvisible ? "text":"password"}
         name="cpass" placeholder="CONFIRM PASSWORD" value={data.cpass}
         onChange={(e)=>setData({...data,cpass:e.target.value})}/>
         <div className="visible1" onClick={()=>setCvisible(!cvisible)}>{
            cvisible ? <EyeOutlined/>:<EyeInvisibleOutlined/>
            }</div>
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
        <h5 >Already have an Account?</h5>
        <Link to={'/login'} className="pname" style={{color:'red', fontFamily:'cursive', fontSize:'30px'}} >Login</Link></div>
        </section>
    </div>
    </div>
    </div>
    
    )
}