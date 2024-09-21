// import React, { createContext, useState, useEffect } from 'react';
// import { login as loginService, logout as logoutService } from './authService';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Check for existing token on mount
//     const token = localStorage.getItem('token');
//     if (token) {
//       // Optionally verify the token or fetch user data here
//       setUser({ token });
//     }
//   }, []);

//   const login = async (email, password) => {
//     try {
//       const data = await loginService(email, password);
//       setUser({ token: data.token });
//     } catch (error) {
//       throw error;
//     }
//   };

//   const logout = () => {
//     logoutService();
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
