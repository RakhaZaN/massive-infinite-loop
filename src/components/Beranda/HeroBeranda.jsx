function HeroBeranda() {
    const sectionStyle = {
      backgroundImage: "url('/img/bg-hero.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '647px',
      backgroundColor: 'rgba(255, 255, 255, 0.4)', // Putih dengan 60% transparansi
    };
  
    return (
      <div>
        <section style={sectionStyle} className="relative">
          <div className="absolute top-60 ml-20">
            <h1 className="text-5xl font-semibold mb-2">Howheal Shoes and Care</h1>
            <h1 className="text-5xl font-semibold text-customBlue5">Revive your shoes, revive your style</h1>
          </div>
        </section>
      </div>
    );
  }
  
  export default HeroBeranda;
  
  