import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home.jsx";
import ClickerGame from "./pages/ClickerGame.jsx";
import Secret from "./pages/Secret.jsx";

import "./styles/base.css";
import "./styles/components.css";
import "./styles/layout.css";
import "./styles/responsive.css";
import "./styles/util.css";

function Layout() {
  return (
    <Router>
      <div className="page_container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clicker" element={<ClickerGame />} />
          <Route path="/secret" element={<Secret />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Layout;