
function Input({title,type,color,value,name,handleSelectedchange}) {
  return (
    <label className="input-wrapper">
        <input onChange={handleSelectedchange} className="input"  type={type} value={value} name={name}  />
        <span className="chekmark" style={{background: color}}></span>
        {title}
    </label>
    
  )
}

export default Input