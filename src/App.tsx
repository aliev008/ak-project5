import { Component } from "react";
import "./App.css";

type MyState = {
  monsters: any[];
  searchFieldValue: string;
};

class App extends Component<any, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      monsters: [],
      searchFieldValue: "",
    };
    this.searchFieldHandler = this.searchFieldHandler.bind(this);
  }

  componentDidMount(): void {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => this.setState({ monsters: users }));
  }

  searchFieldHandler(e: any): void {
    const value = (e.target as HTMLInputElement).value;
    console.log({ value, this: this });
    this.setState({ searchFieldValue: value });
  }

  render() {
    const { monsters, searchFieldValue } = this.state;
    const { searchFieldHandler } = this;
    const regex = new RegExp(searchFieldValue, "gi");
    const newMonstersList = monsters.filter((monster) => {
      return regex.test(monster.name);
    });
    return (
      <div className="App">
        <input
          type="search"
          className="search-box"
          placeholder="search monsters"
          onChange={searchFieldHandler}
        />
        {newMonstersList.map((monster: { id: number; name: string }) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
