import {Link, withRouter} from 'react-router-dom'
import {FiHome, FiShoppingCart} from 'react-icons/fi'
import Cookies from 'js-cookie'
import {TbLogout2} from 'react-icons/tb'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dezjxjqqp/image/upload/v1709916866/Logo_n8bguh.png"
          alt="website logo"
          className="website-logo"
          width="80"
        />
      </Link>
      <div className="nav-links">
        <Link to="/" className="Links">
          <FiHome className="logo" size={18} /> Home
        </Link>
        <Link to="/cart" className="Links">
          <FiShoppingCart className="logo" size={18} />
          <button type="button" className="cart-btn">
            Cart
          </button>
        </Link>
        <button className="logout-btn" type="button" onClick={onClickLogout}>
          <TbLogout2 size={18} />
          Logout
        </button>
      </div>
    </div>
  )
}
export default withRouter(Header)
