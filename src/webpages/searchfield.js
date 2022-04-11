import {Link} from "react-router-dom"
import { useRef,useState} from "react"

const SearchField =({onToggleView})=>
{
    const [search,setSearch] = useState('')
    const inputRef = useRef()
    function updateSearch()
    {
        setSearch(inputRef.current.value)
    }
    let searchable = search.length === 0 ? 'none' : 'auto'
    
    return( <div className="d-flex">
                <div className="input-group">
                    <button className="btn btn-dark" onClick={()=>{onToggleView(true)}}> Un-Search</button>
                    <input onChange={updateSearch} ref={inputRef} style={{border:'white'}} className="form-control" type="search" placeholder="album or artist name..." aria-label="Search"></input>
                    <Link to={'/search/'+search} style={{textDecoration:'none',pointerEvents:searchable}}>
                        <button className="btn btn-light"  disabled={search.length === 0}>Go</button>
                    </Link> 
                </div>
            </div>)
}

export default SearchField