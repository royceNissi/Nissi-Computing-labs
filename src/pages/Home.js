import { Footer } from "../components/Footer"
import { Solutions } from "../components/Solutions"
import { Success } from "../components/Success"
import { Projects } from "../components/Projects"
import { BsArrowRight} from "react-icons/bs";
import { CiMail} from "react-icons/ci";
import homeImage from '../assests/home page image/Developer activity-bro.png'
import { Link } from "react-router-dom";
export const Home = () => {
    return (
        <>
            <div className="home-page">
                <div className="home-page__desc">
                    <h1 className="home-page__header">
                        BEAUTIFUL CODE IS WRITTEN BY EXCEPTIONAL THINKERS
                    </h1>
                    <p>
                    We build products through research and collabortive brainstroming.
                    </p>
                    <p>
                        We're a creative team of programming language enthusiasts.
                    </p>
                    {/* <p className="home-page__desc">
                        And we take pride in writing good code.
                    </p> */}
                    {/* <p className="home-page__desc">
                        We build products through research and collabortive brainstroming.
                    </p> */}
                    
                    {/* <p className="home-page__desc">
                        Our amazing mentors drive us to achieve the impossible every day
                    </p> */}
                    <div className="button-container">
                        <div className="button">
                        <Link to='/contact-us' className="button-link">
                            <button className="home-page__button contact-us-button">
                                Contact us <CiMail/>
                            </button>
                        </Link>
                        </div>
                        <div className="button">
                        <Link to='/our-work' className="button-link" >
                        <button className="home-page__button our-work-button">
                            Our work <BsArrowRight/>
                        </button>
                        </Link>
                        </div>
                        
                    </div>
                </div>
                <img src={homeImage} alt="Home-page-image" 
                className="home-page__image"/>
            </div>
            <Projects/>
            <h2 className="solutions__header">Solutions Offered</h2>
            <Solutions />
            <Success/>
            <Footer />
        </>
    )
}
