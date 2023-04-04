import { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import AboutMeOut from './components/AboutMeOut';
import ContactOut from './components/ContactOut';
import EducationExpOut from './components/EducationExpOut';
import FormEducationalExp from './components/FormEducationalExp';
import FormGeneralInformation from './components/FormGeneralInformation';
import FormLenguages from './components/FormLenguages';
import FormPracticalExp  from './components/FormPracticalExp';
import GeneralInfoOut from './components/GeneralInfoOut';
import PracticalExpOut from './components/PracticalExpOut';
import PhotoCV from './components/PhotoCV';


function App() {

  const [generalInfo, setGeneralInfo] = useState({
    name:"",
    title:"",
    email:"",
    city:"",
    tel:"",
    dateOfBirth:""
  })

  const [educationalExp, setEducationalExp] = useState({
    schoolName: "",
    title: "",
    initialYear: "",
    lastYear: ""
  })

  const [practicalExp, setPracticalExp] = useState({
    company: "",
    position: "",
    initialYear: "",
    lastYear: ""
  })

  const [aboutMe, setAboutMe] = useState("")

  const [language, setLaguange] = useState({
      language: "",
      level: ""
    })

  function infoName(e){
    setGeneralInfo({...generalInfo, name: e.target.value})
  }

  function infoTitle(e){
    setGeneralInfo({...generalInfo, title: e.target.value})
}

  function infoEmail(e){
      setGeneralInfo({...generalInfo, email: e.target.value})
  }

  function infoCity(e){
    setGeneralInfo({...generalInfo, city: e.target.value})
}

  function infoTel(e){
      setGeneralInfo({...generalInfo, tel: e.target.value})
  }

  function infoDateOfBirth(e){
      setGeneralInfo({...generalInfo, dateOfBirth: e.target.value})
  }

  function infoSchoolName(e){
    setEducationalExp({...educationalExp, schoolName: e.target.value})
  }

  function infoTitleSchool(e){
    setEducationalExp({...educationalExp, title: e.target.value})
  }

  function infoInitialYear(e){
    setEducationalExp({...educationalExp, initialYear: e.target.value})
  }

  function infoLastYear(e){
    setEducationalExp({...educationalExp, lastYear: e.target.value})
  }

  function infoCompany(e){
    setPracticalExp({...practicalExp, company: e.target.value})
  }

  function infoPosition(e){
    setPracticalExp({...practicalExp, position: e.target.value})
  }

  function infoInitialYearComapny(e){
    setPracticalExp({...practicalExp, initialYear: e.target.value})
  }

  function infolastYearCompany(e){
    setPracticalExp({...practicalExp, lastYear: e.target.value})
  }

  function infoAboutMe(e){
    setAboutMe(e.target.value)
  }

  function infoLanguage(e){
    setLaguange({...language, language: e.target.value})
  }

  function infoLevel(e){
    setLaguange({...language, level: e.target.value})
  }


  return (
    <div className="App">
      <div className='inputInformation'>
        <FormGeneralInformation data={generalInfo} infoName={infoName} infoTitle={infoTitle} infoEmail={infoEmail} infoCity={infoCity} infoTel={infoTel} infoDateOfBirth={infoDateOfBirth} />
        <AboutMe infoAboutMe={infoAboutMe} data={aboutMe} />
        <FormEducationalExp data={educationalExp} infoSchoolName={infoSchoolName} infoTitleSchool={infoTitleSchool} infoInitialYear={infoInitialYear} infoLastYear={infoLastYear} />
        <FormPracticalExp data={practicalExp} infoCompany={infoCompany} infoPosition={infoPosition} infoInitialYear={infoInitialYearComapny} infoLastYear={infolastYearCompany} />
        <FormLenguages data={language} infoLanguage={infoLanguage} infoLevel={infoLevel} />
      </div>
      <div className='output-information'>
          <GeneralInfoOut generalInfo={generalInfo} language={language} />
          <PhotoCV />
          <AboutMeOut aboutMe={aboutMe} />
          <EducationExpOut educationalExp={educationalExp} />
          <PracticalExpOut practicalExp={practicalExp} />
          <ContactOut generalInfo={generalInfo} />
      </div>
    </div>
)}

export default App;
