// resources/js/admin/service/galeri.service.js
import { showAlert, showConfirmation } from '../helper/alert';
import { apiGet, apiPost, apiDelete } from '../helper/api';
import $ from 'jquery';

class AuthService {
    async login(e) {
        const submitButton = $(e.target).find(':submit');
        submitButton.attr('disabled', true);
        try {
            const formData = new FormData(e.target);
            let responseData = await apiPost(`${appUrl}/justitia/login`, formData);
            console.log(responseData);

            if (responseData.data.status === 'success') {
                showAlert('success', 'Login berhasil');
                window.location.href = `${appUrl}/cms/dashboard`;
            }

        } catch (error) {
            if (error.response && error.response.status === 401) {
                showAlert('warning', 'Username dan password  tidak valid ');
            } else if (error.response.status === 422) {
                showAlert('warning', 'Periksa kembali inputan anda');
            } else {
                showAlert('error', 'Terjadi kesalahan server');
            }
        } finally {
            submitButton.attr('disabled', false);

        }
    }
    async logout(e) {
        showConfirmation(
            'Apakah Anda yakin ingin keluar?',
            async () => {

                const response = await apiPost(`${appUrl}/justitia/logout`);
                const responseData = response.data;

                console.log(responseData);

                if (responseData.status === 'success') {
                    showAlert('success', 'Logout berhasil');
                    window.location.href = `${appUrl}/cms/login`;
                } else {
                    showAlert('error', 'Terjadi kesalahan server');
                }
            }
        );
    }

}

export default new AuthService();
