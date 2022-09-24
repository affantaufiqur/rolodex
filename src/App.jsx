import { useState, useEffect } from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import './App.css'

const App = () => {
  const [searchString, setsearchString] = useState('')
  const [monster, setMonster] = useState([])
  const [filteredMonster, setFilteredMonster] = useState(monster)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonster(users))
  }, [])

  useEffect(() => {
    const newFilteredMonster = monster.filter((item) => item.name.toLowerCase().includes(searchString))
    setFilteredMonster(newFilteredMonster)
  }, [monster, searchString])

  const onSearchChange = (event) => {
    const searchStringEvent = event.target.value.toLowerCase()
    setsearchString(searchStringEvent)
  }

  return (
    <div>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search monster"
        className="monsters-search-box"
      />
      <CardList monsters={filteredMonster} />
    </div>
  )
}

export default App
