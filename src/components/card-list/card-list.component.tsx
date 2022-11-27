import React, { Component } from "react";
import Card from ".././card/card.component";
import "./card-list.styles.css";
type CardListProps = {
  monsters: any[];
};
export class CardList extends Component<CardListProps, {}> {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster: { id: number; name: string; email: string}) => {
          return <Card monster={monster} key={monster.id}/>;
        })}
      </div>
    );
  }
}

export default CardList;
