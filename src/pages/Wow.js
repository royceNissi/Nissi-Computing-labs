import research from '../assests/process/research.png';
import design from '../assests/process/design.png';
import build from '../assests/process/build.png';
import deploy from '../assests/process/deploy.png';
import analyse from '../assests/process/analyse.png';
import review from '../assests/process/review.png';
import { FaReact,FaPython,FaAws,FaNode } from "react-icons/fa";
import { SiMongodb,SiSelenium } from "react-icons/si";
import {Footer}from '../components/Footer'
export const WayofWork=()=>{
    return(
        <div className='wow-container'>
            <div className='wow'>
                <h2 className='wow__header'>Our Way of Working</h2>
                <p className='wow__desc'>We have focused our development using Research driven principles and agile development methodologies which has helped us to deliver more specific solutions.</p>
                <p className='wow__desc'> We bring into effective action every information provided by the business as complex requirements, by breaking it into smaller pieces to deliver intelligent solutions promptly.</p>
            </div>
            <h2 className='wow__sub-header'>How we do it</h2>
            <div className='process'>
                <div className='process-card'>
                    <h6 className='process-name'>Research</h6>
                    <img src={research} alt="" className='process-image' />
                </div>
                <div className='process-card'>
                    <h6 className='process-name'>Design</h6>
                    <img src={design} alt=""className='process-image' />
                </div>
                <div className='process-card'>
                    <h6 className='process-name'>Build</h6>
                    <img src={build} alt=""className='process-image' />
                </div>
                <div className='process-card'>
                    <h6 className='process-name'>Deploy</h6>
                    <img src={deploy} alt=""className='process-image' />
                </div>
                <div className='process-card'>
                    <h6 className='process-name'>Analyse</h6>
                    <img src={analyse} alt=""className='process-image'  />
                </div>
                <div className='process-card'>
                    <h6 className='process-name'>Review</h6>
                    <img src={review} alt=""className='process-image' />
                </div>
            </div>
            <h2 className='wow__sub-header'>Technology we use</h2>
            <div className='tech-icon-container'>
                <div>
                    <FaReact className='tech-icon'/>
                    <p>React</p>
                </div>
                <div>
                    <FaPython className='tech-icon'/>
                    <p>Python</p>
                </div>
                <div>
                    <FaAws className='tech-icon'/>
                    <p>AWS</p>
                </div>
                <div>
                    <FaNode className='tech-icon'/>
                    <p>NodeJs</p>
                </div>
                <div>
                    <SiMongodb className='tech-icon'/>
                    <p>Mongodb</p>
                </div>
                <div>
                    <SiSelenium className='tech-icon'/>
                    <p>Selenium</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}