import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Nav from "./components/Nav";

function App() {
  return (
    <Router> 
      <Nav />
      <Toaster position="bottom-center" toastOptions={{
        duration:2000}}/>
    <Routes>
<Route exact path="/" element={<Home />}></Route>
<Route exact path="/register" element={<Register />}></Route>
<Route exact path="/login" element={<Login />}></Route>
    </Routes>
    </Router>
  );
}

export default App;
