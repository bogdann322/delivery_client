import React, { useState} from 'react'

import style from './UserFrom.module.css'
import axios from 'axios'

const UserForm = ({  totalPrice, orderList, setOrderList }) => {

	const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '', address: ''})

	const handleChange = (e) => {
		setUserInfo({
			...userInfo, 
			[e.target.name] : e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const finalOrder = {
			...userInfo,
			order: orderList
		}
		axios.post('http://localhost:8000/order', finalOrder)
		setOrderList([])
		setUserInfo({ name: '', email: '', phone: '', address: ''})
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className={style.form}>
				<div>
					<div>
						<label htmlFor='name'>Name: </label>
					</div>
					<input
						required
						className={style.input}
						onChange={handleChange}
						type='text'
						name='name'
						value={userInfo.name}
						placeholder='Enter your name'
					/>
				</div>
				<div>
					<div>
						<label htmlFor='email'>Email: </label>
					</div>
					<input
						required
						className={style.input}
						onChange={handleChange}
						value={userInfo.email}
						type='email'
						name='email'
						placeholder='Enter your email'
					/>
				</div>
				<div>
					<div>
						<label htmlFor='phone'>Phone: </label>
					</div>
					<input
						required
						className={style.input}
						onChange={handleChange}
						value={userInfo.phone}
						type='tel'
						name='phone'
						placeholder='Enter your phone number'
					/>
				</div>
				<div>
					<div>
						<label htmlFor='address'>Address: </label>
					</div>
					<input
						required
						className={style.input}
						onChange={handleChange}
						value={userInfo.address}
						type='text'
						name='address'
						placeholder='Enter your address'
					/>
				</div>
			</div>
			<div className={style.form__footer}>
				<input type='submit' value='Submit' />
				<span>Total price: {totalPrice}$</span>
			</div>
			
		</form>
	)
}

export default UserForm
