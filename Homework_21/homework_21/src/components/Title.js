let Title = ({ name, type }) => {
    if (type === "bold") {
      return <strong>{name}</strong>;
    }
    if (type === "normal") {
      return <p>{name}</p>;
    }
  };
  
  export default Title;
  