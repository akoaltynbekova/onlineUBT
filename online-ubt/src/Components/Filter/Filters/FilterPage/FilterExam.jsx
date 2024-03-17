import React, { useState } from 'react';
import styles from './FilterExam.module.css';
import kazakh_img from './kazakhstan.png';
import russion_img from './russia.png';

const ExamPage = () => {
  const [language, setLanguage] = useState('russian');
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const handleSubjectSelect = (subject) => {
    setSelectedSubjects((prevSelectedSubjects) =>
      prevSelectedSubjects.includes(subject)
        ? prevSelectedSubjects.filter((sub) => sub !== subject)
        : [...prevSelectedSubjects, subject]
    );
  };

  const handleSubmit = () => {
    console.log('Selected language:', language);
    console.log('Selected subjects:', selectedSubjects);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Сдать экзамен</h2>
      </div>

      <div className={styles.background}>
        <div className={styles.examLang}>
          <p>Выберите язык экзамена</p>
          <div className={styles.languageToggle}>
            <button
              className={`${styles.languageButton} ${
                language === 'kazakh' && styles.languageButtonActive
              }`}
              onClick={() => handleLanguageChange('kazakh')}
            >
                <img className={styles.flag} src={kazakh_img} alt="kazakh"/>
              На казахском
            </button>

            <button
              className={`${styles.languageButton} ${
                language === 'russian' && styles.languageButtonActive
              }`}
              onClick={() => handleLanguageChange('russian')}
            >
                <img className={styles.flag} src={russion_img} alt="russian" />                
              На русском
            </button>
          </div>
        </div>
      




        <div className={styles.subjectCategory}>
          <p>Обязательные предметы</p>
          {/* Repeat for each subject */}
          <div className={styles.CompSubjects}>
            <button
              className={styles.subjectButtonMust}
              onClick={() => handleSubjectSelect('Mathematical literacy')}
            >
              Математическая грамотность
            </button>
            <button
              className={styles.subjectButtonMust}
              onClick={() => handleSubjectSelect('Reading literacy')}
            >
              Грамотность чтения
            </button>
            <button
              className={styles.subjectButtonMust}
              onClick={() => handleSubjectSelect('history of Kazakhstan')}
            >
              История Казахстана
            </button>
          </div>
        </div>


        <div className={styles.subjectCategory}>
          <p>Выборочные предметы</p>
          <div className={styles.secondSubject}>
            <div className={styles.ElectiveSubjects}>
                <button
                  className={styles.subjectButton}
                  onClick={() => handleSubjectSelect('math')}
                >
                  Математика
                </button>
                <button
                  className={styles.subjectButton}
                  onClick={() => handleSubjectSelect('physics')}
                >
                  Физика
                </button>
                <button
                  className={styles.subjectButton}
                  onClick={() => handleSubjectSelect('biology')}
                >
                  Биология
                </button>
                <button
                  className={styles.subjectButton}
                  onClick={() => handleSubjectSelect('geography')}
                >
                  География
                </button>
                <button
                  className={styles.subjectButton}
                  onClick={() => handleSubjectSelect('chemistry')}
                >
                  Химия
                </button>
                <button
                  className={styles.subjectButton}
                  onClick={() => handleSubjectSelect('world history')}
                >
                  Всемирная история
                </button>
                <button
                  className={styles.subjectButton}
                  onClick={() => handleSubjectSelect('russion literature')}
                >
                  Русская литература
                </button>
              </div>
              <div className={styles.ElectiveSubjects}>
                  <button
                    className={styles.subjectButton}
                    onClick={() => handleSubjectSelect('kazakh')}
                  >
                    Қазақ тілі
                  </button>
                  <button
                    className={styles.subjectButton}
                    onClick={() => handleSubjectSelect('kazakh literature')}
                  >
                    Қазақ әдебиеті
                  </button>
                  <button
                    className={styles.subjectButton}
                    onClick={() => handleSubjectSelect('basis of low')}
                  >
                    Основа права
                  </button>
                  <button
                    className={styles.subjectButton}
                    onClick={() => handleSubjectSelect('english')}
                  >
                    Английский язык
                  </button>
                  <button
                    className={styles.subjectButton}
                    onClick={() => handleSubjectSelect('computer scince')}
                  >
                    Информатика
                  </button>
                  <button
                    className={styles.subjectButton}
                    onClick={() => handleSubjectSelect('russion')}
                  >
                    Русский язык
                  </button>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.startButton} onClick={handleSubmit}>
          Начать
        </button>
    </div>
  );
};

export default ExamPage;
