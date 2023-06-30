import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Frontend/pages/Home/home.js';
import Item from './Frontend/pages/Item/item.js';
import Product from './Frontend/pages/Product/Product.js';
const App = () => {
  return (
    <div>
   <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/items' element={<Item />} />
    <Route path="/items/:id/product" element={<Product />}/>
    </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App