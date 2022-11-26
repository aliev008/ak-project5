import { Component, Key } from "react";
import "./App.css";

type MyState = {
  monsters: [];
}

class App extends Component<any, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      monsters: [],
    };
    console.log(`constructor`);
  }

  componentDidMount(): void {
    console.log(`componentDidMount`);
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((resp) => resp.json())
    .then((users) => this.setState({monsters: users}, () => console.log(users)));
  }

  render() {
    console.log(`render`);
    const {monsters} = this.state;
    return (
      <div className="App">
        <input />
        {monsters.map((monster: {id: number, name: string}) => <h1 key={monster.id}>{monster.name}</h1>)}
      </div>
    );
  }
}

export default App;
