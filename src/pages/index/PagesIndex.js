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
              <Route path = '/ourWow'element={<WayofWork />}/>
              <Route path='/ourwork' element={<Work/>}/>
              <Route path='/aboutus' element={<About/>}/>
            </Routes>
          </Router>
        </div>
    )
}