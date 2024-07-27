import "./index.css"
import Joke from "./components/Joke"
import jokesData from "./jokesData"
import Rando from "./components/rando"
import {useState} from 'react'

export default function App(){
  const jokes = jokesData.map(joke => {
    return <Joke 
      setup = {joke.setup}
      punchline = {joke.punchline} 
    />
  })

  const [things, setThings] = useState(["thing1","thing2","thing3"])
  const thing = things.map( x => <p>{x}</p>)
  
  function HandleClick(){
    setThings( prevState => [...prevState,"thing"+(prevState.length+1)] )
  }

  const [isGoingOut, setIsGoingOut] = useState(true)
  function HandleNumber(){
    setIsGoingOut(isGoingOut => !isGoingOut)
  }

  const [details,setDetails] = useState({
    name : "Abhi",
    age: 18,
    contact: "90029292302",
    favorite: true
  })

  function changeName(){
    setDetails(prevState => {
      return{
        ...prevState,
        favorite : !prevState.favorite
      }
    })
  }

  const [isShown,setIsShown] = useState(false)
  function setShow(){
    setIsShown(prevState => !prevState)
  }

  const [msgs, setMsgs] = useState([1])

  const [Name,setName] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: ""
  })

  function changeName(event){
    setName(prevState => {
      return{
        ...prevState,
        [event.target.name] : event.target.value
      }
    })
  }

  const [names,setNames] = useState(false)

  function showName(){
    setNames(prevState => !prevState)
  }

  return(
    <>
      <button onClick={HandleClick}> aaaAAAAAAAAAAAAAAAAAAAAAAAAAAAA</button>
      {thing}
      <button onClick={HandleNumber}>{isGoingOut?"Yes":"No"}</button>

      <p>Name : {details.name}</p>
      <p>Age : {details.age}</p>
      <p>Contact : {details.contact}</p>
      <p> Favorite : < img src={ details.favorite? "https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg" : "https://www.shutterstock.com/image-vector/star-vector-icon-260nw-660000226.jpg" }/>  </p>
      <button onClick={changeName}>Change Name</button>
      {console.log(isShown)}
      { isShown && <p> isShown is now true</p>}
      <button onClick={setShow}>Show</button>

      {msgs.length ? <p> you have {msgs.length} unread {msgs.length === 1 ? "message" : "messages"} </p> : <p> You Are All Caught Up!</p> }

      <forms>
        <input
          type="text"
          placeholder="First Name"
          onChange={changeName}
          name="firstName"
          value={Name.firstName}
        />
        <input 
          type="text"
          placeholder="Last Name"
          onChange={changeName}
          name="lastName"
          value={Name.lastName}
        />
        <input 
          type="email"
          placeholder="Email"
          onChange={changeName}
          name="email"
          value={Name.email}
        />
        <textarea 
          name="comments"
          onChange={changeName}
          value={Name.comments}
        />
        <button onClick={showName}>Submit</button>
        { names && <p> {Name.firstName} {Name.lastName} {Name.email} {Name.comments}</p>}
      </forms>
    </>
  )
}
