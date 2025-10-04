import PropTypes from "prop-types";

const Student = ({name="guest", age=0, isStudent = false }) => {
    return (
    <div>
      <p>Name:: {name}</p>
      <p>Age:: {age}</p>
      <p>is student : {isStudent ? "yes" : "no"} </p>
    </div>
  )};

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool
};

export default Student;
