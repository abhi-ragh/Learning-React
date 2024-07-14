import "./style.css";
import data from "./data";
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Card from "./components/Card";

export default function App(){
    const item = data.map( x => {
        return <Card
            {...x}
        />
    })
    return(
        <div className="App">
            <Nav />
            <Hero />
            <section className="cardscoll">
                {item}
            </section>
        </div>
    )
}