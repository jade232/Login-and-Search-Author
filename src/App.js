import React, { useEffect, useState } from 'react';
import './App.css';
import SignIn from './Components/Login/Login';
import axios from "axios"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Search/Home';

function App() {

  const [inputs, setInputs] = React.useState({
    userName: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    userName: false,
    password: false
  })


  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "username") {
      setInputs({ ...inputs, userName: e.target.value })
    } else if (name === "password") {
      setInputs({ ...inputs, password: e.target.value })
    }
  }

  const handleBlur = (e) => {
    let { name, value } = e.target;
    if (name === "username") {
      if (inputs.userName === "") {
        setErrors({ ...errors, userName: true })
      } else {
        setErrors({ ...errors, userName: false })
      }
    } else if (name === "password") {
      if (inputs.password === "") {
        setErrors({ ...errors, password: true })
      } else {
        setErrors({ ...errors, password: false })
      }
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home inputs={inputs} />} />
          <Route path="/" element={<SignIn
            inputs={inputs}
            handleChange={handleChange}
            setInputs={setInputs}
            errors={errors}
            setErrors={setErrors}
            handleBlur={handleBlur} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
