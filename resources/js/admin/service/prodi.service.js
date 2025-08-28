import { showAlert, showConfirmation } from '../helper/alert';
import { apiGet, apiPost, apiDelete } from '../helper/api';
import $ from 'jquery';

class ProdiService {
    async loadData() {
        try {
            const tableId = '#prodiTable'; // Definisikan tableId di sini
            const res = await apiGet(`${appUrl}/justitia/prodi`);

            // Pastikan response memiliki struktur yang benar
            if (!res.data || res.data.code !== 200) {
                throw new Error('Response API tidak valid');
            }

            let data = Array.isArray(res.data?.data) ? res.data.data : [];
            let searchQuery = '';
            let perPage = 10;
            let currentPage = 1;
            const renderTable = () => {
                let filteredData = data.filter(item => {
                    const query = searchQuery ? searchQuery.toLowerCase() : '';
                    return (
                        (item.name ? item.name.toLowerCase().includes(query) : false) ||
                        (item.level ? item.level.toLowerCase().includes(query) : false) ||
                        (item.accreditation ? item.accreditation.toLowerCase().includes(query) : false) ||
                        (item.description ? item.description.toLowerCase().includes(query) : false)
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

                        // Di bagian render table, pastikan class button benar
                    const row = `
                        <tr>
                            <td class="px-6 py-3 text-sm text-gray-700">${start + index + 1}</td>
                            <td class="px-6 py-3 text-sm text-gray-700">${item.name}</td>
                            <td class="px-6 py-3 text-sm text-gray-700">${item.level}</td>
                            <td class="px-6 py-3 text-sm text-gray-700">${item.accreditation}</td>
                            <td class="px-6 py-3 text-sm text-gray-700">${item.description ? item.description.substring(0, 100) + '...' : '-'}</td>
                            <td class="px-6 py-3 text-center text-sm">
                                <button class="text-primary hover:text-primary-dark mx-1 edit-btn"  data-modal-target="#upsertProdi"  data-id="${item.id}">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button class="text-red-500 hover:text-red-700 mx-1 delete-btn" data-id="${item.id}">
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

    async upsertProdi(e, checkingEdit) {
        const submitButton = $(e.target).find(':submit');
        submitButton.attr('disabled', true);

        try {
            const formData = new FormData(e.target);
            console.log('Data yang akan dikirim:', Object.fromEntries(formData));
            let responseData;

            if (checkingEdit()) {
                const id = $('#id').val();
                responseData = await apiPost(`${appUrl}/justitia/prodi/update/${id}`, formData);
            } else {
                responseData = await apiPost(`${appUrl}/justitia/prodi/create`, formData);
            }

            if (responseData.data.code === 200) {
                showAlert('success', 'Data berhasil disimpan');
                $(`[data-close-modal="#upsertProdi"]`).trigger('click');
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
            console.log('Mengambil data untuk ID:', id);
            const res = await apiGet(`${appUrl}/justitia/prodi/get/${id}`);
            console.log('Data yang diterima:', data);

            if (res.data && res.data.code === 200) {
                const data = res.data.data || {};
                console.log('Data yang diterima:', data);

                // Isi form dengan data sesuai ID di Blade
                $('#id').val(data.id || '');
                $('#name').val(data.nama_prodi || '');   // ganti name -> nama_prodi
                $('#level').val(data.jenjang || '');     // ganti level -> jenjang
                $('#accreditation').val(data.akreditasi || ''); // ganti accreditation -> akreditasi

                // Deskripsi via Summernote
                if ($('#description').data('summernote')) {
                    $('#description').summernote('code', data.deskripsi || '');
                } else {
                    $('#description').val(data.deskripsi || '');
                }


                console.log('Form berhasil diisi dengan data');

                // Jalankan flag edit
                if (typeof checkingEdit === 'function') {
                    checkingEdit();
                }

                // 👉 Buka modal setelah data terisi
                const modal = document.getElementById('upsertProdi');
                if (modal) {
                    modal.classList.remove('hidden');
                    modal.classList.add('flex');
                    console.log('Modal dibuka');
                }

            } else {
                console.error('Response tidak valid:', res.data);
                showAlert('error', 'Gagal mengambil data');
            }
        } catch (error) {
            console.error('Error mengambil data:', error);
            showAlert('error', 'Terjadi kesalahan saat mengambil data');
        }
    }


    async deleteData(id) {
        showConfirmation(
            'Apakah Anda yakin ingin menghapus data ini?',
            async () => {
                try {
                    const response = await axios.delete(`${appUrl}/justitia/prodi/delete/${id}`);
                    const responseData = response.data;

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

export default new ProdiService();
