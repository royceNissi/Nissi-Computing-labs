import problem from '../assests/icons/problem.png';
import research from '../assests/icons/research.png';
import solution from '../assests/icons/solve.png';
import design from '../assests/icons/design.png';
import build from '../assests/icons/build.png';
import deploy from '../assests/icons/deployment.png';
import analyse from '../assests/icons/analyse.png';
import review from '../assests/icons/review.png';
export const WayofWork=()=>{
    return(
        <div>
            <h2>Our Way of Working</h2>
            <p>We have focused our development using Research driven principles and agile development methodologies which has helped us to deliver more specific solutions.</p>
            <p> We bring into effective action every information provided by the business as complex requirements, by breaking it into smaller pieces to deliver intelligent solutions promptly.</p>
            {/* <h2>How it Works</h2>
            <div>
            <div>
                <img src={problem} alt="" width='100px'/>
                <h3>Problem</h3>
                <p>Find the problem faced by common people</p>
                </div>
                <div>
                    <img src={research} alt="" width='100px'/>
                    <h3>Research</h3>
                    <p>Find the Root cause of problem</p>
                </div>
                <div>
                    <img src={solution} alt="" width='100px'/>
                    <h3>Solution</h3>
                    <p>Provide Solutions using modern tools and technology
                    </p>
                </div>
            </div> */}
            <h2>How we do it</h2>
            <div>
                <div>
                    <img src={research} alt="" width='100px'/>
                    <h3>Step 1-Research</h3>
                </div>
                <div>
                    <img src={design} alt="" width='100px'/>
                    <h3>Step 2-Design</h3>
                </div>
                <div>
                    <img src={build} alt="" width='100px'/>
                    <h3>Step 3-Build</h3>
                </div>
                <div>
                    <img src={deploy} alt="" width='100px'/>
                    <h3>Step 4-Deploy</h3>
                </div>
                <div>
                    <img src={analyse} alt="" width='100px' />
                    <h3>Step 5-Analyse</h3>
                </div>
                <div>
                    <img src={review} alt="" width='100px'/>
                    <h3>Step 6-Review</h3>
                </div>
            </div>
            <h2>Technology and Tools</h2>
            <div>
                React,python,mongoDB,AWS,Selenium,NodeJs
            </div>
        </div>
    )
}