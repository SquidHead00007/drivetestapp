import NavBar from "./NavBar";
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const QuizViewer = () => {
const [searchParams] = useSearchParams();
const quizCategory = searchParams.get('name');
const [data, setData] = useState([]);
const [error, setError] = useState('');
const [mode, setMode] = useState(null);

const [selectedAnswers, setSelectedAnswers] = useState({});
const [score, setScore] = useState(null);
const [submitted, setSubmitted] = useState(false);
const [numQuestions, setNumQuestions] = useState(5); 

  useEffect(() => {
    if (quizCategory) {
      import(`./data/${quizCategory}.json`)
        .then((module) => setData(module.default))
        .catch(() => setError('Failed to load data. Please check the query parameter or file.'));
    }
  }, [quizCategory]);

  if (error) {
    return <div className="error-text">{error}</div>;
  }

  if (!data.length) {
    return <div>Loading data...</div>;
  }
  
  const handleChange = (event, qId) => {
    const { value } = event.target;

    setSelectedAnswers({
      ...selectedAnswers,
      [qId]: value
    });
  };

  const toggleMode = (selectedMode) => {
    setMode(selectedMode);
    setScore(null); // Reset score when changing modes
    setSubmitted(false); // Reset submission state
    setSelectedAnswers({}); // Reset selected answers
  };

  const handleQuestionCountChange = (event) => {
    setNumQuestions(Number(event.target.value)); // Set number of questions
  };

  return (
    <div id="quizbody">
      <div>
        <NavBar />
      </div>


      {mode === null && (
        <div>
          <h1>Welcome to the Quiz</h1>
          <button onClick={() => toggleMode('test')}>Take Test</button>
          <button onClick={() => toggleMode('study')}>Study Mode</button>
        </div>
      )}

      {mode && (
        <div>
          <label>
            Select Number of Questions:
            <select value={numQuestions} onChange={handleQuestionCountChange}>
              <option value={3}>3</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
            </select>
          </label>
        </div>
      )}

        {mode && data.slice(0, numQuestions).map((q) => {
        // Collect all options dynamically
        const options = [
          q.option1,
          q.option2,
          q.option3,
          q.option4,
        ];

        return (
          <div key={q.id}>
            <h4>{q.question}</h4>
            {options.map((option, index) => (
              <div key={index} >
                <label>
                  <input
                    type="radio"
                    name={`q-${q.id}`}  // Unique name for each question
                    value={option}
                    onChange={(e) => handleChange(e, q.id)}
                    checked={selectedAnswers[q.id] === option}

                  />
                  {option}
                </label>
              </div>
            ))}

           {mode === 'study' && selectedAnswers[q.id] && (
              <div>
                {selectedAnswers[q.id] !== q.correct_answer ? (
                  <div>
                    <p>Incorrect!</p>
                    <p>Correct Answer: {q.correct_answer}</p>
                    <p>Explanation: {q.explanation}</p>
                  </div>
                ) : (
                  <div>
                    <p>Correct!</p>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}


  </div>
  );
};

export default QuizViewer;
