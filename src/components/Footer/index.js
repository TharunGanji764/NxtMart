import {FaSquarePinterest, FaTwitter, FaInstagram} from 'react-icons/fa6'
import {FaFacebookSquare} from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <div className="footer">
    <p>
      For any queries, contact +91-9876543210 <br />
      or mail us help@nxtmart.co.in
    </p>
    <div className="social-links">
      <FaFacebookSquare size={25} />
      <FaSquarePinterest size={25} />
      <FaTwitter size={25} />
      <FaInstagram size={25} />
    </div>
    <p>Copyright © 2023 NxtMart Grocery Supplies Pvt Ltd</p>
  </div>
)
export default Footer
