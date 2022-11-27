import { Card } from ".././card/card.component";
import "./card-list.styles.css";
type CardListProps = {
  monsters: any[];
};

export const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
};
