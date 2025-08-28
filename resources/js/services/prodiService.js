import { apiGet } from '../admin/helper/api';

class ProdiService {
    async getAllProdi() {
        try {
            const res = await apiGet(`${appUrl}/justitia/prodi`);

            if (res.data && res.data.code === 200) {
                return res.data.data || [];
            } else {
                console.error('Response tidak valid:', res.data);
                return [];
            }
        } catch (error) {
            console.error('Error mengambil data prodi:', error);
            return [];
        }
    }

    async getProdiById(id) {
        try {
            const res = await apiGet(`${appUrl}/justitia/prodi/get/${id}`);

            if (res.data && res.data.code === 200) {
                return res.data.data || null;
            } else {
                console.error('Response tidak valid:', res.data);
                return null;
            }
        } catch (error) {
            console.error('Error mengambil data prodi:', error);
            return null;
        }
    }
}

export default new ProdiService();
