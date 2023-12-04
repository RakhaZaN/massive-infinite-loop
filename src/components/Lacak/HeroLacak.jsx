import { useState } from 'react';
import { Link } from 'react-router-dom';

function HeroLacak() {
  const sectionStyle = {
    backgroundImage: "url('/img/bg-hero.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '647px',
    backgroundColor: '#95CEF0',
  };

  const [idPelanggan, setIdPelanggan] = useState('');

  const handleInputChange = (event) => {
    setIdPelanggan(event.target.value);
  };

  const handleClick = (event) => {
    if (!idPelanggan) {
      event.preventDefault();
      alert('Harap masukkan ID pelanggan sebelum melanjutkan!');
    }
  };

  return (
    <div>
      <section style={sectionStyle} className="flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-2 font-nunito">Lacak</h1>
          <h1 className="text-3xl mt-4 font-nunito">BERANDA / HALAMAN / <span className="text-customBlue5">LACAK</span></h1>

          <div className="flex mt-10 justify-center items-center">
            <input
              type="text"
              value={idPelanggan}
              onChange={handleInputChange}
              className="border-gray-300 border rounded-l-lg px-60 py-7 focus:outline-none focus:ring focus:border-blue-300 flex-1 text-xl"
              placeholder="Masukkan ID Pelanggan"
              aria-label="Masukkan ID Pelanggan"
              aria-describedby="button-addon2"
            />
            <Link
              to={{
                pathname: idPelanggan ? 'hasil-lacak' : 'lacak', 
                state: { id: idPelanggan }, // Kirim hanya ID pelanggan ke halaman hasil-lacak
              }}
              onClick={handleClick}
            >
              <button className={`bg-white border border-l-0 border-gray-300 rounded-r-lg px-7 py-7 hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-300 font-semibold text-xl ${!idPelanggan && 'opacity-50'}`} type="button" id="button-addon2" disabled={!idPelanggan}>
                Lacak
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroLacak;
