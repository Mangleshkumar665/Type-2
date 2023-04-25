import "./App.css";
import TextForm from "./components/TextForm";
import store from "./store/store"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OptionsBar from "./components/OptionsBar";
import Footer from "./components/Footer"

import {Provider} from "react-redux"

function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
        <div className="d-flex justify-content-center ">
          <div className=" display-1 " style={{fontWeight:"400",color:"#393939"}}>
            (TYPE)<sup>2</sup> 
          </div>
        </div>

        <OptionsBar />
        <Routes>

          <Route
            path="/"
            element={
              <TextForm textVal="the and with technologies stay latest requires competitive for become ecommerce comfort showcase fast-growing entrepreneurs heart of new online purchase opportunities the has up shopping enabled made order has and businesses way to possible products sell their in game customers a demand trends the opened that to start keep industry it has ahead businesses of is home customers requires main design attracting for well-designed store potential the point store in of an customers the functionality and the first is of contact crucial between the business the ecommerce and retaining easy carpet support as consumers or carrying features platform as enable find a tool is unique able to affordable solutions brands broadest network needs search the most of efficient way the within our marketplace make products our expertise together with financing provide and much more we velop try to we all our customers convenience offering services and variety our customers are our priority we are committed to enhancing their shopping experience so they can get what they need quickly and easily shopping with us is convenient and secure with our reliable payment and delivery options we are here to support you every step of the way" />
            }
          ></Route>
          
        </Routes>
      
      </Router>
      <Footer />
      
      
      </Provider>
    </>
  );
}

export default App;
