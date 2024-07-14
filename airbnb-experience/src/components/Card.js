export default function Card(props){
    return(
        <div className="card">
            {props.openspots == 0 && <div className="badge"> <h3> SOLD OUT </h3> </div>}
            <img src={props.img} id="cardpic"/>
            <div className="container">
                <img src="/images/star.png" id="star"/>
                <p id= "rating">{props.rating}</p>
                <p id="review">({props.reviewCount})</p>
            </div>
            <p id="desc">{props.title}</p>
            <p id="price"> <b>From ${props.price}</b> / person</p>
        </div>
    )
}