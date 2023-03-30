import { Whatyouget } from '../components/Whatyouget';
import { Projects } from '../components/Projects';
import { Success } from "../components/Success"
export const Work=()=>{
    return(
        <>
            <h2>Our Work</h2>
            <p>
                We are proud to offer products that are the result of extensive research, designed to cater to wide range of industries with complex problems. 
            </p>
            <p>
                Our- real-time user-based interactive and reactive products are specifically crafted to provide specific,tailored solutions.
            </p>
            <Success/>
            <Projects/>
            <h2>What you get with Nissi</h2>
            <Whatyouget/>
        </>
    )
}