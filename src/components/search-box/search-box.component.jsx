import './search-box.style.css'

const SearchBox = ({ onChangeHandler, placeholder, className }) => (
  <div>
    <input
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
      className={`search-box ${className}`}
    />
  </div>
)

export default SearchBox
