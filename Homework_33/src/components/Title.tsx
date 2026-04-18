type TitleProps = {
    name: string;
    type: "normal" | "bold";
  };

function Title ({name, type}: TitleProps) {
    const className = type === "bold" ? "bold" : "normal";

    return <h1 className={className}>{name}</h1>;
}

export default Title;