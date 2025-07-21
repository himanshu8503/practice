import Catogary from "./catogary/Catogary"
import Colors from "./Colors/Colors"
import Prize from "./prize/Prize"
import "./sidebar.css"

function Sidebar({handleSelectedchange}) {
  return (
    <>
    <section className="sidebar">
        <div className="logo-wrapper">
            <h1>🛒</h1>
        </div>

        <Catogary handleSelectedchange={handleSelectedchange}/>
        <Prize handleSelectedchange={handleSelectedchange}/>
        <Colors handleSelectedchange={handleSelectedchange}/>
    </section>
    </>
  )
}

export default Sidebar