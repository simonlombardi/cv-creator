import { useState } from 'react';
import './App.css';
import FormEducationalExp from './components/FormEducationalExp';
import FormGeneralInformation from './components/FormGeneralInformation';
import FormPracticalExp  from './components/FormPracticalExp';
import GeneralInfoOut from './components/GeneralInfoOut';




function App() {

  const [generalInfo, setGeneralInfo] = useState({
    name:"",
    email:"",
    tel:"",
    dateOfBirth:""
  })

  function infoName(e){
      setGeneralInfo({name: e.target.value, ...generalInfo})
  }

  function infoEmail(e){
      setGeneralInfo({email: e.target.value, ...generalInfo})
  }

  function infoTel(e){
      setGeneralInfo({tel: e.target.value, ...generalInfo})
  }

  function infoDateOfBirth(e){
      setGeneralInfo({dateOfBirth: e.target.value, ...generalInfo})
  }

  return (
    <div className="App">
      <div className='inputInformation'>
        <FormGeneralInformation infoName={infoName} infoEmail={infoEmail} infoTel={infoTel} infoDateOfBirth={infoDateOfBirth} />
        <FormEducationalExp />
        <FormPracticalExp />
      </div>
      <div className='outputInformation'>
        <GeneralInfoOut generalInfo={generalInfo} />
      </div>
    </div>
  );
}

export default App;
