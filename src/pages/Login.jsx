import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import { setToken } from '../utils/auth';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const navigate = useNavigate();
  
  const handleLogin = async (email, password) => {
    try {
      const { token } = await login(email, password);
      setToken(token);
      navigate('/dashboard'); // Redirect to a dashboard or other page on successful login
    } catch (error) {
      console.error('Login failed:', error.message);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      {/* <h2>Login</h2> */}
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
