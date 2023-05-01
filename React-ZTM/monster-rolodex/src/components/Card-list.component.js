import React, { Component } from "react";
import "./Card-list.style.css";

export default class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return (
            <div className="card-container" key={monster.id}>
              <img
                alt="Monster Image"
                src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
              />
              <h2>{monster.name}</h2>
              <p>{monster.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
