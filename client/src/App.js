import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Router> 
    <Routes>
<Route exact path="/" element={<Home />}></Route>
<Route exact path="/register" element={<Register />}></Route>
<Route exact path="/login" element={<Login />}></Route>
    </Routes>
    </Router>
  );
}

export default App;
