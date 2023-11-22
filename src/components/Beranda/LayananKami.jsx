function LayananKami() {
  return (
    <div>
      <section className="h-c850">
        <h1 className="text-customBlue3 text-center text-4xl font-bold">Layanan Kami</h1>
        <div className="flex justify-center mt-16 ml-20">
          <div className="w-1/3">
            {/* Card 1 */}
            <div className="shadow-xl w-c347 h-c300 rounded-3xl">
              <img className="w-full object-cover rounded-3xl" src={`/img/FastCleaning.jpg`} alt="Card image"/>
              <h2 className="text-lg font-bold mb-2 text-center mt-2">Fast Cleaning</h2>
              <p className="text-md mx-4">Fast cleaning merupakan pencucian instan pada bagian upper dan midsole yang bisa di tunggu selama 15-30 menit.</p>
            </div>
          </div>
          <div className="w-1/3">
            {/* Card 2 */}
            <div className="shadow-xl w-c347 h-c300 rounded-3xl">
              <img className="w-full object-cover rounded-3xl" src={`/img/FastCleaning.jpg`} alt="Card image"/>
              <h2 className="text-lg font-bold mb-2 text-center mt-2">Deep Cleaning</h2>
              <p className="text-md mx-4">Perawatan pembersihan sepatu secara detail dan menyeluruh pada seluruh bagian.</p>
            </div>
          </div>
          <div className="w-1/3">
            {/* Card 3 */}
            <div className="shadow-xl w-c347 h-c300 rounded-3xl">
              <img className="w-full object-cover rounded-3xl" src={`/img/FastCleaning.jpg`} alt="Card image"/>
              <h2 className="text-lg font-bold mb-2 text-center mt-2">Premium Treatment</h2>
              <p className="text-md mx-4">Perawatan yang ditujukan untuk material-material khusus dalam pengerjaanya serta menggunakan bahan khusus dalam setiap produknya.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12 ml-20">
          <div className="w-1/3">
            {/* Card 4 */}
            <div className="shadow-xl w-c347 h-c300 rounded-3xl">
              <img className="w-full object-cover rounded-3xl" src={`/img/FastCleaning.jpg`} alt="Card image"/>
              <h2 className="text-lg font-bold mb-2 text-center mt-2">Unyellowing</h2>
              <p className="text-md mx-4">Perawatan pada bagian midsole yang telah menguning untuk menghilangkan warna kuning menjadi semula tanpa harus direpaint.</p>
            </div>
          </div>
          <div className="w-1/3">
            {/* Card 5 */}
            <div className="shadow-xl w-c347 h-c300 rounded-3xl">
              <img className="w-full object-cover rounded-3xl" src={`/img/FastCleaning.jpg`} alt="Card image"/>
              <h2 className="text-lg font-bold mb-2 text-center mt-2">Repaint</h2>
              <p className="text-md mx-4">Perawatan restorasi warna dengan penggunaan cat khusus yang ditujukan untuk mengembalikan warna awal sepatu seperti semula.</p>
            </div>
          </div>
          <div className="w-1/3">
            {/* Card 6 */}
            <div className="shadow-xl w-c347 h-c300 rounded-3xl">
              <img className="w-full object-cover rounded-3xl" src={`/img/FastCleaning.jpg`} alt="Card image"/>
              <h2 className="text-lg font-bold mb-2 text-center mt-2">Repair</h2>
              <p className="text-md mx-4">Perawatan restorasi pada sepatu yang rusak atau terbuka untuk dikembalikan seperti semula.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LayananKami;
