import { Link } from "react-router-dom";
let Error=()=>{
    return(
        <>
        <h1>404</h1>
        <p>Not found</p>
        <Link to="/">Back to Home page</Link>
        </>
    )
};
export default Error