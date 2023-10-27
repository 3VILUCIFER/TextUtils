import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#324a62';
      showAlert('DarkMode is enabled!','success')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('LightMode is enabled!','success')

    }

  
  }

  
  const showAlert = (message, type)=>{
    setAlert({
        msg: message,
        type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
   <>
   <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About textUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
        <Routes>
          <Route extact path='/about' element={<About mode={mode}/>}></Route>
          <Route exact path='/' element={
            	 <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}></TextForm> 
          }></Route>
        </Routes>
      </div>
      </BrowserRouter>
   </>
  );
}

export default App;
