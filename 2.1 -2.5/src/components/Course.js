import Total from './Total'
import Content from './Content'
import Header from './Header'

const Course = ({ courses }) => {
  const information = courses.map((course) =>
    <div key={course.id}>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
  return information
};

export default Course