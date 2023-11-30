import { useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import NavbarAdmin from "../components/Navbar/Admin";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-broken-white flex">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col items-stretch flex-1">
        <NavbarAdmin toggleSidebar={toggleSidebar} />
        <main>
          <div className="contianer px-8 py-10 flex-1">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
