const Admin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Input Data Pelanggan</h1>

      <div className="bg-white rounded-xl p-6 mb-6">
        <form onSubmit={handleSubmit}>
          <div className="flex items-start gap-8">
            <div className="flex-auto">
              <h5 className="font-medium text-xl mb-4">Data Pelanggan</h5>
              <div className="group mb-4">
                <label
                  htmlFor="idPelanggan"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Id
                </label>
                <input
                  type="text"
                  name="idPelanggan"
                  id="idPelanggan"
                  className="block w-full py-2 px-3 rounded-md border border-gray-300 focus:border-customBlue3 focus:ring-customBlue1 focus:ring-2 focus:ring-offset-1 focus:outline-none"
                />
              </div>
              <div className="group mb-4">
                <label
                  htmlFor="namaPelanggan"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Nama
                </label>
                <input
                  type="text"
                  name="namaPelanggan"
                  id="namaPelanggan"
                  className="block w-full py-2 px-3 rounded-md border border-gray-300 focus:border-customBlue3 focus:ring-customBlue1 focus:ring-2 focus:ring-offset-1 focus:outline-none"
                />
              </div>
              <div className="group mb-4">
                <label
                  htmlFor="noPelanggan"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Nomor Telp
                </label>
                <input
                  type="tel"
                  name="noPelanggan"
                  id="noPelanggan"
                  className="block w-full py-2 px-3 rounded-md border border-gray-300 focus:border-customBlue3 focus:ring-customBlue1 focus:ring-2 focus:ring-offset-1 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex-auto">
              <h5 className="font-medium text-xl mb-4">Data Perawatan</h5>
              <div className="group mb-4">
                <label
                  htmlFor="merekSepatu"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Merek Sepatu
                </label>
                <input
                  type="text"
                  name="merekSepatu"
                  id="merekSepatu"
                  className="block w-full py-2 px-3 rounded-md border border-gray-300 focus:border-customBlue3 focus:ring-customBlue1 focus:ring-2 focus:ring-offset-1 focus:outline-none"
                />
              </div>
              <div className="group mb-4">
                <label
                  htmlFor="JenisLayanan"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Jenis Layanan
                </label>
                <input
                  type="text"
                  name="JenisLayanan"
                  id="JenisLayanan"
                  className="block w-full py-2 px-3 rounded-md border border-gray-300 focus:border-customBlue3 focus:ring-customBlue1 focus:ring-2 focus:ring-offset-1 focus:outline-none"
                />
              </div>
              <div className="group mb-4">
                <label
                  htmlFor="harga"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Harga
                </label>
                <input
                  type="tel"
                  name="harga"
                  id="harga"
                  className="block w-full py-2 px-3 rounded-md border border-gray-300 focus:border-customBlue3 focus:ring-customBlue1 focus:ring-2 focus:ring-offset-1 focus:outline-none"
                />
              </div>
              <div className="group mb-4">
                <label
                  htmlFor="status"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Status
                </label>
                <input
                  type="tel"
                  name="status"
                  id="status"
                  className="block w-full py-2 px-3 rounded-md border border-gray-300 focus:border-customBlue3 focus:ring-customBlue1 focus:ring-2 focus:ring-offset-1 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="flex justify-end gap-4">
        <button
          type="reset"
          className="block py-2 px-12 rounded-lg font-medium text-gray-500 bg-white"
        >
          Clear
        </button>
        <button
          type="submit"
          className="block py-2 px-12 rounded-lg font-medium text-white bg-customBlue3"
        >
          Simpan Data
        </button>
      </div>
    </div>
  );
};

export default Admin;
