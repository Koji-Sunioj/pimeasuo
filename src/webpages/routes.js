
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './home';
import Navbar from './navbar';
import Cart from './cart';
import ByBand from './byband';
import ByGenre from './bygenre';
import BandView from './bandview';
import React, { useState, useEffect }  from 'react';
import Results from "./results";


const Webpages = () => {

   
   const [cart,setCart] = useState([])

   function updateCart(album)
   {
        const checkDup = cart.filter(alb => {return alb.id === album.id})
        if (!checkDup.length)
        {
            setCart(previous => [...previous, album])
        }
       
   }

   function removeAlbum(id)
   {
        const removed = cart.filter(alb => {return alb.id !== id})
        setCart(removed)
   }


    return(
        <BrowserRouter>
            <Navbar items={cart.length}/>
            <Routes>
                <Route path="/" element={<Home/>}/>  
                <Route path="/cart" element={<Cart cart={cart} onRemove={removeAlbum}/>}/>
                <Route path="/band/" element={< ByBand />} /> 
                <Route path ="/band/:bandname" element={<BandView  data={updateCart}/>} />
                <Route path="/genre" element={< ByGenre/>} /> 
                <Route path="/search/:result" element={< Results data={updateCart}/>} /> 
                <Route path="/search/:result?page=:page" element={< Results data={updateCart}/>} /> 
            </Routes>
        </BrowserRouter>
    );
};

//<Route path = "/user/:id" element={<User/>}  />
export default Webpages;