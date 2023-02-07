const Notification = ({ message, isCorrect}) => {
  if (message == null) {
    return null;
  }

  if (isCorrect) {
    return (
      <div className="added">
        {message}
      </div>
    )
  }

  return (
    <div className="incorrect">
      {message}
    </div>
  )
}
export default Notification