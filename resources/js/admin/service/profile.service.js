// resources/js/admin/service/profile.service.js
import { showAlert, showConfirmation } from '../helper/alert';
import { apiGet, apiPost } from '../helper/api';
import $ from 'jquery';

class ProfileService {
    async loadData() {
        try {
            const res = await apiGet(`${appUrl}/justitia/profile`);
            const data = Array.isArray(res.data?.data) ? res.data.data : [];

            if (data.length > 0) {
                const item = data[0];

                $('#profileVision').html(item.vision || '-');
                $('#profileMission').html(item.mission || '-');
                $('#profileVision2').html(item.vision || '-');
                $('#profileMission2').html(item.mission || '-');
                $('#profileHistory').html(item.history || '-');

                if (item.structure) {
                    $('#profileStructure')
                        .attr('src', `/uploads/profile/${item.structure}`)
                        .removeClass('hidden');
                    $('#profileStructurePlaceholder').text('');
                } else {
                    $('#profileStructure').addClass('hidden');
                    $('#profileStructurePlaceholder').text('Belum ada data struktur organisasi');
                }

                $('#deleteProfile').data('id', item.id).removeAttr('disabled');

                // Disable tombol + ubah cursor
                $('#addProfile').attr('disabled', true).css('cursor', 'not-allowed');

            } else {
                $('#profileVision, #profileMission, #profileHistory').html('-');
                $('#profileStructure').addClass('hidden');
                $('#profileStructurePlaceholder').text('Belum ada data struktur organisasi');

                $('#deleteProfile').removeData('id').attr('disabled', true);

                // Enable tombol + reset cursor
                $('#addProfile').removeAttr('disabled').css('cursor', 'pointer');
            }

        } catch (error) {
            console.error(error);
        }
    }



    async upsertProfile(e, checkingEdit) {
        const submitButton = $(e.target).find(':submit');
        submitButton.attr('disabled', true);

        try {
            const formData = new FormData(e.target);
            let responseData;

            if (checkingEdit()) {
                const id = $('#id').val();
                responseData = await apiPost(`${appUrl}/justitia/profile/update/${id}`, formData);
            } else {
                responseData = await apiPost(`${appUrl}/justitia/profile/create`, formData);
                console.log(responseData);

            }

            if (responseData.data.code === 200) {
                showAlert('success', 'Data berhasil disimpan');
                $(`[data-close-modal="#upsertData"]`).trigger('click');
                this.loadData();
            } else {
                showAlert('error', 'Terjadi kesalahan server');
            }

        } catch (error) {
            if (error.response && error.response.status === 422) {
                showAlert('warning', 'Periksa kembali inputan anda');
                console.warn('Validation errors:', error.response.data.data);
            } else {
                console.error('Error:', error);
                showAlert('error', 'Terjadi kesalahan server');
            }
        } finally {
            submitButton.attr('disabled', false);
        }
    }

    async deleteData(id) {
        showConfirmation(
            'Apakah Anda yakin ingin menghapus data ini?',
            async () => {
                try {
                    const response = await axios.delete(`${appUrl}/justitia/profile/delete/${id}`);
                    const responseData = response.data;

                    console.log(responseData);

                    if (responseData.code === 200) {
                        showAlert('success', 'Data berhasil dihapus');
                        this.loadData();
                    } else {
                        showAlert('error', 'Terjadi kesalahan server');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    showAlert('error', 'Terjadi kesalahan server');

                }
            }
        );
    }



}

export default new ProfileService();
