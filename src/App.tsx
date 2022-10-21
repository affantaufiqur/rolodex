import { useState, useEffect, ChangeEvent } from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import { getData } from './utils/data.utils'
import './App.css'

export type Monster = {
  id: string
  name: string
  email: string
}

const App = () => {
  const [searchString, setsearchString] = useState('')
  const [monster, setMonster] = useState<Monster[]>([])
  const [filteredMonster, setFilteredMonster] = useState(monster)

  useEffect(() => {
    const fetchAllUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users')
      setMonster(users)
    }
    fetchAllUsers()
  }, [])

  useEffect(() => {
    const newFilteredMonster = monster.filter((item) => item.name.toLowerCase().includes(searchString))
    setFilteredMonster(newFilteredMonster)
  }, [monster, searchString])

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
