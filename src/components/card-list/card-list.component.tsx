import './card-list.style.css'
import Card from '../card/card.component'
import { Monster } from '../../App'

type CardListProps = {
  monsters: Monster[]
}

const CardList = ({ monsters }: CardListProps) => (
  <div className="card-list">
    {monsters.map((item) => (
      <Card item={item} />
    ))}
  </div>
)

export default CardList
