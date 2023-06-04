import './App.css'
import Header from './Components/Header/Header'
import CartPage from './pages/CartPage/CartPage'
import ShopPage from './pages/ShopPage/ShopPage'
import NotFound from './pages/NotFound'

import { OrderContext } from './context/Context'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ShopContext } from './context/ShopContext'

function App() {
	const [orderList, setOrderList] = useState([])
	const [selectedShop, setSelectedShop] = useState('mcdonalds')

	return (
		<OrderContext.Provider value={{ orderList, setOrderList }}>
			<ShopContext.Provider value={{ selectedShop, setSelectedShop }}>
				<div className='App'>
					<Header />
					<Routes>
						<Route path='/delivery_client/' element={<ShopPage />} />
						<Route path='/delivery_client/cart' element={<CartPage />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</ShopContext.Provider>
		</OrderContext.Provider>
	)
}

export default App
