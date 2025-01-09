// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './pages/Login';
// import Booking from './pages/Booking';


// const App = () => {
//   const [authToken, setAuthToken] = useState(null);

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/login"
//           element={<Login setAuthToken={setAuthToken} />}
//         />
//         <Route
//           path="/booking"
//           element={
//             authToken ? <Booking authToken={authToken} /> : <Navigate to="/login" />
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;




import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Booking from './pages/Booking';
import SellerDashboard from './pages/SellerDashboard';
import ServiceRequest from './pages/ServiceRequest';

const App = () => {
  const [authToken, setAuthToken] = useState(null);

  return (
    <Router>
      <Routes>
        
        <Route
          path="/login"
          element={<Login setAuthToken={setAuthToken} />}
        />
        <Route
          path="/booking"
          element={
            authToken ? <Booking authToken={authToken} /> : <Navigate to="/login" />
          }
        />
        <Route path="/seller-dashboard" element={<SellerDashboard authToken={authToken} />} />
        <Route path="/services" element={<ServiceRequest authToken={authToken} />} />


      </Routes>
    </Router>
  );
};

export default App;
