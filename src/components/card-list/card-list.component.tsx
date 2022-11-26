import React, { Component } from "react";
type CardListProps = {
  monsters: any[];
};
export class CardList extends Component<CardListProps, {}> {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monster: { id: number; name: string }) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
