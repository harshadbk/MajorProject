import React, { useState } from 'react';
import './loginsignup.css';

const LoginSignup = () => {
  const [state, setState] = useState("Login");

  const [formdata, setFormdata] = useState({
    username: "",
    role: "Admin",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login Function Executes ", formdata);
    let response;
    await fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formdata),
    })
      .then((resp) => resp.json())
      .then((data) => response = data);
    if (response.success) {
      localStorage.setItem('auth-token', response.token);
      localStorage.setItem('user-name', formdata.email);
      window.location.replace("/profile");
    } else {
      alert(response.errors);
    }
  };

  const signup = async () => {
    console.log("Sign up Function Executes ", formdata);
    let response;
    await fetch('http://127.0.0.1:5000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formdata),
    })
      .then((resp) => resp.json())
      .then((data) => response = data);
    if (response.success) {
      localStorage.setItem('auth-token', response.token);
      window.location.replace("/profile");
    } else {
      alert(response.errors);
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" && (
            <>
              <input
                name='username'
                className='add-product-selector'
                value={formdata.username}
                onChange={changeHandler}
                type="text"
                placeholder='Your Name'
              />
              <select
                placeholder="Select The Role"
                className='add-product-selector'
                value={formdata.role}
                onChange={changeHandler}
                name="role"
              >
                <option value="Admin">Admin</option>
                <option value="Farmer">Farmer</option>
                <option value="Worker">Worker</option>
                <option value="Deliveryboy">Deliveryboy</option>
                <option value="Shopkeeper">Shopkeeper</option>
                <option value="Merchant">Merchant</option>
              </select>
            </>
          )}
          <input
            name='email'
            value={formdata.email}
            onChange={changeHandler}
            type="email"
            placeholder='Enter Your Email'
          />
          <input
            name='password'
            value={formdata.password}
            onChange={changeHandler}
            type="password"
            placeholder='Password'
          />
        </div>
        <button onClick={() => {
          if (state === "Login") {
            login();
          } else {
            signup();
          }
        }}>
          Continue
        </button>        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an account? <span onClick={() => { setState("Login") }}>Login Here</span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create An Account? <span onClick={() => { setState("Sign Up") }}>Click Here</span>
          </p>
        )}
        <div className="loginsignup-agree">
          <input type="checkbox" id='agree' />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
