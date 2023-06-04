import React, { useContext } from 'react'
import  styles  from './Header.module.css'
import { Link } from 'react-router-dom'
import { OrderContext } from '../../context/Context'
import shoppingCart from '../../img/shopping-cart.png'

const Header = () => {
	const { orderList } = useContext(OrderContext)
	const orderCount = orderList.reduce((acc, obj) => {
		return acc + obj.count
	}, 0)

	return (
		<div className={styles.navbar}>
			<div className={styles.navbar__links}>
				<div>
					<Link to='/delivery_client/' className={styles.link}>Shop</Link>
				</div>
				<div className={styles.navbar__item}>
					<Link to='/delivery_client/cart' className={styles.link}>Shopping Cart</Link>
				</div>
			</div>

			<Link to='/delivery_client/cart' className={styles.link}>
				<div className={styles.navbar__icon} >
					<img  src={shoppingCart} alt="cart" /> 
					<span>{orderCount}</span>
				</div>
			</Link>
			
		</div>
	)
}

export default Header
