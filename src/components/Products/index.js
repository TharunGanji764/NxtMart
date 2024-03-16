import ProductCard from '../ProductCard'
import './index.css'

const Products = props => {
  const {productDetails} = props
  const {name, products} = productDetails
  return (
    <>
      <h1 className="category-name">{name}</h1>
      <ul className="products-list">
        {products.map(eachProduct => (
          <ProductCard key={eachProduct.id} details={eachProduct} />
        ))}
      </ul>
    </>
  )
}
export default Products
