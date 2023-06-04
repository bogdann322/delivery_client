import React from 'react'

import style from './EpmtyCart.module.css'

const EmptyCart = () => {
  return (
    <div className={style.emptyCart}>
      <h3>Your cart is empty 😕 </h3>
      <img src="https://www.vhv.rs/dpng/d/521-5212497_empty-cart-hd-png-download.png" alt="empty" />
    </div>
  )
}

export default EmptyCart