import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      message: message,
      type: type
    }
    )
    setTimeout(
      () => {
        setalert(null);

      }, 1500
    )
  }

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.background = 'gray';
      showalert("dark mode has been on", "success");
      document.title = "textutil - dark mode";
    }
    else {
      setmode('light');
      document.body.style.background = 'white';
      showalert("light mode has been on", "success");
      document.title = "textutil - light mode";
    }
  }


  return (
    // jsx fragment
    // babel
    //props
    // props types
    // hooks
    // states
    // settexts
    <>
      {/* <Navbar/> */}
      <Router>
      <Navbar title="Textutils" abouttext="about" mode={mode} togglemode={togglemode} />

      <Alert alert={alert} />
      <div className='container my-3'>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm heading="Enter the text to analyze below" mode={mode} showalert={showalert} />
          </Route>
        </Switch>
        {/* <About></About> */}
      </div>
      </Router>
    </>
  );
}

export default App;

// npm run build
// npm start
