import "./App.css";
import TextForm from "./components/TextForm";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Result from "./components/Result";
import OptionsBar from "./components/OptionsBar";

function App() {
  return (
    <>
      <Router>
        <div className="d-flex justify-content-center ">
          <div className=" display-1">
            (TYPE)<sup>2</sup>
          </div>
        </div>

        <OptionsBar />
        <Routes>

          <Route
            path="/"
            element={
              <TextForm textVal="Scolding is something common in student lifeBeing a naughty boy I am always scolded by my parentsBut one day I was severely scolded by my English teacherShe infect teaches wellBut that day I could not resist the temptation that an adventure of Nancy Drew offeredWhile she was teaching I was completely engrossed in reading that bookNancy Drew was caught in the trap laid by some smugglers and it was then when I felt a light tap on my bent headThe teacher had caught me red handedShe scolded me then and there and insulted me in front of the whole classI was embarrassedMy cheeks burned being guilty consciousWhen the class was over " />
            }
          ></Route>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
