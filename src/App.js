import "./App.css";
import { Route, Routes } from "react-router-dom";

//pages

import HotLine from "./pages/HotLine";
import Admin from "./pages/Admin.js";
import Status from "./pages/Status";
import Respond from "./pages/Respond";
import HomePage from "./pages/HomePage";
import UserHelp from "./pages/UserHelp";
import ResponseUpdate from './pages/ResponseUpdate';
import Login from './pages/Login'
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path='/sign_up' element={<Register />} />
        <Route path='/' element={<Login />} />
        <Route path="/userhelp" element={<UserHelp />} />
        <Route path="/status" element={<Status />} />
        <Route path="/hotline" element={<HotLine />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/respond" element={<Respond />} />
        <Route path="/responseupdate" element={<ResponseUpdate />} />
      </Routes>
    </div>
  );
}

export default App;