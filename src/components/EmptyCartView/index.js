import {Link} from 'react-router-dom'

import './index.css'

const EmptyCartView = () => (
  <div className="cart-empty-view-container">
    <img
      src="https://res.cloudinary.com/dezjxjqqp/image/upload/v1709635563/cart_c885f9.jpg"
      className="cart-empty-img"
      alt="empty cart"
    />
    <h1 className="cart-empty-heading">Your cart is empty</h1>
    <Link to="/">
      <button type="button" className="shop-now-btn">
        Shop Now
      </button>
    </Link>
  </div>
)

export default EmptyCartView
