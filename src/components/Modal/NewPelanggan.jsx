import { useState } from "react";
import Input from "../Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewPelanggan = ({ toggleModal }) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    fullname: {
      value: "",
      error: false,
    },
    phone: {
      value: "",
      error: false,
    },
  });

  const handleChange = (e) => {
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

  const validation = (fullname, phone) => {
    if (fullname == "") {
      setInputs((prev) => ({
        ...prev,
        fullname: {
          ...prev.fullname,
          error: "Nama lengkap tidak boleh kosong",
        },
      }));
    }

    if (phone == "") {
      setInputs((prev) => ({
        ...prev,
        phone: {
          ...prev.phone,
          error: "Nomor telepon tidak boleh kosong",
        },
      }));
    }

    return fullname != "" && phone != "";
  };

  const handleNewPelanggan = async (e) => {
    e.preventDefault();

    const fullname = inputs.fullname.value;
    const phone = inputs.phone.value;

    if (validation(fullname, phone)) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/pelanggan",
          {
            fullname,
            phone,
          }
        );
        const { status, message } = response.data;

        alert(message);
        navigate(0);
      } catch (error) {}
    }
    // toggleModal(false);
  };

  return (
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
        <form onSubmit={handleNewPelanggan}>
          <Input
            type="text"
            id="fullname"
            name="fullname"
            label="Nama Lengkap"
            value={inputs.fullname.value}
            onChange={handleChange}
            error={inputs.fullname.error}
          />
          <Input
            type="tel"
            id="phone"
            name="phone"
            label="Nomor Telp"
            placeholder="contoh: 081234567890"
            value={inputs.phone.value}
            onChange={handleChange}
            error={inputs.phone.error}
          />
          <button
            type="submit"
            className="block py-2 px-4 rounded-lg font-medium text-white bg-customBlue3 hover:bg-customBlue4"
          >
            Simpan Data Pelanggan
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPelanggan;
