import { solutions } from "../data/Solutions"
export const Solutions = () => {
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