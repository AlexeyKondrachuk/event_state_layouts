import React from 'react'
import Styles from '../ListView/ListView.module.scss'
import { products } from '../products'

export default function ListView(props) {

    const arr = products.map(item => 
    <div className={Styles["container"]} key={`${item.name}_${item.color}`}>
    <img className={Styles["img_list"]}  src={item.img} alt="snikers" />
    <h3 className={Styles["name"]}>{item.name}</h3>
    <span className={Styles["color"]}>{item.color}</span>
    <div className={Styles["price_button"]}>
      <div className={Styles["price"]}>${item.price}</div>
      <button className={Styles["button"]}>ADD TO CART</button>
    </div>
    </div>
    )
    
  return (
    <>
   <div className={Styles["list_container"]}>{arr}</div>
    </>
  )
}

