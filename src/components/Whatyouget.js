import analytics from '../assests/features/analytics.png'
import security from '../assests/features/data-security.png'
import data from '../assests/features/Visual data.png'
import performance from '../assests/features/Performance.png'
import mobility from '../assests/features/mobility.png'
const advantages = [
    {
        advantageName:'Advanced Analytics',
        advantageImage:analytics,
        advantageDesc:''
    },{
        advantageName:'Data Security',
        advantageImage:security,
        advantageDesc:''
    },
    {
        advantageName:'Visual Data',
        advantageImage:data,
        advantageDesc:''
    },
    {
        advantageName:'Performance Management',
        advantageImage:performance,
        advantageDesc:''
    },
    {
        advantageName:'Enterprise Mobility',
        advantageImage:mobility,
        advantageDesc:''
    }
]
export const Whatyouget = ()=>{
    return(
        <div>
            <div className="advantages">
                {advantages.map((advantage)=>{
                    return(
                        <div className="advantage-card">
                            <img src={advantage.advantageImage} alt="" 
                            className='advantage-image'/>
                            <h6>{advantage.advantageName}</h6>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}