// resources/js/admin/service/galeri.service.js
import { showAlert, showConfirmation } from '../helper/alert';
import { apiGet, apiPost, apiDelete } from '../helper/api';
import $ from 'jquery';

class GaleriService {
    async loadData() {
        try {
            const res = await apiGet(`${appUrl}/justitia/galeri`);
            const data = Array.isArray(res.data?.data) ? res.data.data : [];

            const tbody = $("#galeryTable tbody");
            tbody.empty();

            if (data.length === 0) {
                tbody.append(`
                    <tr class="border-b border-gray-200">
                        <td colspan="6" class="px-6 py-4 text-center text-gray-500">
                            Tidak ada data
                        </td>
                    </tr>
                `);
                return;
            }

            data.forEach((item, index) => {
                tbody.append(`
                    <tr class="border-b border-gray-200">
                        <td class="px-6 py-4">${index + 1}</td>
                        <td class="px-6 py-4">${item.name}</td>
                        <td class="px-6 py-4">
                            <img src="/uploads/galeri/${item.image}"
                                 alt="${item.name}"
                                 class="h-16 rounded-lg" />
                        </td>
                        <td class="px-6 py-4">${item.created_by ?? '-'}</td>
                        <td class="px-6 py-4">${item.date_upload}</td>
                        <td class="px-6 py-4 text-center">
                        <button
                            class="editGaleri px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                            data-id="${item.id}">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                        <button
                            class="deleteGaleri px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                            data-id="${item.id}">
                            <i class="fas fa-trash"></i> Hapus
                        </button>
                        </td>
                    </tr>
                `);
            });
        } catch (error) {
            console.error(error);
        }
    }

    async upsertGaleri(e, checkingEdit) {
        e.preventDefault(); // cegah submit default form

        const submitButton = $(e.target).find(':submit');
        submitButton.attr('disabled', true);

        try {
            const formData = new FormData(e.target);
            let responseData;

            if (checkingEdit()) {
                const id = $('#id').val();
                responseData = await apiPost(`${appUrl}/justitia/galeri/update/${id}`, formData);
            } else {
                responseData = await apiPost(`${appUrl}/justitia/galeri/create`, formData);
            }

            if (responseData?.data?.code === 200) {
                showAlert('success', 'Data berhasil disimpan');

                // Tutup modal
                $('#upsertGaleri').addClass('hidden');

                // Reset form
                e.target.reset();
                $('#id').val('');

                // Reload data table
                this.loadData();
            } else {
                showAlert('error', responseData?.data?.message || 'Terjadi kesalahan server');
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

    async getById(id) {
        return await apiGet(`${appUrl}/justitia/galeri/get/${id}`);
    }

    async deleteData(id) {
        showConfirmation(
            'Apakah Anda yakin ingin menghapus data ini?',
            async () => {
                try {
                    const response = await apiDelete(`${appUrl}/justitia/galeri/delete/${id}`);
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

export default new GaleriService();
