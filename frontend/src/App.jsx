import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Shop from './pages/Shop'
import Loginsign from './pages/Loginsign'
import Cart from './pages/Cart'
import ShopCategory from "./pages/ShopCategory"
import Products from "./pages/Products"

function App() {


  return (
    <>
   <Router>
   <Navbar />
   <Routes>
    <Route path='/'  element={<Shop/>}/>
    <Route path='/mens'  element={<ShopCategory/>}/>
    <Route path='/womens'  element={<ShopCategory/>}/>
    <Route path='/kids'  element={<ShopCategory/>}/>
  
    <Route path='/cart'  element={<Shop/>}/>
    <Route path='/login'  element={<Loginsign />}/>
    <Route path='/cart'  element={<Cart/>}/>
    <Route path='/product'  element={<Products/>}>
      <Route path='product:id' element={<Products/>}/>
    </Route>
   </Routes>

   </Router>
    </>
  )
}

export default App
