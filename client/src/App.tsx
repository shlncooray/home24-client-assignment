/*
 * File name: App.tsx
 * Purpose: Home24 App routes
 * Created on Mon Nov 27 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */
import { Outlet, Route, Routes } from 'react-router-dom';
import { Home } from 'features/home';
import SignIn from 'pages/signIn';
import ProtectedRoute from 'features/auth/protectedRoute';
import Main from 'pages/main';
import { Products, ProductDetail } from 'features/products';
import { Cart } from 'features/cart';
import MyAccount from 'features/auth/pages/myAccount';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        {/* public routes */}
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="products/:mainCategory" element={<Products />} />
          <Route path="products/:mainCategory/:productName" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="login" element={<SignIn />} />

        {/* protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Main />}>
            <Route path="myAccount" element={<MyAccount />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
