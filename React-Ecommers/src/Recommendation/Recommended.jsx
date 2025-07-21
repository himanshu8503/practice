import Buttons from "../component/Buttons"
import "./Recommended.css"

function Recommended({handleClick}) {
  return (
    <section className="recommended-container">
        <h2 className="recommended-titel">Recommended</h2>
        <div className="recommended-btn">
            <Buttons handleClick={handleClick} title="All Product" value=""/>
            <Buttons handleClick={handleClick} title="Nike" value="Nike"/>
            <Buttons handleClick={handleClick} title="Adidas" value="Adidas"/>
            <Buttons handleClick={handleClick} title="Puma" value="Puma"/>
            <Buttons handleClick={handleClick} title="Vans" value="Vans"/>
        </div>
    </section>
  )
}

export default Recommended