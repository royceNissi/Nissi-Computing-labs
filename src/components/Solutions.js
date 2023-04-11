import ecommerceIcon from '../assests/solutions/ecommerce.png';
import educationIcon from '../assests/solutions/education.png';
import events from '../assests/solutions/events.png';
import hrIcon from '../assests/solutions/Profiling-bro.png';
import sports from '../assests/solutions/sports.png';
import survey from '../assests/solutions/survey.png';
export const Solutions = () => {
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
            industry: 'Events',
            icon: events
        },
        {
            industry: 'Sports',
            icon: sports
        },
        {
            industry: 'Surveys',
            icon: survey
        },
        {
            industry: 'Human Resource',
            icon: hrIcon
        }
    ]
    return (
        <>
            <h2 className="solutions-header">Solutions Offered</h2>
            <div className="solutions">
                {solutions.length>1?solutions.map((solution) => {
                    return (
                        <div className="solution" key={solution.industry}>
                            <img className='solution__icon' src={solution.icon}
                                alt={solution.industry} />
                            <h5 className="solution__header">
                                {solution.industry}
                            </h5>
                        </div>
                    )
                }):null}
            </div>
        </>

    )
}