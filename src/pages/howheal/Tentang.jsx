import HeroTentang from "../../components/Tentang/HeroTentang";
import Nilai from "../../components/Tentang/Nilai";
import Pencapaian from "../../components/Tentang/Pencapaian";
import Perjalanan from "../../components/Tentang/Perjalanan";

function Tentang() {
  return (
    <div>
        <HeroTentang/>
        <Perjalanan/>
        <Nilai/>
        <Pencapaian/>
    </div>
  )
}

export default Tentang;