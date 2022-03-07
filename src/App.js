import React from "react";
import LandingPage from "./components/dashboard/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Regsiter from "./components/auth/register/Register";


export const App = () => {

  return (
    <div className="App">
     
      <Router>
        <Routes>
          <Route path="/SocialNetwork" element={ <LandingPage />} />
          <Route path="/SocialNetwork/register" element={<Regsiter />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
