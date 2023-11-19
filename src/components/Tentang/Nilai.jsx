function Nilai() {
  return (
    <div>
        <section className="h-96 flex items-center justify-between bg-customBlueNilai p-8">
            <h1 className="ml-24 mr-1 text-4xl font-bold">Nilai yang <br/>kami pegang</h1>
            <div className="flex flex-1 justify-center">
                <div className="w-customWidthNilai h-customHeightNilai bg-white mr-8 rounded-lg p-6">
                    <h2 className="text-xl font-bold">
                        Customer Obsessed
                    </h2>
                    <p className="text-lg"> 
                        Kepuasan konsumen merupakan hal yang paling kami jaga. Kepuasan Anda menjadi pemacu semangat untuk kami agar terus berinovasi.
                    </p>
                </div>
                <div className="w-customWidthNilai h-customHeightNilai bg-white mr-8 rounded-lg p-4">
                    <h2>
                        Integrity
                    </h2>
                    <p>
                        Displin, jujur, dan dedikasi merupakan hal yang kami jaga agar terus mendapat kepercayaan dari konsumen.
                    </p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Nilai