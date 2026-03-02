import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AppDevPage from "./components/communities/appdev";
import WebDevPage from "./components/communities/webdev";
import MLAIPage from "./components/communities/mlai";
import DSACPPage from "./components/communities/dsa";
import BlockchainPage from "./components/communities/blockchain";
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRoute from "./components/ProtectedRoute";

// import Footer from "./pages/Footer";
function App() {
  return (
    <>
      <ScrollToTop/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appdev" element={
          <ProtectedRoute> <AppDevPage /> </ProtectedRoute>} />
        <Route path="/webdev" element={<ProtectedRoute><WebDevPage /> </ProtectedRoute>} />
        <Route path="/mlai" element={<ProtectedRoute><MLAIPage /></ProtectedRoute>} />
        <Route path="/dsa" element={<ProtectedRoute><DSACPPage /></ProtectedRoute>} />
        <Route path="/blockchain" element={<ProtectedRoute><BlockchainPage /></ProtectedRoute>} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
