import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import NavbarAdmin from "../components/Navbar/Admin";

const AdminLayout = () => {
  return (
    <div className="bg-broken-white flex">
      <Sidebar />
      <div className="flex flex-col items-stretch flex-1">
        <NavbarAdmin />
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
