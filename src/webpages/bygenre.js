import albums from "./albums";
import { titleCase } from "./functions";
import React, { useState, useEffect }  from 'react';

const ByGenre =()=>{

    let genres = []
    albums.forEach(album =>{
        const fixed = titleCase(album.genre)
        if (!genres.includes(fixed))
        {
            genres.push(fixed)
        }
    })
    const [theAlbums,setAlbums] = useState(genres)

    return (<div className="container"> 
                <hr/>
                { theAlbums.map((genre,index) =>{
                return(<div className="row" key={index}>
                            <p>{genre}</p>
                        </div>)})}
            </div>)
}

export default ByGenre;