import { useState } from 'react'
import Nav from './nav/nav'
import "./style.css"
import Card from './component/Card'
import Sidebar from './sidbar/sidebar'
import Recommended from './Recommendation/Recommended'
import Product from './Product/Product'
import data from './Data/data'

function App() {

  const products = data;

  const [query,setquery] = useState("");

  const [selected,setSelected] = useState(null)


  const handlechange = (e) => {
    setquery(e.target.value);
  }

  const handleSelectedchange = (e) => {
    setSelected(e.target.value);
  }

  const handleClick = (e) => {
    setSelected(e.target.value)
  }

  const InputfillterItems = products.filter((product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1) 
  
  const fillterProducts = (query,selected,products) => {

    let fillterProducts = products

    if(query)
    {
      fillterProducts = InputfillterItems;
    }

    if(selected)
    {
      fillterProducts = products.filter(({category,color,company,newPrice}) => (
        category === selected || company === selected || newPrice === selected || color === selected
      ))
    }

    return fillterProducts.map(({img,title,reviews,star,prevPrice,newPrice}) => (
            <Card
              key={Math.random()}
              img={img}
              title={title}
              reviews={reviews}
              star = {star}
              prevprice = {prevPrice}
              newprice = {newPrice}
            />
          ))


  }

  const result = fillterProducts(query,selected,products);

  return (
    <div>
      <Sidebar handleSelectedchange={handleSelectedchange}/>
      <Nav handlechange={handlechange} value={query}/>
      <Recommended handleClick={handleClick}/>
      <Product result={result}/>
    </div>
  )
}

export default App
