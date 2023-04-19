import { people } from "../data/People"
export const Team = () =>{
    return(
        <div className="team">
            {people.length>1?people.map((person)=>{
                return(
                    <div className="person" key={person.name}>
                        <img src={person.pic} alt="" className="person__pic"/>
                        <h6 className="person__name">{person.name}</h6>
                        <p className="person__role">{person.role}</p>
                    </div>
                )
            }):null}
        </div>
    )
}