import axios from 'axios';

const API_URL = 'https://localhost:7143/api/Account';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    console.log(response.data.token);
    return response.data.token;
  } catch (error) {
    // Throw the error response for better handling in the LoginPage
    throw error.response.data; 
  }
};

// Register User
export const register = async (displayName, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/student/signup`, { displayName, email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};