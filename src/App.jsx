import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tentang from "./pages/howheal/Tentang";
import Toko from "./pages/howheal/Toko";
import Galeri from "./pages/howheal/Galeri";
import Lacak from "./pages/howheal/Lacak";
  import Layout from "./Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/howheal/tentang" element={<Tentang/>}></Route>
          <Route path="/howheal/toko" element={<Toko/>}></Route>
          <Route path="/howheal/galeri" element={<Galeri />}></Route>
          <Route path="/howheal/lacak" element={<Lacak />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
