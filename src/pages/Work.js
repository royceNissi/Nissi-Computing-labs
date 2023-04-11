import { Whatyouget } from '../components/Whatyouget';
import { Projects } from '../components/Projects';
import { Success } from "../components/Success";
export const Work=()=>{
    return(
        <div className='work-page'>
            <div className='has-background'>
                <div className='work'>
                    <h2 className='work__header'>Our Work</h2>
                    <p className='work__desc'>
                        We are proud to offer products that are the result of extensive research, designed to cater to wide range of industries with complex problems. 
                    </p>
                    <p className='work__desc'>
                        Our- real-time user-based interactive and reactive products are specifically crafted to provide specific,tailored solutions.
                    </p>
                </div>
            </div>
            <div className='portfolio'>
                <h2 className='work-page__header'>Our Projects</h2>
                <Projects/>
                <h2 className='work-page__header'>What you get with Nissi</h2>
                <Whatyouget/>
            </div>
            <Success/>
        </div>
    )
}