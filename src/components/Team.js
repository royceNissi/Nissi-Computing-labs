import { people } from "../data/People"
export const Team = () =>{
    return(
        <div className="team">
            {people.length>1?people.map((person)=>{
                return(
                    <div className="person">
                        <img src={person.Pic} alt="" className="person__pic"/>
                        <h6 className="person__name">{person.Name}</h6>
                        <p className="person__role">{person.Role}</p>
                    </div>
                )
            }):null}
        </div>
    )
}