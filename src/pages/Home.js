import { Form } from "../components/FormContactUs"
import { Footer } from "../components/Footer"
import { Solutions } from "../components/Solutions"
import { Work } from "./Work"
import { Success } from "../components/Success"
import homeImage from '../assests/home page image/Developer activity-bro.png'
export const Home = () => {
    return (
        <>
            <div className="home-page">
                <div className="home-page__desc">
                    <h1 className="home-page__header">
                        BEAUTIFUL CODE IS WRITTEN BY EXCEPTIONAL THINKERS
                    </h1>
                    <p>
                        We're a creative team of programming language enthusiasts.
                    </p>
                    <p>
                        We're proud of our close-knit team that delivers highly challenging products to achieve the impossible.
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
                    <button className="home-page__button contact-us-button">
                        Contact us
                    </button>
                    <button className="home-page__buttons our-work-button">
                        Our work
                    </button>
                </div>
                {/* <img src={homeImage} alt="Home-page-image" 
                className="home-page__image"/> */}
                <img src="" alt="home-image" />
            </div>
            <Solutions />
            <Success/>
            <Work />
            <Form />
            <Footer />
            <p>©Nissi Computing Labs 2023</p>
        </>
    )
}
