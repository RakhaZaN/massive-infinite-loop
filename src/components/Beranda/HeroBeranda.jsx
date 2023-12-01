function HeroBeranda() {
  const sectionStyle = {
    backgroundImage: "url('/img/bg-hero.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '647px',
    backgroundColor: '#95CEF0',
    position: 'relative',
  };

  const buttonStyle = {
    width: '183px',
    height: '47px',
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#1CAAD9',
    color: 'black',
    borderRadius: '12px',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px',
  };

  const imgStyle = {
    width: '20px', // Sesuaikan ukuran gambar yang diinginkan
    height: '20px', // Sesuaikan ukuran gambar yang diinginkan
    marginRight: '5px', // Sesuaikan jarak antara gambar dan teks jika diperlukan
  };


  return (
    <div>
      <section style={sectionStyle} className="relative">
        <div className="absolute top-60 ml-20">
          <h1 className="text-5xl font-semibold mb-2 font-nunito">Howheal Shoes and Care</h1>
          <h1 className="text-5xl font-semibold text-customBlue5 font-nunito">Revive your shoes, revive your style</h1>
        </div>
        <img
          src="/img/imgHeroBeranda.png" // Ganti dengan sumber dan nama file gambar Anda
          alt="Your Image"
          style={{ width: '415px', height: '581px', position: 'absolute', top: '20px', right: '20px' }}
        />
        <button style={buttonStyle} className="font-semibold">
          <img src="/img/whatsapp-48.png" alt="Your Image" style={imgStyle} /> {/* Ganti dengan sumber dan nama file gambar Anda */}
          WhatsApp Care
        </button>
      </section>
    </div>
  );    

}

export default HeroBeranda;
