import { Link } from "react-router-dom"

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
            <Link to="/toko" className="text-lg mt-5 text-customBlue4">Lihat Semua</Link>
            </div>
            {/* Baris 1 */}
            <div className="grid grid-cols-2 gap-4">
                {/* Kolom 1 */}
                <div className="col-span-1 mt-5">
                <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg w-285 h-c194 bg-customBlue4">
                    {/* Konten card */}
                    <img className="my-2 mx-auto w-32 rounded-3xl" src={`/img/CabangMitraToko2.jpeg`} alt="Card image"/>
                    <div className="px-4">
                        <h1 className="mt-2 font-bold text-sm text-white">SAC Malang</h1>
                        <p className="text-white text-sm">
                        Jl. Candi Badut No.9, Mojolangu, Kec. Lowokwaru, Kota Malang, Jawa Timur 
                        </p>
                    </div>
                    <div className="px-6 flex justify-end">
                        <Link to="/toko/sac-malang" className="bg-white hover:bg-blue-100 text-customBlue7 font-semibold mt-3 px-4 text-sm rounded-full">
                        Read More
                        </Link>
                    </div>
                </div>
                </div>

                {/* Kolom 2 */}
                <div className="col-span-1 mt-5">
                <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg w-285 h-c194 bg-customBlue4">
                    {/* Konten card */}
                    <img className="my-2 mx-auto w-32 rounded-3xl" src={`/img/CabangMitraToko2.jpeg`} alt="Card image"/>
                    <div className="px-4">
                        <h1 className="mt-2 font-bold text-sm text-white">SAC Banyuwangi</h1>
                        <p className="text-white text-sm">
                        Perum Banyuwangi Cefila Indah <br/> Blok R-18,Banyuwangi Jawa Timur 
                        </p>
                    </div>
                    <div className="px-6 flex justify-end">
                        <Link to="/toko/sac-banyuwangi" className="bg-white hover:bg-blue-100 text-customBlue7 font-semibold mt-3 px-4 text-sm rounded-full">
                        Read More
                        </Link>
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
                    <img className="my-2 mx-auto w-32 rounded-3xl" src={`/img/CabangMitraToko2.jpeg`} alt="Card image"/>
                    <div className="px-4">
                        <h1 className="mt-2 font-bold text-sm text-white">SAC Jakarta Utara</h1>
                        <p className="text-white text-sm">
                        Jl papanggo no 2c (sunter)  <br/><br/>
                        </p>
                    </div>
                    <div className="px-6 flex justify-end">
                        <Link to="/toko/sac-jakut" className="bg-white hover:bg-blue-100 text-customBlue7 font-semibold mt-3 px-4 text-sm rounded-full">
                        Read More
                        </Link>
                    </div>
                </div>
                </div>

                {/* Kolom 2 */}
                <div className="col-span-1 mt-8">
                <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg w-285 h-c194 bg-customBlue4">
                    {/* Konten card */}
                    <img className="my-2 mx-auto w-32 rounded-3xl" src={`/img/CabangMitraToko2.jpeg`} alt="Card image"/>
                    <div className="px-4">
                        <h1 className="mt-2 font-bold text-sm text-white">SAC Batam</h1>
                        <p className="text-white text-sm">
                        Polibatam <br/> Hawai Garden B-16
                        </p>
                    </div>
                    <div className="px-6 flex justify-end">
                        <Link to="/toko/sac-batam" className="bg-white hover:bg-blue-100 text-customBlue7 font-semibold mt-3 px-4 text-sm rounded-full">
                        Read More
                        </Link>
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