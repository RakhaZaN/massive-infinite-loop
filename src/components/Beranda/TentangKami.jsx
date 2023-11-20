// function TentangKami() {
//   return (
//     <div>
//         <h1>Tentang Kami</h1>

//     </div>
//   );
// }

// export default TentangKami



function TentangKami() {
  return (
    <>
    <h1 className="text-center text-2xl font-bold mb-6">Tentang Kami</h1>
    <section className="h-543 flex items-center justify-center bg-customBlue2 mb-4">
      <div className="max-w-5xl mx-auto flex">
        <div className="flex-1">
          {/* Bagian kiri */}
          <img src={`/img/BerandaTentangKami.jpg`} alt="Gambar" className="h-501 w-413 object-cover" />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          {/* Bagian kanan */}
          <h1 className="text-2xl font-bold mb-2">Shoes and Care</h1>
          <p className="text-gray-700 mb-4">
            merupakan jasa perawatan premium sepatu yang pertama di Yogyakarta, dan jasa perawatan premium sepatu pertama di Indonesia yang berbasis media sosial. Untuk melayani pelanggan, saat ini Shoes and Care sudah memiliki 70 workshop di 20 kota di Indonesia. Berdiri di Yogyakarta, Shoes and Care mulai memberikan perawatan sepatu sejak 12 Oktober 2013.
          </p>
          <button className="bg-customBlue4 hover:bg-customBlue3 text-black font-semibold py-2 px-4 rounded-lg float-left w-1/2">
            Pelajari Lebih Lanjut 
          </button>
        </div>
      </div>
    </section>
    </>
  );
}

export default TentangKami;
