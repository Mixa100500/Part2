const PersoneForm = (props) => {
  return(
    <form>
    <div>
      <div>
        name:
        <input
          onChange={props.handleNameChange}
          value={props.newName}/>
      </div>
      <div>
        number:
        <input
          onChange={props.handleNumberChange}
          value={props.newNumber}
           />
      </div>
    </div>
    <div>
      <button type="submit" onClick={props.addPerson}>add</button>
    </div>
  </form>
  )
}

export default PersoneForm;