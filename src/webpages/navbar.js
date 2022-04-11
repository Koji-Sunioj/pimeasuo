import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import SearchField from './searchfield';

const Navbar =({items}) =>
{
    
    const [isSearchInvisible,setSearchInvisible] = useState(true)
    
    const toggleSearchVisible = (bool) =>{
        setSearchInvisible(bool)
    }

    return(<nav className="navbar navbar-expand-lg" id="header"  style={{ borderBottom: '1px solid white' }}>
                <div className="container-fluid">
                    <Link  to={'/'} style={{ textDecoration: 'none' }}>
                        <h1  className="navbar-brand">PimeäSuo MetalliKauppa</h1>
                    </Link>
                    {isSearchInvisible? 
                        (<button type="button"  onClick={()=>{toggleSearchVisible(false)}} className="btn btn-dark">Search</button>):
                        (<SearchField onToggleView={toggleSearchVisible}/>)}
                    <div className="d-flex">
                        <Link to={'/cart'}> 
                            <button className="btn btn-light" >Shopping cart: {items} items</button>
                        </Link>
                    </div>
                </div>
            </nav>)
}
export default Navbar;