const API_BASE_URL = import.meta.env.VITE_API_URL

export default {
    LACAK: (kode) => `${API_BASE_URL}/perawatan/lacak/${kode}`,
    LOGIN: `${API_BASE_URL}/users/auth/login`,
    LOGOUT: `${API_BASE_URL}/users/auth/logout`,
    PERAWATAN: {
        GET: `${API_BASE_URL}/perawatan/`,
        DETAIL: (id) => `${API_BASE_URL}/perawatan/${id}`,
    },
    PELANGGAN: `${API_BASE_URL}/pelanggan`
}