import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import NavbarAdmin from "../components/Navbar/Admin";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom/dist";

const AdminLayout = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);
  const [user, setUser] = useState({});
  const [token, setToken] = useState({
    text: "",
    expired: "",
  });

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/users/auth/refresh-token",
        { withCredentials: true }
      );

      const decode = jwtDecode(response.data.access_token);
      setUser({
        id: decode.id,
        username: decode.username,
        role: decode.role,
      });
      setToken((prev) => ({
        ...prev,
        text: response.data.access_token,
        expired: decode.exp,
      }));
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
        navigate("/admin/login", { replace: true });
      }
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-broken-white flex">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col items-stretch flex-1">
        <NavbarAdmin toggleSidebar={toggleSidebar} user={user} />
        <main>
          <div className="contianer px-8 py-10 flex-1">
            <Outlet context={[token]} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
