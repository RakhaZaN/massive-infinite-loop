import { Link } from 'react-router-dom';

function CabangMitraToko() {
    return (
    <>
    <section className="h-c850">
    <h1 className="mt-14 text-center text-4xl font-semibold">Cabang & Mitra</h1>
      <div className="grid grid-cols-2 gap-4 mt-20">
        <div className="ml-56">
          <div className="max-w-sm mx-auto rounded-3xl overflow-hidden shadow-lg bg-customBlue7 w-c420 h-c290">
          <img className="my-4 mx-auto w-c177 h-c99" src={`/img/CabangMitraToko2.jpeg`} alt="Card image"/>
            <div className="px-6">
                <h1 className="font-bold text-xl mb-2 text-white">SAC Malang</h1>
                <p className="text-white text-base">
                Jl. Candi Badut No.9, Mojolangu, <br />Kec. Lowokwaru, Kota Malang, Jawa Timur 
                </p>
            </div>
            <div className="px-6 py-4 flex justify-end">
              <Link to="sac-malang" className="bg-white hover:bg-blue-100 text-customBlue7 font-semibold py-2 px-4 rounded-full">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="mr-56">
          <div className="max-w-sm mx-auto rounded-3xl overflow-hidden shadow-lg bg-customBlue7  w-c420 h-c290">
          <img className="my-4 mx-auto w-c177 h-c99" src={`/img/CabangMitraToko2.jpeg`} alt="Card image"/>
            <div className="px-6">
                <h1 className="font-bold text-xl mb-2 text-white">SAC Banyuwangi</h1>
                <p className="text-white text-base">
                Perum Banyuwangi Cefila Indah <br />Blok R-18,Banyuwangi Jawa Timur  
                </p>
            </div>
            <div className="px-6 py-4 flex justify-end">
                <Link to="sac-banyuwangi" className="bg-white hover:bg-blue-100 text-customBlue7 font-semibold py-2 px-4 rounded-full">
                Read More
                </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-20 ml-56">
          <div className="max-w-sm mx-auto rounded-3xl overflow-hidden shadow-lg bg-customBlue7  w-c420 h-c290">
          <img className="my-4 mx-auto w-c177 h-c99" src={`/img/CabangMitraToko2.jpeg`} alt="Card image"/>
            <div className="px-6">
                <h1 className="font-bold text-xl mb-2 text-white">SAC Jakarta Utara</h1>
                <p className="text-white text-base">
                  Jl papanggo no 2c (sunter) 
                  <br/><br/>
                </p>
            </div>
            <div className="px-6 py-4 flex justify-end">
                <Link to="sac-jakut" className="bg-white hover:bg-blue-100 text-customBlue7 font-semibold py-2 px-4 rounded-full">
                Read More
                </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-20 mr-56">
          <div className="max-w-sm mx-auto rounded-3xl overflow-hidden shadow-lg bg-customBlue7  w-c420 h-c290">
          <img className="my-4 mx-auto w-c177 h-c99" src={`/img/CabangMitraToko2.jpeg`} alt="Card image"/>
            <div className="px-6">
                <h1 className="font-bold text-xl mb-2 text-white">SAC Batam</h1>
                <p className="text-white text-base">
                Polibatam <br />Hawai Garden B-16 
                </p>
            </div>
            <div className="px-6 py-4 flex justify-end">
                <Link to="sac-batam" className="bg-white hover:bg-blue-100 text-customBlue7 font-semibold py-2 px-4 rounded-full">
                Read More
                </Link>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
    );
  }
  
  export default CabangMitraToko;
  