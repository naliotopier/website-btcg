import { HashRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

// import CardsSection from "./CardsSection";
import Navbar from "./Navbar";
import Footer from "./Footer";

import HomePage from "./HomePage";
import TeamPage from "./TeamPage";
import Error from "./Error";

function MyNavbar() {
  const currPath = useLocation().pathname;

  if (currPath === "/404") {
    return null;
  }
  return <Navbar />;
}

function App() {
  return (
    <div>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />

          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="/404" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
