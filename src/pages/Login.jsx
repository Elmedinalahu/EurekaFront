import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import { setToken } from '../utils/auth';
import LoginForm from '../components/LoginForm';
import { useState } from 'react';


const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState('');

  // Get the "from" state, or default to "/dashboard" if not provided
  const redirectTo = location.state?.from || '/dashboard';

  const handleLogin = async (email, password) => {
    try {
      const { token } = await login(email, password);
      setToken(token);  // Store the token
      navigate(redirectTo);  // Redirect to the desired page after successful login
    } catch (error) {
      console.error('Login failed:', error.message);
      setErrorMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogin} errorMessage={errorMessage} />
    </div>
  );
};

export default LoginPage;
