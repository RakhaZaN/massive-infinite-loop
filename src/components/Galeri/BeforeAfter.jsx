function BeforeAfter() {
  // Dummy image URLs
  const images = [
    '/img/BeforeAfter2.jpg',
    '/img/BeforeAfter2.jpg',
    '/img/BeforeAfter2.jpg',
    '/img/BeforeAfter2.jpg',
    '/img/BeforeAfter2.jpg',
    '/img/BeforeAfter2.jpg',
    '/img/BeforeAfter2.jpg',
    '/img/BeforeAfter2.jpg',
    '/img/BeforeAfter2.jpg',
  ];

  return (
    <div>
      <section className="h-c1650">
        <h1 className="mt-10 text-2xl font-semibold text-center text-customBlue3 mb-10">BEFORE | AFTER</h1>
        <div className="grid grid-cols-3 gap-4 gap-y-10">
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
