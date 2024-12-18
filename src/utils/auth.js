export const setToken = (token) => {
  if (!token) {
      // If token is undefined, null, or an empty string, don't save it
      removeToken();
      return;
  }

      localStorage.setItem('token', token);  // Save token in localStorage for persistent login
      sessionStorage.setItem('token', token); // Save token in sessionStorage for session-based login
};

  
  export const getToken = () => {
    return localStorage.getItem('token') || sessionStorage.getItem('token');
  };
  
  export const removeToken = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token'); // Remove token from both storages
  };
  
  export const isLoggedIn = () => {
    return !!getToken();
  };
  