import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type) => {
    setAlert ({
      message : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode enabled!!", "success")
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled!!", "success");
    }
  }

  return (
    <>
      <Router>
      <Navbar title="Text Utils" about="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert= {alert} />
      <div className="container">

       <Routes>
          <Route exact path="/about" element={<About />} ></Route>

          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text below" mode={mode} />} ></Route>
        </Routes>

      </div>
      </Router>
    </>
  );
}

export default App;
