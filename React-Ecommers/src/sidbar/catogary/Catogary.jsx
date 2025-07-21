import Input from "../../component/Input";

import "./Catogary.css";

function Catogary({handleSelectedchange}) {
  return (
    <section>
      <h2 className="sidebar-title">Category</h2>
      <div>
        
        <label className="input-wrapper">
        <input onChange={handleSelectedchange}  className="input"  type="radio" value="" name="test"  />
        <span className="chekmark"></span>
            All
        </label>

        <Input handleSelectedchange={handleSelectedchange} type="radio" title="Sneakers" value="sneakers" name="test" />
        <Input handleSelectedchange={handleSelectedchange} type="radio" title="Flats" value="flats" name="test" />
        <Input handleSelectedchange={handleSelectedchange} type="radio" title="Sandals" value="sandals" name="test" />
        <Input handleSelectedchange={handleSelectedchange} type="radio" title="Heels" value="heels" name="test" />
      </div>
      
      
    </section>
  );
}

export default Catogary;
