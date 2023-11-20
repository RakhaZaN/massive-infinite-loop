import Beranda from "../components/Beranda/Beranda";
import CabangKami from "../components/Beranda/CabangKami";
import GaleriKami from "../components/Beranda/GaleriKami";
import HeroBeranda from "../components/Beranda/HeroBeranda";
import LayananKami from "../components/Beranda/LayananKami";
import TentangKami from "../components/Beranda/TentangKami";

function Home() {
  return (
    <div>
      <HeroBeranda/>
      <Beranda/>
      <CabangKami/>
      <LayananKami/>
      <TentangKami/>
      <GaleriKami/>
    </div>
  )
}

export default Home;