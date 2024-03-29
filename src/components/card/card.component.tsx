import './card.styles.css';
import { Monster } from '../../App';

type CardProps = {
  monster: Monster
}

export const Card = ({monster}: CardProps) => {
  const {name, id, email} = monster;

  return (
    <div className="card-container">
    <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
  )
}
