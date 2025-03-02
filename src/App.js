import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import QuizView from "./QuizView";

function App() {
  return (
    <div id="appbody">
      <Router>
         <Routes>
           <Route exact path="/" element={<Home />}></Route>
           <Route path="/quizview" element={<QuizView/>}></Route>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
