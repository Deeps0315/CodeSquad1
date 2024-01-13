
import React, { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';


const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    // Add your authentication logic here (e.g., API call, validation)
    const {name, password}=formData
    try{
       const {formData}=await axios.post('/login',{
        name,
        password
       });
       if(formData.error){
        toast.error(formData.error)
       }else{
        setFormData({});
        navigate('/')
       }
    }catch(error){

    }
  };

  return (
    <div className="App">
      <h1>Login Form</h1>
      <form onSubmit={loginUser}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;


