import React, { useContext } from 'react'

import style from './ProductList.module.css'
import { OrderContext } from '../../context/Context'

const ProductList = ({product}) => {

  const { orderList, setOrderList } = useContext(OrderContext)

  const handleAdd = (product) => {
    const existingObject = orderList.find(obj => obj._id === product._id);
    if (existingObject) {
      existingObject.count += 1;
      setOrderList([...orderList]);
    } else {
      setOrderList([...orderList, { ...product, count: 1 }]);
    }
  }
  
  return (
    <div className={style.product__wrapp} key={product.id}>
        <img className={style.product_image} src={product.image} alt="food" />
        <div className={style.product__desc}>
            <div>{product.name}</div>
            <div>{product.price}$</div>
        </div>
        <button onClick={() => handleAdd(product)}  className={style.btn}>Add to cart</button>
    </div>
  )
}

export default ProductList