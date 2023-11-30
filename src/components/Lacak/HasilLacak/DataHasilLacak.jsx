import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DataHasilLacak = () => {
  const location = useLocation();
  const [trackingData, setTrackingData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [idPelanggan, setIdPelanggan] = useState('');

  useEffect(() => {
    if (location.state && location.state.id) {
      setIdPelanggan(location.state.id);
      // Lakukan sesuatu untuk mengambil data dari sumber data yang tersedia (misal: API)
      // Simpan data yang sesuai dengan ID pelanggan ke state trackingData
      const dataFromServer = []; // Data yang didapat dari sumber data (misal: API)
      setTrackingData(dataFromServer);
    }
  }, [location.state]);

  useEffect(() => {
    // Filter data yang sesuai dengan ID pelanggan
    const filtered = trackingData.filter((data) => data.id === idPelanggan);
    setFilteredData(filtered);
  }, [idPelanggan, trackingData]);

  return (
    <div className="h-c700 mt-16 mx-20">
      <table className="w-full h-1/2">
        <thead>
          <tr className="bg-customBlue3 text-white">
            <th className="px-4 py-4">ID</th>
            <th className="px-4 py-4">Nama</th>
            <th className="px-4 py-4">Tipe Sepatu</th>
            <th className="px-4 py-4">Jenis Layanan</th>
            <th className="px-4 py-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((data) => (
            <tr className="bg-white" key={data.id}>
              <td className="border px-4 py-4">{data.id}</td>
              <td className="border px-4 py-4">{data.nama}</td>
              <td className="border px-4 py-4">{data.tipeSepatu}</td>
              <td className="border px-4 py-4">{data.jenisLayanan}</td>
              <td className="border px-4 py-4">{data.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataHasilLacak;
