import { Fragment, useState } from 'react'
import { Route , Routes } from 'react-router-dom'
import ProductListPage from './pages/ProductList'
import ProductDetailsPage from './pages/ProductDatils'
import CartListPage from './pages/CartList'


function App() {
  
  return (
    <Fragment>
      <Routes>
        <Route path='/product-list' element={<ProductListPage/>}/>
        <Route path='/product-details/:id' element={<ProductDetailsPage/>}/>
        <Route path='/cart-list' element={<CartListPage/>}/>
      </Routes>
    </Fragment>
  )
}

export default App
