import ecommerceIcon from '../assests/icons/ecommerce.png';
import educationIcon from '../assests/icons/education.png';
import govtIcon from '../assests/icons/government.png';
import agriIcon from '../assests/icons/agriculture.png';
import adIcon from '../assests/icons/advert.png';
import surveyIcon from '../assests/icons/survey.png';
import hrIcon from '../assests/icons/hr.png';
import scmIcon from '../assests/icons/scm.png';
export const Solutions=()=>{
     const solutions = [
        {
            industry: 'Ecommerce',
            icon: ecommerceIcon
        },
        {
            industry: 'Education',
            icon: educationIcon
        },
        {
            industry: 'Government',
            icon: govtIcon
        },
        {
            industry: 'Sports',
            icon: agriIcon
        },
        {
            industry: 'Events',
            icon: adIcon
        },
        {
            industry: 'Surveys',
            icon: surveyIcon
        },
        {
            industry: 'Human Resource',
            icon: hrIcon
        }
    ]
    return (
        <div className="solutions">
            <h2 className="solutions__header">Solutions Offered</h2>
            {solutions.map((solution) => {
                return (
                    <div className="solution" key={solution.industry}>
                        <img className='solution__icon' src={solution.icon} 
                        alt={solution.industry} 
                        width='100px'/>
                        <h5 className="solution__header">
                            {solution.industry}
                        </h5>
                    </div>
                )
            })}
        </div>
    )
}