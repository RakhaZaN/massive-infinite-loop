/* eslint-disable react/no-unescaped-entities */
function Cabang() {
  return (
    <div>
        <div className="flex justify-between mt-20">
        <div className="w-1/3 h-96 ml-6">
            <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-customBlue2">
            <img className="w-full" src={`/img/cardhowheal.png`} alt="Card image" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">SAC MALANG</div>
                <p className="text-gray-700 text-base">
                Jl. Candi Badut No.9, Mojolangu, Kec. Lowokwaru, Kota Malang, Jawa Timur 
                </p>
            </div>
            <div className="px-6 py-4 flex justify-end">
                <a href="#" className="bg-customBlue3 hover:bg-customBlue4 text-white font-bold py-2 px-4 rounded-full">
                Read More
                </a>
            </div>
            </div>
        </div>
        <div className="w-1/3 h-96">
            <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-customBlue2">
            <img className="w-full" src={`/img/cardhowheal.png`} alt="Card image" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">SAC BANYUWANGI</div>
                <p className="text-gray-700 text-base">
                Perum Banyuwangi Cefila Indah Blok R-18,Banyuwangi Jawa Timur 
                </p>
            </div>
            <div className="px-6 py-4  flex justify-end">
                <a href="#" className="bg-customBlue3 hover:bg-customBlue4 text-white font-bold py-2 px-4 rounded-full">
                Read More
                </a>
            </div>
            </div>
        </div>
        <div className="w-1/3 h-96 mb-20">
            <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-customBlue2">
            <img className="w-full" src={`/img/cardhowheal.png`} alt="Card image" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">SAC JAKUT</div>
                <p className="text-gray-700 text-base">
                Jl papanggo no 2c (sunter)
                </p>
            </div>
            <div className="px-6 py-4  flex justify-end">
                <a href="#" className="bg-customBlue3 hover:bg-customBlue4 text-white font-bold py-2 px-4 rounded-full">
                Read More
                </a>
            </div>
            </div>
        </div>
      
        </div>

    </div>
  )
}

export default Cabang