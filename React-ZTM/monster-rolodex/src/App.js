import React from "react";
import "./App.css";
import CardList from "./components/Card-list.component";
import SearchBox from "./components/Search-box.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  inputSearchHandler = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <>
        <h1 className="app-title">Monsters Robolex</h1>
        <SearchBox onChangeHandler={this.inputSearchHandler} />
        <CardList monsters={filteredMonsters} />
      </>
    );
  }
}
export default App;
