import {Navigation} from "../../components/Navbar";
import {Home}from "../Home.js";
import {WayofWork} from "../Wow";
import {Work} from "../Work";
import {About} from "../About";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
export const Index=()=>{
    return(
        <div>
          <Router>
            <Navigation/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path = '/our-wow'element={<WayofWork />}/>
              <Route path='/our-work' element={<Work/>}/>
              <Route path='/about-us' element={<About/>}/>
            </Routes>
          </Router>
        </div>
    )
}