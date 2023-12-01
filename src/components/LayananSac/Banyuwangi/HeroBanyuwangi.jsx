function HeroBanyuwangi() {
  const sectionStyle = {
    backgroundImage: "url('/img/bg-hero-sm.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '405px',
    backgroundColor: '#95CEF0',
    position: 'relative', // Tambahkan posisi relatif pada bagian hero
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
    width: '20px',
    height: '20px',
    marginRight: '5px',
  };

  const boxStyle = {
    width: '904.19px',
    height: '172px',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: '20px', // Sesuaikan dengan tinggi dari footer atau bagian yang diinginkan
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)', // Efek box-shadow
    borderRadius : '15px'
  };

  const leftBoxStyle = {
    width: '33.33%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    marginLeft: '40px', 
  };

  const rightBoxStyle = {
    width: '66.66%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    marginRight: '40px', 
  };

  return (
    <div className="h-c542 relative">
      <section style={sectionStyle} className="bg-hero flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-2 font-nunito">Layanan & Harga Menu</h1>
          <h1 className="text-3xl mt-4 font-nunito">BERANDA / HALAMAN / <span className="text-customBlue5">LAYANAN & HARGA MENU</span></h1>
        </div>
        <button style={buttonStyle} className="font-semibold">
          <img src="/img/whatsapp-48.png" alt="Your Image" style={imgStyle} />
          WhatsApp Care
        </button>
      </section>
      <div style={boxStyle}>
        <div style={leftBoxStyle}>
          {/* Isi dengan gambar/logo Anda */}
          <img className="pb-6" src="/img/HowhealLayananSac.png" alt="Your Logo" />
        </div>
        <div style={rightBoxStyle}>
          {/* Isi dengan teks Anda */}
          <p className="font-nunito font-semibold text-4xl">Shoes And Care Banyuwangi</p>
        </div>
      </div>
    </div>
  );
}

export default HeroBanyuwangi;
