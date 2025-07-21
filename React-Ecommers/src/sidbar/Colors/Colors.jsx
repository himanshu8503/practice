import Input from "../../component/Input"
import "./Colors.css"

function Colors({handleSelectedchange}) {
  return (
    <section>
      <h2 className="sidebar-title color-title">Colors</h2>
      <div>
        
        <label className="input-wrapper">
        <input onChange={handleSelectedchange} className="input"  type="radio" value="" name="test3"  />
        <span className="chekmark all"></span>
            All
        </label>

        <Input  handleSelectedchange={handleSelectedchange} type="radio" title="Black" value="black" name="test3" color="black" />
        <Input  handleSelectedchange={handleSelectedchange} type="radio" title="Blue" value="blue" name="test3" color="blue" />
        <Input  handleSelectedchange={handleSelectedchange} type="radio" title="Red" value="red" name="test3" color="red"/>
        <Input  handleSelectedchange={handleSelectedchange} type="radio" title="Green" value="green" name="test3" color="green"/>

        <label className="input-wrapper">
        <input onChange={handleSelectedchange} className="input"  type="radio" value="white" name="test3"  />
        <span className="chekmark white" style={{background:"white",border:"2px solid black"}}></span>
            White
        </label>
      </div>
      
      
    </section>
  )
}

export default Colors