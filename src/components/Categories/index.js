import './index.css'

const Categories = props => {
  const {categoryDetails, updateActiveCategory, isActive} = props
  const activeClass = isActive ? 'category-btn active' : 'category-btn'
  const {name} = categoryDetails
  const onActiveCategory = () => {
    updateActiveCategory(name)
  }
  return (
    <div className="categories-btns">
      <button type="button" className={activeClass} onClick={onActiveCategory}>
        {name}
      </button>
    </div>
  )
}
export default Categories
