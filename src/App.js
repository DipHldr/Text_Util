
import './App.css'
import Navbar from './components/Navbar.js' 
import TextForm from './components/TextForm.js'
import Alert from './components/Alert.js'
import {useState} from 'react'
import About from './components/About.js'
import { 
  BrowserRouter as Router,
  Routes,
  Link,
  Route, 
  BrowserRouter} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light')
  let toggleMode=()=>{
    if(mode ==='dark'){
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
      document.title='Text Utils Light-mode'
    }else{
      setMode('dark')
      document.body.style.backgroundColor='#31363b'
      showAlert("Dark mode has been enabled","success")
      document.title='Text Utils Dark-mode'
    }
  }
  const [alert,setAlert]=useState(null)
  let showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{setAlert(null)},1500)
  }

  return (
    <>
    <BrowserRouter>
<Navbar title="TextUtils" AboutTextUtils="About Text Utils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<Routes>
  <Route exact path="/" element={
<TextForm showAlert={showAlert} heading="Enter text to analyze it below" mode={mode}/>
  }
/>
  
  <Route exact path="/about" element={<About/>}/>
     

</Routes>
</BrowserRouter>
{/* <Navbar/> */}
    </>
  );
}

export default App;
