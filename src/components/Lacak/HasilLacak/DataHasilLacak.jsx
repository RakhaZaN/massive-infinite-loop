import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import endpoints from "../../../utils/api/enpoints.js";

const DataHasilLacak = () => {
  const { idPelanggan } = useParams();
  const [trackingData, setTrackingData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log(endpoints.LACAK(idPelanggan));
        const response = await axios.get(endpoints.LACAK(idPelanggan));
        setTrackingData(response.data.data.perawatan);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (idPelanggan) {
      fetchData();
    }
  }, [idPelanggan]);

  return (
    <div className="h-c700 mt-16 mx-20">
      <table className="w-full h-1/2">
        <thead>
          <tr className="bg-customBlue3 text-white">
            <th className="px-4 py-4">Kode</th>
            <th className="px-4 py-4">Nama</th>
            <th className="px-4 py-4">Tipe Sepatu</th>
            <th className="px-4 py-4">Jenis Layanan</th>
            <th className="px-4 py-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {trackingData && (
            <tr className="bg-white">
              <td className="border px-4 py-4">{trackingData.kode}</td>
              <td className="border px-4 py-4">{trackingData.fullname}</td>
              <td className="border px-4 py-4">{trackingData.tipe_sepatu}</td>
              <td className="border px-4 py-4">{trackingData.jenis_layanan}</td>
              <td className="border px-4 py-4">{trackingData.status}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataHasilLacak;
