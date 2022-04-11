import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';

const Cart = ({cart,onRemove})=>{

    if (cart.length)
    {   const total = cart.reduce((prev, current) => prev + current.price,0);
        
       
        return     (<div className="container">
                    {cart.map(album=>{
                        return (
                        <div className="row" key={album.id}>
                            <div className="col-6">
                                <h3><Link to={'/band/'+album.artist} style={{textDecoration:'none',color:'white'}}>{album.artist}</Link>  - {album.title}</h3>
                                <p>&euro; {album.price.toFixed(2)}</p>
                            </div>
                            <div className="col-3">
                                <button className="btn btn-light" onClick={()=>{onRemove(album.id)}}>X</button>
                            </div>
                        </div>
                    )
                    })}
                    <div className="row">
                        <h3>Total: &euro; {total.toFixed(2)}</h3>
                    </div>
                </div>)
            
    }

    else
    {
        return(<div className="container">
                <h1>Your Cart is empty</h1>
            </div>)
    }
    
}

export default Cart;