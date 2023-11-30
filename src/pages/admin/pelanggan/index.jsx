import { Link } from "react-router-dom";

const Pelanggan = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-semibold">Data Pelanggan</h1>
        <button
          className="py-2 px-6 bg-slate-200 text-slate-700 rounded-md text-xs font-medium"
          onClick={() => alert("Mengkonversi data ke dalam bentuk excel.")}
        >
          Convert Excel
        </button>
      </div>

      <div className="bg-white rounded-xl p-6 mb-6">
        <div className="w-full overflow-x-auto">
          <table>
            <thead>
              <tr className="bg-customBlue1">
                <th>ID</th>
                <th>Nama</th>
                <th>No. Telp</th>
                <th>Tipe Sepatu</th>
                <th>Jenis Layanan</th>
                <th>Harga</th>
                <th>Status</th>
                <th>Opsi</th>
                <th>Cetak Nota</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SAC0001</td>
                <td>Yanu Akbar</td>
                <td>088923742</td>
                <td>Canvas</td>
                <td>Fast Cleaning</td>
                <td>Rp20.000</td>
                <td>Proses</td>
                <td>
                  <Link to={`SAC0001`} className="text-yellow-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 inline-block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => alert("Mencetak Nota")}
                    className="text-customBlue3 underline hover:text-customBlue6"
                  >
                    Cetak
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pelanggan;
