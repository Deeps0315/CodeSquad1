
import './App.css'
import {Routes,Route} from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import axios from 'axios';
import {Toaster} from 'react-hot-toast'

axios.defaults.baseURL='http://localhost:8000';
axios.defaults.withCredentials= true;

function App() {
  
  return (
    <>
    {/* <Navbar /> */}
    <Toaster position='bottom-right' toastOptions={{duration:2000}} />    
    <Routes>
      <Route path='/Navbar' element={<Navbar/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
      
        
    </>
  )
}

export default App
