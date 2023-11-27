import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from 'hooks/reduxHooks';
import { selectCurrentToken } from 'store/slices/selectors';

// #TODO - This is just a placeholder to return a Protected route when access.
// This needs to check more conditions like checking actual token and etc.
function ProtectedRoute() {
  const token = useAppSelector(selectCurrentToken);
  const location = useLocation();

  return token ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}
export default ProtectedRoute;
