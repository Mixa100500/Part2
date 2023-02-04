const Name = (props) => {
  return (
  <li>
    {`${props.name} ${props.number}`}
    <button 
      onClick={() => props.deletePersone(props.id)}>
      delete
    </button>
  </li>)
}
export default Name