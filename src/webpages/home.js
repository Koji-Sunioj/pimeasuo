import { Link } from "react-router-dom";

const Home = ()=>{

    return (<div className="container">
                <h3>Welcome to the metal store. You can use the search tool or index by <Link to={'/band/'}>band name  </Link></h3>
            </div>)}



export default Home;