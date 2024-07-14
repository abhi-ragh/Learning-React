import { createRoot } from "react-dom/client"
import Header from "./components/Header"
import Main from "./components/Main"

export default function App(){
    return(
        <div className="Container">
            < Header />
            < Main / >
        </div> 
    )
}