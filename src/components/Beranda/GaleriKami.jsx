function GaleriKami() {

    // Dummy image URLs
    const images = [
      '/img/GaleriKami7.jpg',
      '/img/GaleriKami7.jpg',
      '/img/GaleriKami7.jpg',
      '/img/GaleriKami7.jpg',
      '/img/GaleriKami7.jpg',
      '/img/GaleriKami7.jpg',
      '/img/GaleriKami7.jpg',
      '/img/GaleriKami7.jpg',
    ];
  return (
    <div>
      <section className="h-c700">
        <h1 className="text-customBlue3 text-center text-4xl font-bold mt-14 mb-12">Galeri Kami</h1>
        <div className="grid grid-cols-4 gap-4 gap-y-10 mx-8">
          {images.map((image, index) => (
            <div key={index} className="bg-white flex justify-center items-center">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover rounded-3xl"
                style={{ width: '320px', height: '239px' }} // Atur ukuran sesuai dengan aslinya
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default GaleriKami