import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import { setToken } from '../utils/auth';
import LoginForm from '../components/LoginForm';
import { useState } from 'react'; // Import useState

const LoginPage = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const handleLogin = async (email, password) => {
    try {
      const { token } = await login(email, password);
      setToken(token);
      navigate('/dashboard'); // Redirect to a dashboard or other page on successful login
    } catch (error) {
      console.error('Login failed:', error.message);
      setErrorMessage('Login failed. Please check your credentials.'); // Set error message
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogin} errorMessage={errorMessage} />
    </div>
  );
};

export default LoginPage;
