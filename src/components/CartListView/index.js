import {Component} from 'react'
import CartItem from '../CartItem'
import Payment from '../Payment'
import CartContext from '../../context/CartContext'
import './index.css'

class CartListView extends Component {
  state = {showPaymentSuccess: false}

  renderCartListView = () => (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        const {showPaymentSuccess} = this.state
        let total = 0
        cartList.forEach(eachCartItem => {
          total += eachCartItem.price.replace('₹', '') * eachCartItem.quantity
        })
        const onClickCheckout = () => {
          this.setState({showPaymentSuccess: true})
        }
        return (
          <>
            {!showPaymentSuccess && (
              <ul className="cart-list">
                {cartList.map(eachCartItem => (
                  <CartItem
                    key={eachCartItem.id}
                    cartItemDetails={eachCartItem}
                  />
                ))}
                <>
                  <div className="cart-summary-container">
                    <h1 className="order-total-value">
                      Total ({cartList.length} Items):
                      <p data-testid="total-price">{total}</p>
                    </h1>
                    <button
                      type="button"
                      className="checkout-button "
                      onClick={onClickCheckout}
                    >
                      Checkout
                    </button>
                  </div>
                </>
              </ul>
            )}
            {showPaymentSuccess && <Payment />}
          </>
        )
      }}
    </CartContext.Consumer>
  )

  render() {
    return <>{this.renderCartListView()}</>
  }
}

export default CartListView
