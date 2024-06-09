import React from 'react'
import Styles from "../CardsView/CardsView.module.scss"
import { products } from '../products'

 const CardsView = (props) => {



 const arr = products.map(item =>  
 <div className={Styles["container"]} key={`${item.name}_${item.color}`}>
 <h2 className={Styles["name"]}>{item.name}</h2>
 <span className={Styles["color"]}>{item.color}</span>
 <img className={Styles["img_card"]}  src={item.img} alt="snikers" />
 <div className={Styles["price_button"]}>
   <div className={Styles["price"]}>${item.price}</div>
   <button className={Styles["button_card"]}>ADD TO CART</button>
 </div>
 </div>)

return (
  <>
 <div className={Styles["cards_container"]}>{arr}</div>
  </>
)

}

export default CardsView
