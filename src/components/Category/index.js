import Categories from '../Categories'
import './index.css'

const Category = props => {
  const {details, updateActiveCategory, activeCategory} = props
  return (
    <div className="categories">
      {details.map(eachItem => (
        <Categories
          key={eachItem.name}
          categoryDetails={eachItem}
          updateActiveCategory={updateActiveCategory}
          isActive={eachItem.name === activeCategory}
        />
      ))}
    </div>
  )
}

export default Category
