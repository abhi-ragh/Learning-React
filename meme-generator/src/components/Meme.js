import {useState, useEffect} from "react";

export default function Meme(){
    let url;
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/39t1o.jpg"
    });

    const [allMemeImages,setAllMemeImages] = useState([])

    useEffect( () => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function HandleClick(){
        url = allMemeImages[Math.floor(Math.random() * allMemeImages.length)].url;
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: url
            }
        });
    }

    function handleInput(event){
        setMeme(prevState => {
            return{
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    return(
        <div className="form">
            <div className="form--top">
            <section className="form--top-text">
                <p className="form--input-text">Top Text</p>
                <input 
                    type="text"
                    placeholder="Shut Up"
                    name="topText"
                    value={meme.topText}
                    onChange={handleInput}
                />
            </section>
            <section className="form--down-text">
                <p className="form--input-text">Down Text</p>
                <input
                    type="text"
                    placeholder="and take my money"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleInput}    
                />
            </section>
            </div>
            <button className="form--submit" onClick={HandleClick}>Get a new meme image 🖼 </button>

            <div className="meme--area">
                <h1 className="meme--text" id="topText">{meme.topText}</h1>
                <img src={meme.randomImage} className="form-meme"/>
                <h1 className="meme--text" id="bottomText">{meme.bottomText}</h1>
            </div>
        </div>
    )
}