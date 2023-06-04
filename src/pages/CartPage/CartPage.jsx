import React, { useContext } from 'react'

import { OrderContext } from '../../context/Context'
import style from './CartPage.module.css'
import UserForm from '../../Components/UserForm/UserForm'
import CartItem from '../../Components/CartItem/CartItem'
import EmptyCart from '../EmptyCart/EmptyCart'

const CartPage = () => {
	const { orderList, setOrderList } = useContext(OrderContext)
	
	const totalPrice = orderList.reduce((acc, obj) => {
		return acc + obj.price * obj.count
	}, 0)

	const increment = (id) => {
		setOrderList((prevItems) => {
			const updatedItems = prevItems.map((item) => {
			  if (item._id === id) {
				return { ...item, count: item.count + 1 };
			  }
			  return item;
			});
			return updatedItems;
		  })
	}
	const decrement = (id) => {
		setOrderList((prevItems) => {
			const updatedItems = prevItems.map((item) => {
			  if (item._id === id && item.count > 1) {
				return { ...item, count: item.count - 1 };
			  }
			  return item;
			});
			return updatedItems;
		  })
	}
	const remove = (id) => {
		setOrderList( prevItems => prevItems.filter( item => item._id !== id))
	}	

	return (
		<div className={style.cartpage_wrapp}>
			<div className={style.cartPage__main}>
				<UserForm totalPrice={totalPrice} orderList={orderList} setOrderList={setOrderList} />
				{
					orderList.length ? 
					(<div className={style.cartPage__cartItems}>
						{orderList.map((item) => (
							<CartItem
								item={item}
								key={item._id}
								increment={increment}
								decrement={decrement}
								remove={remove}
							/>
						))}
					</div>)
					: <EmptyCart/>}
			</div>
		</div>
	)
}

export default CartPage
