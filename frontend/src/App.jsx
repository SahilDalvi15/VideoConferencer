import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "./App.css"
import Authentication from "./pages/Authentication";
import { AuthProvider } from "./contexts/AuthContext";
import VideoMeetComponent from "./pages/VideoMeet";
import HomeComponent from "./pages/Home";
import History from "./pages/History";
const App = () => {

  return (
    <div>
      <Router>

        <AuthProvider> 
        <Routes>

          <Route path="/" element={<LandingPage/>}/>
          
          <Route path="/auth" element={<Authentication/>}/>
          <Route path="/home" element={<HomeComponent/>}/>
          <Route path="/history" element={<History/>} />
          <Route path='/:url' element={<VideoMeetComponent/>}/> {/* slugs */}

        </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
