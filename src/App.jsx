import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AppDevPage from "./components/communities/appdev";
import WebDevPage from "./components/communities/webdev";
import MLAIPage from "./components/communities/mlai";
import DSACPPage from "./components/communities/dsa";
import BlockchainPage from "./components/communities/blockchain";
// import Footer from "./pages/Footer";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appdev" element={<AppDevPage />} />
        <Route path="/webdev" element={<WebDevPage />} />
        <Route path="/mlai" element={<MLAIPage />} />
        <Route path="/dsa" element={<DSACPPage />} />
        <Route path="/blockchain" element={<BlockchainPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
