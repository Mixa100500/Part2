import Part from './Part'
const Content = (props) => {
  const parts = props.course.parts;
  const result = parts.map(
    (part) => <Part
      key={part.id}
      part={part.name}
      exercise={part.exercises}
    />
  );

  return (
    <div>
      {result}
    </div>
  )
}

export default Content