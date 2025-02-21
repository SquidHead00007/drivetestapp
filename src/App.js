import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./Home";

function App() {
  return (
    <div id="appbody">
      <Router>
         <Routes>
           <Route exact path="/" element={<Home />}></Route>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
