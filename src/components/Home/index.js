import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Products from '../Products'
import Category from '../Category'
import Footer from '../Footer'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    productsList: [],
    apiStatus: apiStatusConstants.initial,
    activeCategory: '',
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://run.mocky.io/v3/947e05e1-cd6a-4af9-93e7-0727fba9fec4'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.categories.map(each => ({
        name: each.name,
        products: each.products,
      }))
      this.setState({
        productsList: updatedData,
        apiStatus: apiStatusConstants.success,
        activeCategory: updatedData[0].name,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  updateActiveCategory = name => {
    this.setState({activeCategory: name})
  }

  getFilteredData = () => {
    const {productsList} = this.state
    const {activeCategory} = this.state
    const filteredData = productsList.filter(
      each => each.name === activeCategory,
    )
    return filteredData
  }

  renderLoadingView = () => (
    <div className="products-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  onClickRetry = () => {
    this.getProducts()
  }

  renderFailureView = () => (
    <div className="failure-container">
      <img
        src="https://res.cloudinary.com/dezjxjqqp/image/upload/v1709642523/fail_nzisno.png"
        alt="failure view"
        data-testid="failure view"
      />
      <h1>Oops! Something went wrong</h1>
      <p>We are having Some Trouble.</p>
      <button className="btn" type="button" onClick={this.onClickRetry}>
        Retry
      </button>
    </div>
  )

  renderProductsListView = () => {
    const data = this.getFilteredData()
    return (
      <div className="products-container">
        {data.map(eachItem => (
          <Products key={eachItem.name} productDetails={eachItem} />
        ))}
      </div>
    )
  }

  renderApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductsListView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {productsList, activeCategory} = this.state
    return (
      <>
        <Header />
        <div className="home-container">
          <Category
            details={productsList}
            updateActiveCategory={this.updateActiveCategory}
            activeCategory={activeCategory}
          />
          {this.renderApiStatus()}
        </div>
        <Footer />
      </>
    )
  }
}

export default Home
