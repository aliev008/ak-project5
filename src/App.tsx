import { useState, useEffect, ChangeEvent } from 'react'
import { CardList, SearchBox } from './components'
import { getData } from './utils/data.utils'
import './App.css'

export type Monster = {
  name: string
  email: string
  id: number
}

export const App = () => {
  const [searchFieldValue, setSearchFieldValue] = useState('')
  const [monsters, setMonsters] = useState<Monster[]>([])
  const [filteredMonstersList, setFilteredMonstersList] = useState<Monster[]>([])

  const searchFieldHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = (event.target as HTMLInputElement).value
    setSearchFieldValue(value)
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        'https://jsonplaceholder.typicode.com/users'
      )
      setMonsters(users)
    }

    fetchUsers();
  }, [])

  useEffect(() => {
    const regex = new RegExp(searchFieldValue, 'gi')
    const newMonstersList = monsters.filter((monster: any) => {
      return regex.test(monster.name)
    })
    setFilteredMonstersList(newMonstersList)
  }, [searchFieldValue, monsters])

  return (
    <div className="App">
      <h1 className="title">Monsters List</h1>
      <SearchBox
        placeholder="search monsters"
        className="search-box"
        onChangeHandler={searchFieldHandler}
      />
      <CardList monsters={filteredMonstersList} />
    </div>
  )
}
