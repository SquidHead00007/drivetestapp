import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import QuizView from "./QuizView";
import Info from "./Info";
import Guide from "./Guide";

function App() {
  return (
    <div id="appbody">
      <Router>
         <Routes>
           <Route exact path="/" element={<Home />}></Route>
           <Route path="/quizview" element={<QuizView/>}></Route>
           <Route path="/info" element={<Info/>}></Route>
           <Route path="/guide" element={<Guide/>}></Route>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
