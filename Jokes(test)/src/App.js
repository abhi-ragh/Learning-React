import "./index.css"
import Joke from "./components/Joke"
import jokesData from "./jokesData"
export default function App(){
  const jokes = jokesData.map(joke => {
    return <Joke 
      setup = {joke.setup}
      punchline = {joke.punchline} 
    />
  })
  return(
    <>
      {jokes}
    </>
  )
}
