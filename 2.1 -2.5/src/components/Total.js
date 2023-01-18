const Total = (props) => {
  const parts = props.course.parts;

  const sum = parts.reduce(
    (a, b) => {
      return a + b.exercises;
    }, 
    0
  );

  return (
    <p>
      total of exercises {sum}
    </p>
  )
}
export default Total;