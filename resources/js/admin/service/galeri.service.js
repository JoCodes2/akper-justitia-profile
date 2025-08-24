// resources/js/admin/service/galeri.service.js
import { showAlert, showConfirmation } from '../helper/alert';
import { apiGet, apiPost, apiDelete } from '../helper/api';
import $ from 'jquery';

class GaleriService {
    async loadData() {
        try {
            const tableId = '#galeriTable';
            const res = await apiGet(`${appUrl}/justitia/galeri`);


            let data = Array.isArray(res.data?.data) ? res.data.data : []; // Simpan data yang diterima
            let searchQuery = ''; // Definisikan searchQuery di sini
            let perPage = 10; // Definisikan perPage di sini
            let currentPage = 1; // Definisikan currentPage di sini
            const renderTable = () => {
                let filteredData = data.filter(item => {
                    const query = searchQuery ? searchQuery.toLowerCase() : '';
                    return (
                        (item.name ? item.name.toLowerCase().includes(query) : false) ||
                        (item.date_upload ? item.date_upload.toLowerCase().includes(query) : false) ||
                        (item.created_by ? item.created_by.toLowerCase().includes(query) : false)
                    );
                });

                const totalPages = Math.ceil(filteredData.length / perPage);
                const start = (currentPage - 1) * perPage;
                const end = start + perPage;
                const pageData = filteredData.slice(start, end);

                const $tbody = $(`${tableId} tbody`);
                $tbody.empty();

                if (data.length === 0) {
                    $tbody.append(`
                        <tr>
                            <td colspan="6" class="text-center text-gray-500 py-6">
                                <i class="fas fa-exclamation-circle mr-2"></i> Tidak ada data
                            </td>
                        </tr>
                    `);
                } else if (filteredData.length === 0) {
                    $tbody.append(`
                        <tr>
                            <td colspan="6" class="text-center text-gray-500 py-6">
                                <i class="fas fa-search-minus mr-2"></i> Hasil tidak ditemukan
                            </td>
                        </tr>
                    `);
                } else {
                    pageData.forEach((item, index) => {

                        const row = `
                            <tr>
                                <td class="px-6 py-3 text-sm text-gray-700">${start + index + 1}</td>
                                <td class="px-6 py-3 text-sm text-gray-700">${item.name}</td>
                                <td class="px-6 py-3 text-sm text-gray-700">${item.user.name}</td>
                                <td class="px-6 py-3 text-sm text-gray-700">${item.date_upload}</td>
                                <td class="px-6 py-3 text-sm text-gray-700">
                                    ${item.image ? `<a href="${appUrl}/uploads/galeri/${item.image}" target="_blank" class="text-blue-500 hover:underline">${item.image}</a>` : '-'}
                                </td>
                                <td class="px-6 py-3 text-center text-sm">
                                    <button class="text-blue-500 hover:text-blue-700 mx-1 edit-galeri"  data-modal-target="#upsertGaleri"  data-id="${item.id}">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button class="text-red-500 hover:text-red-700 mx-1 delete-galeri" data-id="${item.id}">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        `;
                        $tbody.append(row);
                    });
                }

                // Update info pagination
                $(`#${tableId.replace('#', '')}_start`).text(filteredData.length ? start + 1 : 0);
                $(`#${tableId.replace('#', '')}_end`).text(Math.min(end, filteredData.length));
                $(`#${tableId.replace('#', '')}_total`).text(filteredData.length);

                // Previous / Next buttons
                $(`#${tableId.replace('#', '')}_prev`).prop('disabled', currentPage === 1);
                $(`#${tableId.replace('#', '')}_next`).prop('disabled', currentPage === totalPages || totalPages === 0);

                // Pagination numbers
                const $paginationNumbers = $(`#${tableId.replace('#', '')}_pagination_numbers`);
                $paginationNumbers.empty();
                for (let i = 1; i <= totalPages; i++) {
                    const btn = $(`<button class="px-3 py-1 border border-gray-300 rounded hover:bg-primary hover:text-white transition-colors">${i}</button>`);
                    if (i === currentPage) btn.addClass('bg-primary text-white');
                    btn.on('click', () => {
                        currentPage = i;
                        renderTable();
                    });
                    $paginationNumbers.append(btn);
                }
            };

            // Event search
            $(`${tableId}_search`).off('input').on('input', function () {
                searchQuery = $(this).val();
                currentPage = 1;
                renderTable();
            });

            // Event perPage
            $(`${tableId}_perpage`).off('change').on('change', function () {
                perPage = parseInt($(this).val());
                currentPage = 1;
                renderTable();
            });

            // Previous / Next
            $(`#${tableId.replace('#', '')}_prev`).off('click').on('click', function () {
                if (currentPage > 1) { currentPage--; renderTable(); }
            });
            $(`#${tableId.replace('#', '')}_next`).off('click').on('click', function () {
                const totalPages = Math.ceil(data.length / perPage);
                if (currentPage < totalPages) { currentPage++; renderTable(); }
            });

            renderTable();




        } catch (error) {
            console.error(error);
        }
    }

    async upsertGaleri(e, checkingEdit) {
        const submitButton = $(e.target).find(':submit');
        submitButton.attr('disabled', true);

        try {
            const formData = new FormData(e.target);
            console.log('Data yang akan dikirim:', Object.fromEntries(formData));
            let responseData;


            if (checkingEdit()) {
                const id = $('#id').val();
                responseData = await apiPost(`${appUrl}/justitia/galeri/update/${id}`, formData);
            } else {
                responseData = await apiPost(`${appUrl}/justitia/galeri/create`, formData);

            }

            if (responseData.data.code === 200) {
                showAlert('success', 'Data berhasil disimpan');
                $(`[data-close-modal="#upsertGaleri"]`).trigger('click');
                this.loadData();
            } else {
                showAlert('error', 'Terjadi kesalahan server');
            }

        } catch (error) {
            if (error.response && error.response.status === 422) {
                showAlert('warning', 'Periksa kembali inputan anda');
            } else {
                showAlert('error', 'Terjadi kesalahan server');
            }
        } finally {
            submitButton.attr('disabled', false);
        }
    }

    async getDataById(id, checkingEdit) {
        try {
            const res = await apiGet(`${appUrl}/justitia/galeri/get/${id}`);
            const data = res.data?.data || {};
            $('#id').val(data.id || '');
            $('#name').val(data.name || '');
            $('#date_upload').val(data.date_upload || '');
            $('#created_by').val(data.created_by || '');

            $('#image').val('');
            $('#imageTitle').text('Upload Gambar baru');

            checkingEdit();
        } catch (error) {
            console.error(error);
        }
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
