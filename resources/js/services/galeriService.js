import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_APP_URL || 'http://localhost:8000';

class GaleriService {
  async getAllGaleri() {
    try {
      const response = await axios.get(`${API_BASE_URL}/justitia/galeri/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching galeri data:', error);
      throw error;
    }
  }
}

export default new GaleriService();
