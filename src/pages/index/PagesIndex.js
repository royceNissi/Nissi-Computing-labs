import { Navigation } from "../../components/Navbar";
import { Home } from "../Home.js";
import { WayofWork } from "../Wow";
import { Work } from "../Work";
import { About } from "../About";
import { Routes, Route } from 'react-router-dom';
import { Form } from "../ContactUs";
import { Footer } from "../../components/Footer";

export const Index = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}/>
          <Route path='/our-work' element={<Work />} />
          <Route path='/our-wow' element={<WayofWork />} />
          <Route path='/about-us' element={<About />} />
          <Route path="/contact-us" element={<Form />} />
      </Routes>
      <Footer/>
    </div>
  )
}