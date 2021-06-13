import { NavLink } from "react-router-dom"

export const Menu = ()=>{
    return(
        <div>
            <ul className="mainMenu">
                <li>
                    <NavLink to="/light">Easy</NavLink>
                </li>
                <li>
                    <NavLink to="/middle">Medium</NavLink>
                </li>
                <li>
                    <NavLink to="/pro">Hard</NavLink>
                </li>
            </ul>
            
        </div>
    )
}