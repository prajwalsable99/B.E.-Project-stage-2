import Navbar from "./components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import VisualPage from "./pages/VisualPage";
import About from "./pages/About";
import Features from "./pages/Features";
import Loader from "./components/Loader";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";



function App() {


  return (

      <BrowserRouter>
    
        <Navbar/>
     
          <Routes >

            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/features" element={<Features/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/visualpage" element={<VisualPage/>}></Route>

            {/* for tetstinf loader */}
            <Route path="*" element={<NotFound/>} ></Route>
            {/* <Route path="test" element={<Predictor2/>} ></Route> */}
        
          </Routes>
    
      </BrowserRouter>
    
  );
}

export default App;
