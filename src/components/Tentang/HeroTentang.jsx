function HeroTentang() {
    const sectionStyle = {
      backgroundImage: "url('/img/bg-hero-sm.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '405px',
      backgroundColor: 'rgba(255, 255, 255, 0.4)', // Putih dengan 60% transparansi
    };
  
    return (
      <div>
        <section style={sectionStyle} className="flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-2">Tentang Kami</h1>
            <h1 className="text-3xl mt-4">BERANDA / HALAMAN / <span className="text-customBlue5">TENTANG</span></h1>
          </div>
        </section>
      </div>
    );
  }
  
  export default HeroTentang;
  

 