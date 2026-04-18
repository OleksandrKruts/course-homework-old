import PropTypes from "prop-types";



let Title = ({ name, type }) => {
  if (type === "bold") {
    return <strong>{name}</strong>;
  }
  if (type === "normal") {
    return <p>{name}</p>;
  }
};

Title.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
};
export default Title;
