import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tentang from "./pages/howheal/Tentang";
import Toko from "./pages/howheal/Toko";
import Galeri from "./pages/howheal/Galeri";
import Lacak from "./pages/howheal/Lacak";
import Layout from "./Layout";
import Admin from "./pages/admin";
import AdminLogin from "./pages/admin/login";
import AdminLayout from "./Layout/AdminLayout";
import Pelanggan from "./pages/admin/pelanggan";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tentang" element={<Tentang />} />
          <Route path="toko" element={<Toko />} />
          <Route path="galeri" element={<Galeri />} />
          <Route path="lacak" element={<Lacak />} />
        </Route>

        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="data-pelanggan" element={<Pelanggan />} />
        </Route>
        <Route path="admin/login" element={<AdminLogin />} />
      </Routes>
    </>
  );
}

export default App;
