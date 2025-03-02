import NavBar from "./NavBar";
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const QuizViewer = () => {
  const [searchParams] = useSearchParams();
  const quizCategory = searchParams.get('name');
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

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

  return (
    <div id="quizbody">
      <div>
        <NavBar />
      </div>
     
      {data.map((q) => {
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
                  />
                  {option}
                </label>
              </div>
            ))}

          </div>
        );
      })}

  </div>
  );
};

export default QuizViewer;
