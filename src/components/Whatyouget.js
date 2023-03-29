const advantages = [
    {
        advantageName:'Experience',
        advantageImage:'',
        advantageDesc:''
    },
    {
        advantageName:'Advanced Analytics',
        advantageImage:'',
        advantageDesc:''
    },{
        advantageName:'Data Security',
        advantageImage:'',
        advantageDesc:''
    },
    {
        advantageName:'Visual Data',
        advantageImage:'',
        advantageDesc:''
    },
    {
        advantageName:'Performance Management',
        advantageImage:'',
        advantageDesc:''
    },
    {
        advantageName:'Enterprise Mobility',
        advantageImage:'',
        advantageDesc:''
    }
]
export const Whatyouget = ()=>{
    return(
        <div>
            <h2>What you get with Nissi</h2>
            <div className="advantages">
                {advantages.map((advantage)=>{
                    return(
                        <div className="advantage-card">
                            <h3>{advantage.advantageName}</h3>
                            <p>{advantage.advantageDesc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}