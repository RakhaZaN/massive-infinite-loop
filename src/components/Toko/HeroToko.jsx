function HeroToko() {
  const sectionStyle = {
    backgroundImage: "url('/img/bg-hero-sm.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '405px',
    backgroundColor: '#95CEF0',
  };

  return (
    <div>
      <section style={sectionStyle} className="flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-2 font-nunito">Cabang Howheals</h1>
          <h1 className="text-3xl mt-4 font-nunito">BERANDA / HALAMAN / <span className="text-customBlue5">TOKO</span></h1>
        </div>
      </section>
    </div>
  );
}

export default HeroToko;
