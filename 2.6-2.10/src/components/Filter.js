const Filter = (props) => {
  return(
    <div>
      number:
      <input
        onChange={props.handleNumberChange}
        value={props.newNumber}
      />
    </div>
  )
}
export default Filter