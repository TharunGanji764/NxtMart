import {Component} from 'react'
import './index.css'
import CartContext from '../../context/CartContext'

class ProductCard extends Component {
  state = {quantity: 0}

  renderProductCard = () => (
    <CartContext.Consumer>
      {value => {
        const {quantity} = this.state
        const {details} = this.props
        const {id, name, weight, price, image} = details
        const {
          incrementCartItemQuantity,
          decrementCartItemQuantity,
          addCartItem,
        } = value
        const onClickAdd = () => {
          this.setState(
            prevState => ({quantity: prevState.quantity + 1}),
            () => {
              addCartItem({...details, quantity: quantity + 1})
            },
          )
        }
        const onDecrementQuantity = () => {
          if (quantity >= 1) {
            this.setState(prevState => ({quantity: prevState.quantity - 1}))
            decrementCartItemQuantity(id)
          }
        }

        const onIncrementQuantity = () => {
          this.setState(prevState => ({quantity: prevState.quantity + 1}))
          incrementCartItemQuantity(id)
        }
        return (
          <li className="product-card" data-testid="product">
            <img src={image} alt={name} className="image" />
            <div className="product-details">
              <div className="info">
                <p className="product-name">{name}</p>
                <p className="product-weight">{weight}</p>
                <p className="product-price">{price}</p>
              </div>
              {quantity > 0 ? (
                <div className="controls">
                  <button
                    type="button"
                    className="control-btn"
                    onClick={onDecrementQuantity}
                    data-testid="decrement-count"
                  >
                    -
                  </button>
                  <p className="quantity" data-testid="active-count">
                    {quantity}
                  </p>
                  <button
                    type="button"
                    className="control-btn"
                    onClick={onIncrementQuantity}
                    data-testid="increment-count"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="btn"
                  onClick={onClickAdd}
                  data-testid="add-button"
                >
                  Add
                </button>
              )}
            </div>
          </li>
        )
      }}
    </CartContext.Consumer>
  )

  render() {
    return <>{this.renderProductCard()}</>
  }
}
export default ProductCard
