import MemesData from "../MemesData"
import {useState} from "react";

export default function Meme(){
    let url;
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/39t1o.jpg"
    });

    const [allMemeImages,setAllMemeImages] = useState(MemesData)

    function HandleClick(){
        url = allMemeImages[Math.floor(Math.random() * allMemeImages.length)].url;
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: url
            }
        });
    }
    return(
        <div className="form">
            <div className="form--top">
            <section className="form--top-text">
                <p className="form--input-text">Top Text</p>
                <input placeholder="Shut Up"/>
            </section>
            <section className="form--down-text">
                <p className="form--input-text">Down Text</p>
                <input placeholder="and take my money"/>
            </section>
            </div>
            <button className="form--submit" onClick={HandleClick}>Get a new meme image 🖼 </button>
            <img src={meme.randomImage} className="form-meme"/>
        </div>
    )
}