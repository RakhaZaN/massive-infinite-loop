function TigaLangkah() {
  return (
    <div>
      <div className="h-c400">
        <h1 className="text-customBlue3 mt-24 ml-20 text-4xl font-bold">3 Langkah Mudah</h1>
      <div className="grid grid-cols-3 gap-4 mt-14">
        {/* Kolom 1 */}
        <div className="ml-20 col-span-1 flex justify-center">
          <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-customBlue4 w-c387 h-c241">
            {/* Konten card */}
            <img className="mt-5 ml-7 rounded-full" src={`/img/TigaLangkah2.jpg`} alt="Card image"/>
              <div className="px-4 py-1">
                  <h1 className="ml-3 mt-2 font-bold text-xl text-black">Antar / Request Penjemputan</h1>
                  <p href="#" className="mt-3 ml-3 text-md text-black cursor-pointer">
                  Antar barang kesayangan Anda atau request penjemputan ke lokasi Anda. S&K berlaku.
                  </p>
              </div>
          </div>
        </div>

        {/* Kolom 2 */}
        <div className="col-span-1 flex justify-center">
          <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg  bg-customBlue4 w-c387 h-c241">
            {/* Konten card */}
            <img className="mt-5 ml-7 rounded-full" src={`/img/TigaLangkah2.jpg`} alt="Card image"/>
              <div className="px-4 py-1">
                  <h1 className="ml-3 mt-2 font-bold text-xl text-black">Pantau Status Pengerjaan</h1>
                  <p href="#" className="mt-3 ml-3 text-md text-black cursor-pointer">
                  Tidak perlu bingung setelah barang anda diserahkan karena Anda dapat memantau status pengerjaan.
                  </p>
              </div>
          </div>
        </div>

        {/* Kolom 3 */}
        <div className="mr-20 col-span-1 flex justify-center">
          <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg  bg-customBlue4 w-c387 h-c241">
            {/* Konten card */}
            <img className="mt-5 ml-7 rounded-full" src={`/img/TigaLangkah2.jpg`} alt="Card image"/>
              <div className="px-4 py-1">
                  <h1 className="ml-3 mt-2 font-bold text-xl text-black">Ambil / Request Pengantaran</h1>
                  <p href="#" className="mt-3 ml-3 text-md text-black cursor-pointer">
                  Ambil barang kesayangan Anda atau request pengantaran ke lokasi Anda setelah status telah selesai. S&K berlaku.
                  </p>
              </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default TigaLangkah;
