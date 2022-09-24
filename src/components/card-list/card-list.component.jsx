import './card-list.style.css'
import Card from '../card/card.component'

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((item) => (
      <Card item={item} />
    ))}
  </div>
)

export default CardList
