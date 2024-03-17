

























// // App.js
// import React, { useState } from 'react'; 
// import './StylePage.css';


// function CodePage() {
//   const [language, setLanguage] = useState('kazakh'); // 'kazakh' or 'russian'

//   const handleLanguageChange = (lang) => {
//     setLanguage(lang);
//   };

//   const handleSubmit = () => {
//     console.log('Exam started in language:', language);
//     // Here you would typically handle the form submission, e.g. navigate to the exam page or another action
//   };

//   return (
//     <div className="App">
//       <Header />
//       <LanguageToggle onLanguageChange={handleLanguageChange} />
//       <SubjectsSection />
//       <StartButton onSubmit={handleSubmit} />
//     </div>
//   );
// }

// function Header() {
//   return (
//     <header className="Header">
//       {/* ... */}
//     </header>
//   );
// }

// function LanguageToggle({ onLanguageChange }) {
//   return (
//     <div className="LanguageToggle">
//       <button onClick={() => onLanguageChange('kazakh')} className="LanguageButton">На казахском</button>
//       <button onClick={() => onLanguageChange('russian')} className="LanguageButton">На русском</button>
//     </div>
//   );
// }

// function SubjectsSection() {
//   return (
//     <section className="Subjects">
//       {/* ... */}
//     </section>
//   );
// }

// function StartButton({ onSubmit }) {
//   return (
//     <button className="StartButton" onClick={onSubmit}>Начать</button>
//   );
// }

// export default CodePage;
