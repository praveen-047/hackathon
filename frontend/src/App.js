import {Routes,Route} from "react-router-dom"
import ParticlesBackground from "./components/ParticlesBackground";
import Login from './pages/Login/index.js'
import Register from './pages/Register/index.js'
import Home from './pages/Home/index.js'
import ProtectedRoute from "./pages/ProtectedRoute/index.js"

import './App.css';

function App() {
  return (
    <>
      <ParticlesBackground />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </>
  );
}

export default App;
