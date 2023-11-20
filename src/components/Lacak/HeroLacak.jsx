function HeroLacak() {
    const sectionStyle = {
      backgroundImage: "url('/img/bg-hero.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '647px',
      backgroundColor: 'rgba(255, 255, 255, 0.4)', // Putih dengan 60% transparansi
    };
  
    return (
      <div>
      <section style={sectionStyle} className="flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-2">Lacak</h1>
          <h1 className="text-3xl mt-4">BERANDA / HALAMAN / <span className="text-customBlue5">LACAK</span></h1>

          <div className="flex mt-10 justify-center items-center">
            <input type="text" className="border-gray-300 border rounded-l-lg px-60 py-4 focus:outline-none focus:ring focus:border-blue-300 flex-1 text-xl" placeholder="Masukkan ID Pelanggan" aria-label="Masukkan ID Pelanggan" aria-describedby="button-addon2" />
            <button className="bg-white border border-l-0 border-gray-300 rounded-r-lg px-7 py-4 hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-300 font-semibold text-xl" type="button" id="button-addon2">Lacak</button>
          </div>


        </div>
      </section>
    </div>
    );
  }
  
  export default HeroLacak;