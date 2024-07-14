import reactLogo from "../images/logo192.png"
import "../index.css" 
export default function Header(){
    return(
        <nav className="Navbar">
                <img src={reactLogo}></img>

                <p id="lefthead">ReactFacts</p>

                <p id="righthead">React Course - Project 1</p>
        </nav>
    )
}