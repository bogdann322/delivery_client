import React from 'react'

import style from './ShopsList.module.css'

const ShopsList = ({shops, selectedShop, setSelectedShop, orderList}) => {

	return (
		<div className={style.shoplist__wrapp}>
			<h3>Shops:</h3>
			{
				shops.map( shop => (
					<button key={shop} disabled={orderList.length !== 0}  onClick={()=> setSelectedShop(shop.toLowerCase())} className={ selectedShop === shop.toLowerCase() ? `${style.shopList_item} ${style.shopList_item_selected}` : `${style.shopList_item}`}>{shop}</button>
				))
			}
		</div>
	)
}

export default ShopsList
