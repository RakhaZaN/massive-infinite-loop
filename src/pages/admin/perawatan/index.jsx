import React from "react";
import Input from "../../../components/Input";
import CBPelanggan from "../../../components/Input/ComboBox/Pelanggan";
import ListLayanan from "../../../components/Input/Select/Layanan";
import { useNavigate } from "react-router";
import NewPelanggan from "../../../components/Modal/NewPelanggan";
import axios from "axios";
// import { useOutletContext } from "react-router-dom/dist";
import endpoints from "../../../utils/api/enpoints.js";

const InputPerawatan = () => {
  const navigate = useNavigate();
  const [selectedPelanggan, setSelectedPelanggan] = React.useState({
    id: 0,
    fullname: "----- Pilih Pelanggan -----",
    phone: "",
  });
  const [selectedLayanan, setSelectedLayanan] = React.useState({
    id: 0,
    nama: "----- Pilih Layanan -----",
    harga: "",
  });

  const [inputs, setInputs] = React.useState({
    idPelanggan: {
      value: "",
      error: false,
    },
    namaPelanggan: {
      value: "",
      error: false,
    },
    noPelanggan: {
      value: "",
      error: false,
    },
    tipeSepatu: {
      value: "",
      error: false,
    },
    idLayanan: {
      value: "",
      error: false,
    },
    harga: {
      value: 0,
      error: false,
    },
  });

  const handlePelangganChange = (selected) => {
    setSelectedPelanggan(selected);
    setInputs((prev) => ({
      ...prev,
      idPelanggan: {
        ...prev.idPelanggan,
        value: selected?.id,
        error: false,
      },
      namaPelanggan: {
        ...prev.namaPelanggan,
        value: selected?.fullname,
        error: false,
      },
      noPelanggan: {
        ...prev.noPelanggan,
        value: selected?.phone,
        error: false,
      },
    }));
  };

  const handleLayananChange = (selected) => {
    setSelectedLayanan(selected);
    setInputs((prev) => ({
      ...prev,
      idLayanan: {
        ...prev.idLayanan,
        value: selected?.nama,
        error: false,
      },
      harga: {
        ...prev.harga,
        value: selected?.harga,
        error: false,
      },
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value: value,
        error: false,
      },
    }));
  };

  const validation = () => {
    const pelangganId = inputs.idPelanggan.value;
    const tipeSepatu = inputs.tipeSepatu.value;
    const layananId = inputs.idLayanan.value;

    setInputs((prev) => ({
      ...prev,
      idPelanggan: {
        ...prev.idPelanggan,
        error: pelangganId == "" ? "Pilih pelanggan terlebih dahulu" : false,
      },
      tipeSepatu: {
        ...prev.tipeSepatu,
        error: tipeSepatu == "" ? "Tipe sepatu tidak boleh kosong" : false,
      },
      idLayanan: {
        ...prev.idLayanan,
        error: layananId == "" ? "Pilih layanan terlebih dahulu" : false,
      },
    }));

    return pelangganId != "" && tipeSepatu != "" && layananId != "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validation()) {
      try {
        const response = await axios.post(
          endpoints.PERAWATAN.GET,
          {
            pelanggan_id: inputs.idPelanggan.value,
            tipe_sepatu: inputs.tipeSepatu.value,
            jenis_layanan: inputs.idLayanan.value,
            harga: inputs.harga.value,
          },
          {
            withCredentials: true,
          }
        );

        alert(response.data.message);
        navigate("/admin/data-perawatan");
      } catch (error) {
        alert(error.response.data.message.message);
        console.log(error.response.data.message.message);
        return false;
      }
    }
  };

  const [showModal, setShowModal] = React.useState(false);

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
                    onClick={() => setShowModal(true)}
                    className="text-customBlue3 text-sm underline"
                  >
                    Pelanggan Baru
                  </button>
                </div>
                <CBPelanggan
                  selected={selectedPelanggan}
                  setSelected={handlePelangganChange}
                  error={inputs.idPelanggan.error}
                />
                <Input
                  type="hidden"
                  id="idPelanggan"
                  name="idPelanggan"
                  value={inputs.idPelanggan.value}
                  readOnly
                />
                <Input
                  type="text"
                  id="namaPelanggan"
                  name="namaPelanggan"
                  label="Nama"
                  value={inputs.namaPelanggan.value}
                  disabled
                />
                <Input
                  type="tel"
                  id="noPelanggan"
                  name="noPelanggan"
                  label="Nomor Telp"
                  value={inputs.noPelanggan.value}
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
                  value={inputs.tipeSepatu.value}
                  onChange={handleInputChange}
                  error={inputs.tipeSepatu.error}
                />
                <ListLayanan
                  selected={selectedLayanan}
                  setSelected={handleLayananChange}
                  error={inputs.idLayanan.error}
                />
                <Input
                  type="hidden"
                  id="idLayanan"
                  name="idLayanan"
                  value={inputs.idLayanan.value}
                  readOnly
                />
                <Input
                  type="number"
                  id="harga"
                  name="harga"
                  label="Harga"
                  value={inputs.harga.value.toString()}
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
      {showModal && <NewPelanggan toggleModal={setShowModal} />}
    </>
  );
};

export default InputPerawatan;
