import "./App.css";
import Navbar from "./Components/Ui/Navbar/Navbar";
import Users from "./Components/Users";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Ui/Login";
import SignUp from "./Components/Ui/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="users" element={<Users />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
