function BeforeAfter() {
  // Dummy image URLs
  const images = [
    '/img/BeforeAfter1.jpeg',
    '/img/BeforeAfter2.jpg',
    '/img/BeforeAfter3.jpeg',
    '/img/BeforeAfter4.jpeg',
    '/img/BeforeAfter5.jpeg',
    '/img/BeforeAfter6.jpeg',
    '/img/imgHeroBeranda.png',
    '/img/imgHeroBeranda.png',
    '/img/imgHeroBeranda.png',
  ];

  return (
    <div>
      <section className="h-c1650">
        <h1 className="mt-10 text-2xl font-semibold text-center text-customBlue3 mb-10">BEFORE | AFTER</h1>
        <div className="grid grid-cols-3 gap-y-10 ml-32 mr-32">
          {images.map((image, index) => (
            <div key={index} className="bg-white flex justify-center items-center">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover rounded-3xl"
                style={{ width: '316px', height: '475px' }} // Atur ukuran sesuai dengan aslinya
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BeforeAfter;
