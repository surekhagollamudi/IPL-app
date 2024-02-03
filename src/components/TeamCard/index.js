import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {name, teamImageUrl, id} = teamData

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="list">
        <img alt={name} src={teamImageUrl} className="imageUrl" />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
