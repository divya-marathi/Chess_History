import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/Dashboard/Dashboard";
import Navigator from "./components/Navigator";
import SignUp from "./pages/User/SignUp";
import Login from "./pages/User/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigator />}>
            <Route index element={<Dashboard />} />
            <Route path="/signin" element={<SignUp />} /> 
            <Route path="/login" element={<Login />} />             
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;