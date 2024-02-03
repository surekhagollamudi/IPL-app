import './index.css'

const MatchCard = props => {
  const {match} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = match

  return (
    <li>
      <img src={competingTeamLogo} alt={competingTeam} />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
