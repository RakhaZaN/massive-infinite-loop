function TentangKami() {
  return (
    <div>
        <h1 className="text-customBlue3 text-center text-4xl font-bold mt-20">Tentang Kami</h1>
        <section className="grid grid-cols-2 h-c720">
        {/* Bagian Kiri */}
        <div className="col-span-1">
            <div className="m-16">
            <h1 className="text-4xl font-bold text-customBlue3">Shoes And Care</h1>
            <p className="text-lg mt-5">
            Merupakan jasa perawatan premium sepatu yang pertama di Yogyakarta, dan jasa perawatan premium sepatu pertama di Indonesia yang berbasis media sosial. Untuk melayani pelanggan, saat ini Shoes and Care sudah memiliki 70 workshop di 20 kota di Indonesia. Berdiri di Yogyakarta, Shoes and Care mulai memberikan perawatan sepatu sejak 12 Oktober 2013.
            </p>
            <img className="w-488 h-248 mx-auto mt-4 rounded-3xl" src={`/img/ShoesAndCare.jpeg`} alt="Gambar" />
            </div>
        </div>

        {/* Bagian Kanan */}
        <div className="col-span-1 grid grid-cols-2 gap-4">
            <div className="col-span-2 m-16">
            <h1 className="text-4xl font-bold text-customBlue3 mb-4">Cabang & Mitra</h1>
            <div className="text-right">
            <a href="" className="text-lg mt-5 text-customBlue4">Lihat Semua</a>
            </div>
            {/* Baris 1 */}
            <div className="grid grid-cols-2 gap-4">
                {/* Kolom 1 */}
                <div className="col-span-1 mt-5">
                <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg w-285 h-c194 bg-customBlue4">
                    {/* Konten card */}
                    <img className="my-2 mx-auto w-c251 rounded-3xl" src={`/img/CabangMitraBeranda2.jpg`} alt="Card image"/>
                    <div className="px-4 py-1">
                        <h1 className="mt-2 font-bold text-md text-black">SAC Malang</h1>
                        <a href="#" className="mt-1 text-sm font-semibold text-black cursor-pointer">
                        Lihat Detail
                        </a>
                    </div>
                </div>
                </div>

                {/* Kolom 2 */}
                <div className="col-span-1 mt-5">
                <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg w-285 h-c194 bg-customBlue4">
                    {/* Konten card */}
                    <img className="my-2 mx-auto w-c251 rounded-3xl" src={`/img/CabangMitraBeranda2.jpg`} alt="Card image"/>
                    <div className="px-4 py-1">
                        <h1 className="mt-2 font-bold text-md text-black">SAC Banyuwangi</h1>
                        <a href="#" className="mt-1 text-sm font-semibold text-black cursor-pointer">
                        Lihat Detail
                        </a>
                    </div>
                </div>
                </div>
            </div>

            {/* Baris 2 */}
            <div className="grid grid-cols-2 gap-4">
                {/* Kolom 1 */}
                <div className="col-span-1 mt-8">
                <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg w-285 h-c194 bg-customBlue4">
                    {/* Konten card */}
                    <img className="my-2 mx-auto w-c251 rounded-3xl" src={`/img/CabangMitraBeranda2.jpg`} alt="Card image"/>
                    <div className="px-4 py-1">
                        <h1 className="mt-2 font-bold text-md text-black">SAC Jakarta Utara</h1>
                        <a href="#" className="mt-1 text-sm font-semibold text-black cursor-pointer">
                        Lihat Detail
                        </a>
                    </div>
                </div>
                </div>

                {/* Kolom 2 */}
                <div className="col-span-1 mt-8">
                <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg w-285 h-c194 bg-customBlue4">
                    {/* Konten card */}
                    <img className="my-2 mx-auto w-c251 rounded-3xl" src={`/img/CabangMitraBeranda2.jpg`} alt="Card image"/>
                    <div className="px-4 py-1">
                        <h1 className="mt-2 font-bold text-md text-black">SAC Batam</h1>
                        <a href="#" className="mt-1 text-sm font-semibold text-black cursor-pointer">
                        Lihat Detail
                        </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default TentangKami