import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
