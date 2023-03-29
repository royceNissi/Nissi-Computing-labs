import { Form } from "../components/FormContactUs"
import { Footer } from "../components/Footer"
import { Solutions } from "../components/Solutions"
import { Work } from "./Work"
export const Home = () => {
    return (
        <>
            <div className="home-page">
                <h1 className="home-page__header">
                    BEAUTIFUL CODE IS WRITTEN BY EXCEPTIONAL THINKERS
                </h1>
                <p className="home-page__desc">
                    We're a creative team of programming language enthusiasts.
                </p>
                {/* <p className="home-page__desc">
                    And we take pride in writing good code.
                </p> */}
                <p className="home-page__desc">
                    We build products through research and collabortive brainstroming.
                </p>
                <p className="home-page__desc">
                    We're proud of our close-knit team that delivers highly challenging products to achieve the impossible.
                </p>
                {/* <p className="home-page__desc">
                    Our amazing mentors drive us to achieve the impossible every day
                </p> */}
                <button className="home-page-buttons contact-us-button">
                    Contact us
                </button>
                <button className="home-page-buttons our-work-button">
                    Our work
                </button>
            </div>
            <Solutions />
            <Work />
            <Form />
            <Footer />
        </>
    )
}
