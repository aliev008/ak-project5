import { useState, useEffect } from "react";
import { CardList, SearchBox } from "./components";
import "./App.css";

export const App = () => {
  const [searchFieldValue, setSearchFieldValue] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonstersList, setFilteredMonstersList] = useState([]);

  const searchFieldHandler = (event: any) => {
    const value = (event.target as HTMLInputElement).value;
    setSearchFieldValue(value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const regex = new RegExp(searchFieldValue, "gi");
    const newMonstersList = monsters.filter((monster: any) => {
      return regex.test(monster.name);
    });
    setFilteredMonstersList(newMonstersList);
  }, [searchFieldValue, monsters]);

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
  );
};
