import './card.styles.css';

type Props = {
  monster: {name: string, id: number, email: string};
}

export const Card = ({monster}: Props) => {
  const {name, id, email} = monster;

  return (
    <div className="card-container">
    <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
  )
}
