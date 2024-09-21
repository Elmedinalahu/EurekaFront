import { Navigate } from 'react-router-dom';
import { getToken } from '../utils/auth';

const PrivateRoute = ({ element }) => {
  const token = getToken();
  return token ? element : <Navigate to="/Login" />;
};

export default PrivateRoute;