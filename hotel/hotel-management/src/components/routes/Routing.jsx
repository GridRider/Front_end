import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Destination from "../destination/Destination";
import Contact from "../contact/Contact";
import About from "../about/About";
import Login from "../login/Login";
import Profile from "../profile/Profile";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default Routing;
