import React, { useContext, useEffect, useState } from 'react'
import ShopsList from '../../Components/ShopsList/ShopsList'
import styles from './ShopPage.module.css'
import ProductList from '../../Components/ProductList/ProductList'
import axios from 'axios'
import { OrderContext } from '../../context/Context'
import { ShopContext } from '../../context/ShopContext'

const ShopPage = () => {
  	const shops = ["Mcdonalds",'KFC','Coffee Boroda','Grill Pub',]
	const [products, setProduct] = useState([])
	
	const { orderList } = useContext(OrderContext)
	const { selectedShop, setSelectedShop} = useContext(ShopContext)

	useEffect(() => {
    axios.get(`https://powerful-carnelian-monday.glitch.me/food/?shop=${selectedShop}`)
      .then(res => {
        setProduct(res.data);
      })
	}, [selectedShop])

	return (
		<div className={styles.shops__wrapp}>
			<ShopsList shops={shops} selectedShop={selectedShop} setSelectedShop={setSelectedShop} orderList={orderList}/>
			<div className={styles.products_list}>
				{
          products.map( product => (
            <ProductList product = {product} key={product._id} />
          ))
        }
			</div>
		</div>
	)
}

export default ShopPage
