import React, { useEffect } from "react";
import Input from "../../../components/Input";
import ListLayanan from "../../../components/Input/Select/Layanan";
import ListStatus from "../../../components/Input/Select/Status";
import { useNavigate, useParams } from "react-router-dom/dist";
import axios from "axios";
import endpoints from "../../../utils/api/enpoints.js";

const EditPerawatan = () => {
  const { kode } = useParams();
  const navigate = useNavigate();
  const [selectedLayanan, setSelectedLayanan] = React.useState({
    id: 1,
    nama: "Fast Clening",
    harga: "",
  });
  const [selectedStatus, setSelectedStatus] = React.useState({
    label: "Belum Diproses",
  });
  const [inputs, setInputs] = React.useState({
    id: 0,
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
    status: {
      value: "",
      error: false,
    },
  });

  useEffect(() => {
    const getDetail = async () => {
      try {
        const response = await axios.get(endpoints.PERAWATAN.DETAIL(kode), {
          withCredentials: true,
        });
        // console.log(response.data.data.perawatan);
        const perawatan = response.data.data.perawatan;
        setInputs((prev) => ({
          ...prev,
          id: perawatan.id,
          idPelanggan: {
            ...prev.idPelanggan,
            value: perawatan.kode,
          },
          namaPelanggan: {
            ...prev.namaPelanggan,
            value: perawatan.fullname,
          },
          noPelanggan: {
            ...prev.noPelanggan,
            value: perawatan.phone,
          },
          tipeSepatu: {
            ...prev.tipeSepatu,
            value: perawatan.tipe_sepatu,
          },
          idLayanan: {
            ...prev.idLayanan,
            value: perawatan.jenis_layanan,
          },
          harga: {
            ...prev.harga,
            value: perawatan.harga,
          },
          status: {
            ...prev.status,
            value: perawatan.status,
          },
        }));
        setSelectedLayanan((prev) => ({
          ...prev,
          nama: perawatan.jenis_layanan,
          harga: perawatan.harga,
        }));
        setSelectedStatus((prev) => ({
          ...prev,
          label: perawatan.status,
        }));
      } catch (error) {
        console.log(error);
      }
    };

    getDetail();
  }, [kode]);

  const handleStatusChange = (selected) => {
    setSelectedStatus(selected);
    setInputs((prev) => ({
      ...prev,
      status: {
        value: selected?.label,
        error: false,
      },
    }));
  };

  const handleLayananChange = (selected) => {
    setSelectedLayanan(selected);
    setInputs((prev) => ({
      ...prev,
      idLayanan: {
        value: selected?.nama,
        error: false,
      },
      harga: {
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
        value: value,
        error: false,
      },
    }));
  };

  const validation = (tipe_sepatu, jenis_layanan, status) => {
    setInputs((prev) => ({
      ...prev,
      tipeSepatu: {
        ...prev.tipeSepatu,
        error: tipe_sepatu == "" ? "Tipe sepatu tidak boleh kosong" : false,
      },
      idLayanan: {
        ...prev.idLayanan,
        error:
          jenis_layanan == "" ? "Pilih jenis layanan terlebih dahulu" : false,
      },
      status: {
        ...prev.status,
        error: status == "" ? "Pilih status terlebih dahulu" : false,
      },
    }));
    return tipe_sepatu != "" && jenis_layanan != "" && status != "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = inputs.id;
    const tipe_sepatu = inputs.tipeSepatu.value;
    const jenis_layanan = inputs.idLayanan.value;
    const harga = inputs.harga.value;
    const status = inputs.status.value;

    if (validation(tipe_sepatu, jenis_layanan, status)) {
      try {
        const response = await axios.put(endpoints.PERAWATAN.DETAIL(id), {
          tipe_sepatu,
          jenis_layanan,
          harga,
          status,
        });
        alert(response.data.message);
        navigate("/admin/data-perawatan");
      } catch (error) {
        console.log(error.response);
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Edit Data Perawatan</h1>

      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-xl p-6 mb-6">
          <div className="flex items-start flex-wrap gap-8">
            <div className="flex-auto">
              <h5 className="font-medium text-xl mb-4">Data Pelanggan</h5>
              {/* <div className="group mb-4">
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
              </div> */}
              {/* <CBPelanggan
                selected={selectedPelanggan}
                setSelected={handlePelangganChange}
              /> */}
              <Input
                type="text"
                id="idPelanggan"
                name="idPelanggan"
                label="Kode Perawatan"
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
                value={selectedLayanan.nama}
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
              <ListStatus
                selected={selectedStatus}
                setSelected={handleStatusChange}
                error={inputs.status.error}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <button
            type="submit"
            className="block py-2 px-12 rounded-lg font-medium text-white bg-customBlue3 hover:bg-customBlue4"
          >
            Simpan Perubahan
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPerawatan;
