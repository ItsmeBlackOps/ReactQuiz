import React, { useContext, useState } from 'react';
import DataContext from '../context/dataContext';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation.

<<<<<<< HEAD
const Quiz = ({ showQuiz, question, quizs, checkAnswer, correctAnswer, selectedAnswer, questionIndex, nextQuestion, showTheResult }) => {
    return (
        <section className="bg-dark text-white" style={{ display: `${showQuiz ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <div className="card p-4" style={{ background: '#3d3d3d', borderColor: '#646464' }}>
                            <div className="d-flex justify-content-between gap-x-5">
                                <h4 className='mb-2'>{question?.question}</h4>
                                <h5 style={{ color: '#60d600', minWidth: '100px', marginTop: '5px', textAlign: 'right' }}>{quizs.indexOf(question) + 1} / {quizs?.length}</h5>
                            </div>
                            <div>
                                {
                                    question?.options?.map((item, index) => <div key={index}>
                                        <input
                                            className='d-none'
                                            type="radio"
                                            value={item}
                                            name="answer-option"
                                            id={index}
                                            onClick={checkAnswer}
                                        />

                                        <label htmlFor={index} className="btn py-2 px-3 mt-3 text-start text-light w-100" style={{ background: `${correctAnswer === item ? "#3c8800" : "#333333"}` }}>{item}</label>
                                    </div>)
                                }
                            </div>
=======
const FullNameInput = () => {
  const { startQuiz } = useContext(DataContext);
  const [fullName, setFullName] = useState('');
  const navigate = useNavigate();

  const handleStartQuiz = async () => {
    if (fullName.trim() === '') {
      // Handle empty full name input
      alert('Please enter your full name.');
    } else {
      try {
        // Make a POST request to the API to save the full name
        const response = await fetch('https://65393a6ee3b530c8d9e823f5.mockapi.io/Result', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fullName }),
        });
>>>>>>> f6d78ccec1a77a895b33c5a8afcdd6dffde94702

        if (response.ok) {
          // If the POST request is successful, start the quiz and redirect
          startQuiz();
          navigate.push('/Quiz'); // Navigate to the quiz component
        } else {
          // Handle errors, e.g., show an alert
          alert('Failed to save full name. Please try again.');
        }
      } catch (error) {
        // Handle network errors, e.g., show an alert
        alert('Network error. Please try again.');
      }
    }
  };

  return (
    <section className='text-white text-center bg-dark'>
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-8">
            <h1 className='fw-bold mb-4'>Enter Your Full Name</h1>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="form-control mb-3"
            />
            <button onClick={handleStartQuiz} className="btn px-4 py-2 bg-light text-dark fw-bold">Start Quiz</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullNameInput;
