import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    competingTeam,
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = details

  return (
    <div className="match-container">
      <h1 className="head">Latest Matches</h1>
      <div className="date-container">
        <div>
          <p>{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img src={competingTeamLogo} alt={`latest match${competingTeam}`} />
        <div>
          <div>
            <p>First Innings</p>
            <p>{firstInnings}</p>
          </div>
          <div>
            <p>Second Innings</p>
            <p>{secondInnings}</p>
          </div>
          <div>
            <p>Man Of The Match</p>
            <p>{manOfTheMatch}</p>
          </div>
          <p>Umpires</p>
          <p>{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
