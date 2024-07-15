export default function Meme(){
    return(
        <form>
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
            <button className="form--submit">Get a new meme image 🖼 </button>
        </form>
    )
}