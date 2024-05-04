import React from 'react'
import "./Popular.css"
import data_product from "../assets/data"
import Item from '../Items/Item.jsx'

const Popular = () => {
  return (
    <div className='popular'>

      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item , i) => {
        return <Item key={i} image={item.image} id={item.name} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
