const Header = ({ course }) => <h1>{course}</h1>;

const Part = (props) => (
  <p>
    {props.part} {props.exercises}
  </p>
);

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part part={part.name} exercises={part.exercises} key={part.id}></Part>
      ))}
      <Total parts={parts}></Total>
    </div>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((sum, current) => sum + current.exercises, 0);
  return <h4>total of {total} exercises</h4>;
};

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </>
  );
};

export default Course;
