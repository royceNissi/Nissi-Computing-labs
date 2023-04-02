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
                        Making a World of Opportunities Accessible.
                    </h1>
                    <p>
                    We build products through research and collabortive brainstroming.
                    </p>
                    <div className="button-container">
                        <Link to='/contact-us' className="contact-link link">
                                Contact us <CiMail/>
                        </Link>
                        <Link to='/our-work' className="work-link link" >
                            Our work <BsArrowRight/>
                        </Link>
                    </div>
                </div>
                <img src={homeImage} alt="Home-page-image" 
                className="home-page__image"/>
            </div>
            <Projects/>
            <Solutions />
            <Success/>
            <Footer />
        </>
    )
}
