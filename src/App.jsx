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
import InputPerawatan from "./pages/admin/perawatan";
import EditPerawatan from "./pages/admin/perawatan/Edit";
import Malang from "./pages/LayananSac/Malang";
import Banyuwangi from "./pages/LayananSac/Banyuwangi";
import Jakut from "./pages/LayananSac/Jakut";
import Batam from "./pages/LayananSac/Batam";
import HasilLacak from "./pages/HasilLacak/HasilLacak";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tentang" element={<Tentang />} />
          <Route path="galeri" element={<Galeri />} />

          <Route path="toko">
            <Route index element={<Toko />} />
            <Route path="sac-malang" element={<Malang />} />
            <Route path="sac-banyuwangi" element={<Banyuwangi />} />
            <Route path="sac-jakut" element={<Jakut />} />
            <Route path="sac-batam" element={<Batam />} />
          </Route>

          <Route path="lacak">
            <Route index element={<Lacak />} />
            <Route path="hasil-lacak" element={<HasilLacak />} />
          </Route>
        </Route>

        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="input-data" element={<InputPerawatan />} />
          <Route path="data-perawatan">
            <Route index element={<Pelanggan />} />
            <Route path=":kode" element={<EditPerawatan />} />
          </Route>
        </Route>
        <Route path="admin/login" element={<AdminLogin />} />
      </Routes>
    </>
  );
}

export default App;
