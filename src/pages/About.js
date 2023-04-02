import { Footer } from "../components/Footer"
import { Success } from "../components/Success"
import {Team} from '../components/Team'
export const About=()=>{
    return(
        <>
        <div className="about-page">
            <div className="about">
                <h2 className="about-page__header">About Us</h2>
                <p>Nissi Computing Labs provide unique software development solutions. We focus on research and ideation as they are priority to produce meaningful code for a stable and scalable software solution.
                </p>
            </div>
            <div className="mission">
                <h2 className="about-page__sub-heading mission-head">Our Mission</h2>
                <p>To enable our users to adopt and adapt to bleeding edge advances in technology and transform their organizations to achieve goals quicker and more efficiently. We strive to enrich the lives of our users and walk alongside them into the future.
                </p>
            </div>
            <div className="we">
                <h2 className="about-page__sub-heading we-are">Who we are</h2>
                <p>We are a group of young minds working toward achieving the zenith in new age software design and development, with a goal of touching people's lives with our innovative ideas.
                </p>
            </div>
            <div className="journey">
                <h2 className="about-page__sub-heading journey-head">Our Journey</h2>
                <ul>
                    <li>Founded in 2011, NISSI Computing Labs formerly known as Nissi Agency LLP, is a software solutions provider with a passion to enrich the users experience in products built and functioning in various organizations and industries.</li>
                    <li>Since inception, we’ve transformed the lives of over 85,000 students working with our 55+ partner Institutions.</li>
                    <li>Providing a holistic development Learning Management System with over 50,000+ users currently using this platform in large corporates.</li>
                    <li>Built and successfully deployed a software for Agronomists and Farmers in the agriculture industry, currently used by over 100,000+ users in Latin American regions and growing to other parts of the world.</li>
                    <li>Working on the bleeding edge of technology, Nissi has been able to provide an exclusive solution to the Advertisement Industry, used by the top companies across the globe.</li>
                </ul>
            </div>
            <h2 className="about-page__sub-heading team-head">Our Team</h2>
            <Team/>
            <h2 className="about-page__sub-heading achievements">Our Achievements and Success</h2>
            <Success/>
        </div>
        <Footer/>
        </>
    )
}