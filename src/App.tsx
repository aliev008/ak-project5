import { Component, Key } from "react";
import "./App.css";

type MyState = {
  monsters: any[];
  searchInput: string;
};

class App extends Component<any, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      monsters: [],
      searchInput: "",
    };
  }

  componentDidMount(): void {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => this.setState({ monsters: users }));
  }

  filterMonsters(e: any): void {
    const value = (e.target as HTMLInputElement).value;
    this.setState({ searchInput: value });
  }

  render() {
    const { monsters, searchInput } = this.state;
    const regex = new RegExp(searchInput, "gi");
    const currentMonstersList = monsters.slice();
    const newMonstersList = currentMonstersList.filter((monster) => {
      return regex.test(monster.name);
    });
    return (
      <div className="App">
        <input
          type="search"
          className="search-box"
          placeholder="search monsters"
          onChange={(e) => this.filterMonsters(e)}
        />
        {(searchInput !== "" ? newMonstersList : monsters).map(
          (monster: { id: number; name: string }) => (
            <h1 key={monster.id}>{monster.name}</h1>
          )
        )}
      </div>
    );
  }
}

export default App;
