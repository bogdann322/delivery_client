import React from 'react'

import style from './EpmtyCart.module.css'

const EmptyCart = () => {
  return (
    <div className={style.emptyCart}>
      <h3>Your cart is empty 😕 </h3>
      <img src="https://www.seekpng.com/png/detail/117-1170538_404-your-cart-is-empty.png" alt="empty" />
    </div>
  )
}

export default EmptyCart