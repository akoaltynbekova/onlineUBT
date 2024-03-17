import { useState } from 'react'
import './App.css'
import ExamPage from "./Components/Filter/Filters/FilterPage/FilterExam";
import RegistrationForm from './Components/Filter/Filters/RegisterForTeacher/registerTeacher';
/*import CodePage from './Components/Filter/Filters/PageTwo/CodePage'*/

function App() {
  return (
      <div className="App">
        <ExamPage/>
        {/* <RegistrationForm/> */}
        {/* <CodePage/> */}

      </div>
      
  )
}

export default App;
