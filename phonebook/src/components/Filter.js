const Filter = (props) => {
  return(
    <div>
      number:
      <input
        onChange={props.handleSearchChandge}
        value={props.newNumber}
      />
    </div>
  )
}
export default Filter