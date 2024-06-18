import React from 'react'
import { Route, Router, Routes, useParams } from 'react-router-dom';
import Registration from '../userComponents/Registration';
import Login from '../userComponents/Login'
import AdminNav from '../navs/AdminNav';
import ClientNav from '../navs/ClientNav';
import ProductList from '../../features/Product/ProductList'
import ProductItem from '../productComponents/ProductItem';
import UserList from '../../features/User/UserList';
import OrderList from '../../features/Order/OrderList';
import Cart from '../orderComponents/Cart';
import Purchase from '../orderComponents/Purchase';

const GeneralRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login></Login>} />
      <Route path="/registration" element={<Registration></Registration>} />
      <Route path="/admin" element={<AdminNav />}>
        <Route path="product" element={<ProductList />} />
        <Route path="productItem/:id" element={<ProductItem type={"update"} />} />
        <Route path="user" element={<UserList></UserList>} />
        <Route path="addProduct" element={<ProductItem type={"add"} />} />
        <Route path="order" element={<OrderList />} />
      </Route>
      <Route path="/client" element={<ClientNav />}>
      <Route path="productItem/:id" element={<ProductItem type={"display"} />} />
        <Route path="product" element={<ProductList />} />
        <Route path="order" element={<OrderList />} />
        <Route path="cart" element={<Cart />}></Route>
        <Route path="purchase" element={<Purchase />} />
      </Route>
    </Routes>
  )
}

export default GeneralRoutes