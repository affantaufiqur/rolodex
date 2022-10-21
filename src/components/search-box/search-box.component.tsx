import { ChangeEvent } from 'react'
import './search-box.style.css'

type SearchBoxPropsType = {
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  className: string
}

const SearchBox = ({ onChangeHandler, placeholder, className }: SearchBoxPropsType) => (
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
