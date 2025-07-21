import Input from "../../component/Input"
import "./prize.css"

function Prize({handleSelectedchange}) {
  return (
    <section className="ml">
      <h2 className="sidebar-title prize-title">Prize</h2>
      
      <div>
        
        <label className="input-wrapper">
        <input onChange={handleSelectedchange} className="input"  type="radio" value="" name="test2"  />
        <span className="chekmark"></span>
            Any Prize
        </label>

        <Input handleSelectedchange={handleSelectedchange} type="radio" title="$0-$50" value={50} name="test2" />
        <Input handleSelectedchange={handleSelectedchange} type="radio" title="$50-$100" value={100} name="test2" />
        <Input handleSelectedchange={handleSelectedchange} type="radio" title="$100-$150" value={150} name="test2" />
        <Input handleSelectedchange={handleSelectedchange} type="radio" title="Over $150" value={200} name="test2"/>

      </div>
      
      
    </section>
  )
}

export default Prize