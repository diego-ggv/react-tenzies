const Die = (props) => {
  const {hold, isHeld} = props
  return (
      <div
          onClick={hold}
          className={isHeld ? 'dice dice--hold' : 'dice'}
      >
        <h3 className="dice--num">{value}</h3>
      </div>
  )
}

export default Die