import React from "react";
import Input from "../../../components/Input";
import CBPelanggan from "../../../components/Input/ComboBox/Pelanggan";
import ListLayanan from "../../../components/Input/Select/Layanan";
import { useNavigate } from "react-router";

const InputPerawatan = () => {
  const navigate = useNavigate();
  const [selectedPelanggan, setSelectedPelanggan] = React.useState({
    id: "0",
    nama: "----- Pilih Pelanggan -----",
    noTelp: "",
  });
  const [selectedLayanan, setSelectedLayanan] = React.useState({
    id: 0,
    nama: "----- Pilih Layanan -----",
    harga: "",
  });

  const [inputs, setInputs] = React.useState({
    idPelanggan: "",
    namaPelanggan: "",
    noPelanggan: "",
    tipeSepatu: "",
    idLayanan: "",
    harga: "",
    status: "Belum Diproses",
  });

  const handlePelangganChange = (selected) => {
    setSelectedPelanggan(selected);
    setInputs((prev) => ({
      ...prev,
      idPelanggan: selected?.id || "",
      namaPelanggan: selected?.nama || "",
      noPelanggan: selected?.noTelp || "",
    }));
  };

  const handleLayananChange = (selected) => {
    setSelectedLayanan(selected);
    setInputs((prev) => ({
      ...prev,
      idLayanan: selected?.id,
      harga: selected?.harga,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Data berhasil disimpan.");
    navigate("/admin/data-perawatan");
  };

  const [showModal, setShowModal] = React.useState(false);

  const toggleModal = (isShow) => setShowModal(isShow);

  return (
    <>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold mb-8">Input Data Perawatan</h1>

        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-xl p-6 mb-6">
            <div className="flex items-start flex-wrap gap-8">
              <div className="flex-auto">
                <div className="flex justify-between items-baseline">
                  <h5 className="font-medium text-xl mb-4">Data Pelanggan</h5>
                  <button
                    type="button"
                    onClick={() => toggleModal(true)}
                    className="text-customBlue3 text-sm underline"
                  >
                    Pelanggan Baru
                  </button>
                </div>
                <CBPelanggan
                  selected={selectedPelanggan}
                  setSelected={handlePelangganChange}
                />
                <Input
                  type="hidden"
                  id="idPelanggan"
                  name="idPelanggan"
                  value={inputs.idPelanggan}
                  readOnly
                />
                <Input
                  type="text"
                  id="namaPelanggan"
                  name="namaPelanggan"
                  label="Nama"
                  value={inputs.namaPelanggan}
                  disabled
                />
                <Input
                  type="tel"
                  id="noPelanggan"
                  name="noPelanggan"
                  label="Nomor Telp"
                  value={inputs.noPelanggan}
                  disabled
                />
              </div>
              <div className="flex-auto">
                <h5 className="font-medium text-xl mb-4">Data Perawatan</h5>
                <Input
                  type="text"
                  id="tipeSepatu"
                  name="tipeSepatu"
                  label="Tipe Sepatu"
                  value={inputs.tipeSepatu}
                  onChange={handleInputChange}
                />
                <ListLayanan
                  selected={selectedLayanan}
                  setSelected={handleLayananChange}
                />
                <Input
                  type="hidden"
                  id="idLayanan"
                  name="idLayanan"
                  value={inputs.idLayanan}
                  readOnly
                />
                <Input
                  type="number"
                  id="harga"
                  name="harga"
                  label="Harga"
                  value={inputs.harga}
                  readOnly
                />
                {/* <Input type="text" id="status" name="status" label="Status" /> */}
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="submit"
              className="block py-2 px-12 rounded-lg font-medium text-white bg-customBlue3 hover:bg-customBlue4"
            >
              Simpan Data
            </button>
          </div>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[999]">
          <div className="bg-white p-8 rounded-xl w-96">
            {/* Add your form for adding customer data here */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Tambah Data Pelanggan</h2>
              <button
                type="button"
                onClick={() => toggleModal(false)}
                className="hover:opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <form>
              <Input
                type="text"
                id="addNamaPelanggan"
                name="addNamaPelanggan"
                label="Nama"
              />
              <Input
                type="text"
                id="addNoTelpPelanggan"
                name="addNoTelpPelanggan"
                label="Nomor Telp"
              />
              <button
                onClick={() => toggleModal(false)}
                className="block py-2 px-4 rounded-lg font-medium text-white bg-customBlue3 hover:bg-customBlue4"
              >
                Simpan Data Pelanggan
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default InputPerawatan;
