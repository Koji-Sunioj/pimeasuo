import albums from "./albums";
import {useParams} from "react-router-dom";
import {titleCase} from './functions';

const BandView = ({data}) =>{
    const {bandname} = useParams()
    const filtered = albums.filter((album) =>{return album.artist.includes(bandname)})
    return (<div className="container"> 
                <h1 style={{textAlign:'center'}}>{bandname}</h1>
                    {filtered.map(album =>{
                        const fixed = titleCase(album.genre)

                        return(<div className="row justify-content-center" key={album.id}  >
                                    <div className="col-8 col-lg-5"style={{border:'1px white solid',borderRadius:.5,padding:'20px'}} >
                                        <h3>{album.title}</h3>
                                        <ol>{album.songs.map((song,index) =>{
                                                return (<li key={index}>{song}</li>)
                                            })}
                                        </ol>
                                        <p>Genre: {fixed}</p>
                                        <button onClick={()=>{data(album)}}  className="btn btn-light">
                                            Price: &euro;{album.price.toFixed(2)}
                                        </button>
                                    </div>
                                </div>)})}
            </div>)
}

export default BandView;