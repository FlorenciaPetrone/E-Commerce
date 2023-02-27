import React, { useState } from 'react'
import './index.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600"
  ]
  return (
    <div className='product'>
      <div className="left">
        <div className="images"> 
          <img src={images[0]} alt="" onClick={() => setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={() => setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus placerat leo ac gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vel nunc porttitor, eleifend nisi ac, venenatis mauris. Morbi vitae tortor condimentum, scelerisque neque a, fermentum ipsum.
        </p>
        <div className="quantity">
          <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev-1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity(prev => prev+1)}>+</button>
        </div>
        <button className='add'>
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: Shirt</span>
          <span>Tag: Shirt, Men, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product