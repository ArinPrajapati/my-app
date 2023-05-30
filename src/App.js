import React, { useState } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import './App.css';
import AboutUs from './componets/AboutUs';
import Alert from './componets/Alert';
import Nabar from './componets/Nabar';
import TextForm from './componets/TextForm';


function App() {

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#000000';
      showAlerts("Dark mode has been enabled", "success");

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#ffffff';
      showAlerts("Light mode has been enabled", "success");

    }
  }

  const [Mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlerts = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setInterval(() => {
      setAlert(null);
    }, 3000)

  }

  const [colorChoice, setColorChoice] = useState("")


  const colorForTheme = (data) => {
    if (data === null) {
      setColorChoice("Blue")
    }
    setColorChoice(data);

    console.log(colorChoice);

  };



  return (





    <>

      <Router>

        <Nabar title="TextWizard" tabOne="Home" tabTwo="About US" mode={Mode} toggleMode={toggleMode} colorTheme={colorForTheme} />


        <Alert alert={alert} />

        <Routes>
          <Route exact path="/home" element={<TextForm howAlerts={showAlerts} heading="Enter Text to Analyze" mode={Mode} colorTheme={colorChoice} />}>

          </Route>
          <Route exact path="/about" element={<AboutUs />}>

          </Route>
        </Routes>

      </Router>


    </>






  );
}

export default App;

