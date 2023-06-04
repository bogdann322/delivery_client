import React from 'react'

import style from './CartItem.module.css'
import addIcon from '../../img/plus.png'
import minusIcon from '../../img/minus.png'
import trash from '../../img/clear.png'

const CartItem = ({item, increment, decrement, remove}) => {
	return (
		<div className={style.cartItem__container}>
            <div className={style.cartItem__img}>
				<img
					src={item.image}
					alt='burger'
				/>
            </div>
			
            <div className={style.CartItem_info}>
                <span className={style.CartItem__Name}>{item.name}</span>
                <div>Price: {item.price}$</div>

				<span className={style.cartItem__c}>Count: </span>
				<img className={style.cartItem__icon} onClick={() => decrement(item._id)} src={minusIcon} alt="decrement" />
					<span className={style.cartItem__count}>{item.count}</span>
				<img className={style.cartItem__icon} onClick={() => increment(item._id)} src={addIcon} alt="increment" />
				
            </div>
			<img className={style.cartItem__icon} onClick={()=> remove(item._id)} src={trash} alt="delete" />
		</div>
	)
}

export default CartItem
