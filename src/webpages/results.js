import {useParams,useState,Link,useLocation} from "react-router-dom";
import albums from "./albums";
import {titleCase} from './functions';

const Results =({data})=>{

    const testPage = useLocation()
    const page = testPage.search.includes('page') ?  Number(testPage.search.split('=')[1]) - 1 : 0
    //const page = Number(useLocation().search.split('=')[1]) - 1
    const {result} = useParams()
    let filtered = albums.filter((album) =>{return album.artist.includes(result) || album.genre.includes(result)})
    
    const pages = []
    
    for (let i = 0; i < Math.ceil(filtered.length / 3); i++) {
        pages.push(i + 1)
      }
    
    if (page != NaN)
    {   
        
        filtered = filtered.slice(page*3,page*3+3)

    }
    
    
    function Paged({disableTarget,data})
    {   
        
        return(<div className="d-flex justify-content-center " style={{color:'white'}}>
                    <div className="p-2">pages: </div>
                    {pages.map(page => {
                            if (disableTarget === page)
                            {
                                return(<div className="p-2" key={page}>{page}</div>)
                            }

                            else if (page === 1)
                            {
                                return(<Link style={{color:'white'}} to={'/search/'+result}><div className="p-2" key={page}>{page}</div></Link>  )
                            }

                            else
                            {
                                return(<Link style={{color:'white'}} to={'/search/'+result+'?page='+page}><div className="p-2" key={page}>{page}</div></Link>  )
                            }
                            })}
                </div> )
    }

    return (<div className="container"> 
                {filtered.map((album) =>{
                    const fixed = titleCase(album.genre)
                    return(<div className="row justify-content-center" key={album.id}>
                                <div className="col-8 col-lg-5"style={{border:'1px white solid',borderRadius:.5,padding:'20px'}} >
                                    <h3>{album.title}</h3>
                                    <ol>{album.songs.map((song,index) =>{
                                            return (<li key={index}>{song}</li>)
                                        })}
                                    </ol>
                                    <p>Genre: {fixed}</p>
                                    <button  onClick={()=>{data(album)}}  className="btn btn-light">
                                        Price: &euro;{album.price.toFixed(2)}
                                    </button>
                                </div>
                            </div>
                            
                            )})}
                {pages.length > 1 &&  <Paged disableTarget={page+1} data={result}/>}                            
            </div>)
}
export default Results;