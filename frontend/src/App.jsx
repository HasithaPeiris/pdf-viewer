import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Viewer from "./pages/Viewer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <html data-theme="light">
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/viewer" element={<Viewer />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </div>
    </html>
  );
}

export default App;
