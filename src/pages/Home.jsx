import GaleriKami from "../components/Beranda/GaleriKami";
import HeroBeranda from "../components/Beranda/HeroBeranda";
import LayananKami from "../components/Beranda/LayananKami";
import Pilihan from "../components/Beranda/Pilihan";
import TentangKami from "../components/Beranda/TentangKami";
import TigaLangkah from "../components/Beranda/TigaLangkah";

function Home() {
  return (
    <div>
      <HeroBeranda />
      <TigaLangkah />
      <TentangKami />
      <LayananKami />
      <Pilihan />
      <GaleriKami />
    </div>
  );
}

export default Home;
