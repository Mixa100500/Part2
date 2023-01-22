import Name from "./Name"

const Persons = (props) => {
  return (
    <ul>
      {props.information.map(
        person => {
          return <Name 
          name={person.name} 
          number={person.number}
          key={person.id}/>
        }
      )}
    </ul>
  )
}
export default Persons