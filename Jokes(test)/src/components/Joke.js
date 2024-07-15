export default function Joke(props){
    function handleClick(){
        console.log("AAAAAAAAAAAsdsdsdsdsdAAAAAAa")
    }
    return(
        <>
        {props.setup && <p style={{fontSize:"30px", fontFamily:"Bold"}}>{props.setup}</p>}
        {!props.setup && <p style={{fontSize:"30px", fontFamily:"Bold"}}>{props.punchline}</p>}
        {props.setup && <p style={{fontSize:"20px", fontFamily:"cursive"}}>{props.punchline}</p>}
        <h3>Upvotes: {props.upvotes}</h3>
        < hr />


        <img src="pfp.jpg" className="pfp" onMouseEnter={handleClick}/>
        <button onClick={handleClick}>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</button>
        </>
    )
}