/*
 * File name: protectedRoute.tsx
 * Purpose: Protected Route Outlet
 * Created on Sun Nov 26 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from 'store/hooks';
import { selectCurrentToken } from 'store/slices/selectors';

// #TODO - This is just a placeholder to return a Protected route when access.
// This needs to check more conditions like checking actual token and etc.
function ProtectedRoute() {
  const token = useAppSelector(selectCurrentToken);
  const location = useLocation();

  return token ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}
export default ProtectedRoute;
