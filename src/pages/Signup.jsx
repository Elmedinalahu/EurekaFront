// import React, { useState } from 'react';
// import axios from 'axios';
// import './Signup.css'; // Adjust path as per your folder structure

// export default function Signup() {
//   // State to hold form data
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: ''
//   });

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('https://localhost:7143/api/Account/register', {
//         DisplayName: `${formData.firstName} ${formData.lastName}`,
//         Email: formData.email,
//         Password: formData.password
//       });
//       console.log('Registration successful', response.data);
//       // You can redirect to another page here, for example
//     } catch (error) {
//       console.error('Registration failed', error.response.data);
//     }
//   };

//   return (
//     <div className="signup">
//       <div className="rectangle-40">
//         <div className="container-5">
//           <div className="unlock-your-potential-join-now">
//             Unlock Your Potential <br />
//             Join Now
//           </div>
//           <form onSubmit={handleSubmit}>
//             <div className="container-6">
//               <span className="first-name">First Name</span>
//               <input 
//                 type="text" 
//                 name="firstName" 
//                 value={formData.firstName} 
//                 onChange={handleChange} 
//                 required 
//               />
//             </div>
//             <div className="container-4">
//               <span className="last-name">Last Name</span>
//               <input 
//                 type="text" 
//                 name="lastName" 
//                 value={formData.lastName} 
//                 onChange={handleChange} 
//                 required 
//               />
//             </div>
//             <div className="container-1">
//               <span className="email">Email</span>
//               <input 
//                 type="email" 
//                 name="email" 
//                 value={formData.email} 
//                 onChange={handleChange} 
//                 required 
//               />
//             </div>
//             <div className="container-2">
//               <span className="password">Password</span>
//               <input 
//                 type="password" 
//                 name="password" 
//                 value={formData.password} 
//                 onChange={handleChange} 
//                 required 
//               />
//             </div>
//             <div className="container-3">
//               <button type="submit" className="register">Register</button>
//             </div>
//           </form>
//           <div className="already-have-an-account">
//             Already have an account? <a href="/signin">Sign In</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css'; // Adjust path as per your folder structure

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:7143/api/Account/register', {
        DisplayName: `${formData.firstName} ${formData.lastName}`,
        Email: formData.email,
        Password: formData.password
      });
      console.log('Registration successful', response.data);
    } catch (error) {
      console.error('Registration failed', error.response.data);
    }
  };

  return (
    <div className="signup">
      <div className="rectangle-40">
        <div className="container-5">
          <div className="unlock-your-potential-join-now">
            Unlock Your Potential <br />
            Join Now
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input 
                type="text" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleChange} 
                required 
              />
              <label className={formData.firstName ? 'shrink' : ''}>First Name</label>
            </div>
            <div className="input-container">
              <input 
                type="text" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleChange} 
                required 
              />
              <label className={formData.lastName ? 'shrink' : ''}>Last Name</label>
            </div>
            <div className="input-container">
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
              <label className={formData.email ? 'shrink' : ''}>Email</label>
            </div>
            <div className="input-container">
              <input 
                type="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                required 
              />
              <label className={formData.password ? 'shrink' : ''}>Password</label>
            </div>
            <div className="container-3">
              <button type="submit" className="register">Register</button>
            </div>
          </form>
          <div className="already-have-an-account">
            Already have an account? <a href="/signin">Sign In</a>
          </div>
        </div>
      </div>
    </div>
  );
}
