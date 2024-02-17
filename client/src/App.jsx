
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PLang from '../pages/P_Lang/pLang';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import axios from 'axios';
import {Toaster} from 'react-hot-toast'
import Navbar from '../components/Navbar';
import SortingVisualizer from '../pages/dsa/SortingVisualizer/SortingVisualizer';
import PathFindingVisualizer from '../pages/dsa/PathFindingVisualizer';

axios.defaults.baseURL='http://localhost:8000';
axios.defaults.withCredentials= true;

function App() {
  
  return (
    
<div id='codesquad'>
    <Navbar/>
    <Toaster position='bottom-right' toastOptions={{duration:2000}} />  
    
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/PLang' element={<PLang/>}/>
      <Route path='/aboutUs' element={<AboutUs/>}/>
      <Route path='/contactUs' element={<ContactUs/>}/>
      <Route path='/pathFindingVisualizer' element={<PathFindingVisualizer/>}/>
      <Route path='sortingVisualizer' element={<SortingVisualizer/>}/>
      
    </Routes>
    
    </div>
    
  )
}

export default App
