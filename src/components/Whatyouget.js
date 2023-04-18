import { advantages } from "../data/Advantages"
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