import React from 'react';
import Start from './components/Start';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { DataProvider } from './context/dataContext';

function App() {
<<<<<<< HEAD
  // All Quizs, Current Question, Index of Current Question, Answer, Selected Answer, Total Marks
  const [quizs, setQuizs] = useState([]);
  const [question, setQuesion] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [marks, setMarks] = useState(0);

  // Display Controlling States
  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Load JSON Data
  useEffect(() => {
    fetch('quiz.json')
      .then(res => res.json())
      .then(data => setQuizs(data))
  }, []);

  // Set a Single Question
  useEffect(() => {
    if (quizs.length > questionIndex) {
      setQuesion(quizs[questionIndex]);
    }
  }, [quizs, questionIndex])

  // Start Quiz
  const startQuiz = () => {
    setShowStart(false);
    setShowQuiz(true);
  }

  // Check Answer
  const checkAnswer = (e) => {
    if (!selectedAnswer) {
      console.log(!selectedAnswer);
      setCorrectAnswer(question.answer);
      setSelectedAnswer(e.target.value);

      if (e.target.value === question.answer) {
        setMarks(marks + 5);
      } else {
        e.target.nextSibling.style.background = '#ff0000';
      }
    }
  }

  // Next Quesion
  const nextQuestion = () => {
    setCorrectAnswer('');
    setSelectedAnswer('');
    const labels = document.querySelectorAll('label');
    labels?.forEach(item => item.style.background = '#333333');
    setQuestionIndex(questionIndex + 1);
  }

  // Show Result
  const showTheResult = () => {
    setShowResult(true);
    setShowStart(false);
    setShowQuiz(false);
  }

  // Start Over
  const startOver = () => {
    setShowStart(false);
    setShowResult(false);
    setShowQuiz(true);
    setCorrectAnswer('');
    setSelectedAnswer('');
    setQuestionIndex(0);
    setMarks(0);
    const labels = document.querySelectorAll('label');
    labels?.forEach(item => item.style.background = '#333333');
  }

=======
>>>>>>> f6d78ccec1a77a895b33c5a8afcdd6dffde94702
  return (
    <DataProvider>
      {/* Welcome Page */}
      <Start/>

      {/* Quiz Page */}
      <Quiz/>

      {/* Result Page */}
      <Result/>

    </DataProvider>
  );
}

export default App;
