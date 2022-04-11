import albums from "./albums";
import { Link } from 'react-router-dom';

const ByBand =()=>
{
    return (<div className="container"> 
                {albums.map(album =>
                {return(<div className="row" key={album.id}>
                            <Link to={'/band/'+album.artist} style={{textDecoration:'none'}} > <h3>{album.artist}</h3></Link> 
                        </div>)})}
            </div>)
}

export default ByBand;