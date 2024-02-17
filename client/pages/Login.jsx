import {useState} from "react";
import axios from "axios";
import {toast} from 'react-hot-toast'
import {Link, useNavigate } from "react-router-dom";
import {EyeInvisibleOutlined, EyeOutlined} from "@ant-design/icons";
import './login.css';
import{auth, provider} from '../src/firebase';
import {signInWithPopup} from 'firebase/auth';
import robo from './images/robo.png';
import user from './images/user.png';
import key from './images/key.png';
import google from './images/googlebg.png';


export default function login() {
    const navigate=useNavigate()
    const [data, setData]=useState({
        name:'',
        password:'',
    }
    )
    const[visible,setVisible]=useState(false);
    const loginUser=async(e)=>{
        e.preventDefault();
       const {name,password}=data
       try{
        const{data}=await axios.post('/login',{
            name, 
            password
        });
        if(data.error){
            toast.error(data.error)
        } else{
            setData({});
            toast.success('Successfully Logined!!! ')
            navigate('/')
        }
       }catch(error){

       }
    }
     
    const  signInWithGoogle=async()=>{
      const result=await signInWithPopup(auth,provider);
      console.log(result);
      navigate('/');
    };

    return(
        <div className="container" >
        <div className='heading'>
            <h4 style={{fontFamily:'cursive',fontSize:'32px',fontWeight:'bold',padding:'10px',marginTop:'40px'}}>CodeSquad</h4>
            <img src={robo} alt="robot"/>
        </div>   
        <div id='page'>
          <div className='box1'>
        <section id='login'>
        <form onSubmit={loginUser} >
        
       
       {/* <div className='input-container' > */}
       <h2 style={{color:"#064251",fontFamily:"cursive",fontSize:30,fontWeight:"bold",marginTop:"-150px",marginBottom:'10px'}}>Login</h2>
       <div className='input-group'>
       <img src={user} alt="userlogo"/>
       <input name="name" placeholder="NAME" value={data.name}
        onChange={(e)=>{ setData({...data,name:e.target.value})}}type="name"  
        />
       </div>
       <div className='input-group'>
       <img src={key} alt="key logo"/>
      <input type={visible ? "text":"password"}
       name="password" value={data.password}  placeholder="PASSWORD"
     onChange={(e)=>{ setData({...data,password:e.target.value})}} 
     />
     <div className="visible1" onClick={()=>setVisible(!visible)}>{
            visible ? <EyeOutlined/>:<EyeInvisibleOutlined/>
            }</div>
    </div>
   
     <button type="submit" style={{color:"#072f3b",fontFamily:"cursive",fontSize:"20px",fontWeight:'bold',marginTop:'10px',marginBottom:'-100px'}}>LogIn</button>
   </form>
   </section>
   </div>
  <div className='box1'>
  <div className='line'>
  </div></div>
     <div className='box1'>
     <section id="login">
   <div className='google'>
     <img src={google} alt="logo"/>
     <button onClick={signInWithGoogle}style={{color:"blue",fontFamily:"revert",fontSize:"20px",fontWeight:'bold',marginTop:'5px',backgroundColor:"transparent",border:"none"}}>Continue with Google</button>  
   </div>
   <div className='Signup'>
     <h5 style={{color:"#072f3b",fontFamily:"cursive",fontSize:"20px",fontWeight:'bold'}}>Do not have an account?</h5>
     <Link to={'/register'} style={{fontFamily:'cursive',color:'#FF3A33'}}>Sign Up</Link>
   </div>
   </section>
   </div>
   </div>
  </div>
    )
}
