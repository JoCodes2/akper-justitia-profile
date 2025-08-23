import { showAlert, showConfirmation } from '../helper/alert';
import { apiGet, apiPost } from '../helper/api';

class LeaderService {
    async loadData() {
        try {
            const res = await apiGet(`${appUrl}/justitia/leader`);
            const data = Array.isArray(res.data?.data) ? res.data.data : [];

            const tableId = '#leaderTable';
            let currentPage = 1;
            let perPage = parseInt($(`${tableId}_perpage`).val() || 10);
            let searchQuery = '';


            const renderTable = () => {
                let filteredData = data.filter(item => {
                    const query = searchQuery.toLowerCase();
                    return (
                        item.name.toLowerCase().includes(query) ||
                        item.position.toLowerCase().includes(query) ||
                        item.nip.toLowerCase().includes(query)
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
                                <td class="px-6 py-3 text-sm text-gray-700">${item.position}</td>
                                <td class="px-6 py-3 text-sm text-gray-700">${item.nip}</td>
                                <td class="px-6 py-3 text-sm text-gray-700">
                                    ${item.image ? `<a href="${appUrl}/uploads/leader/${item.image}" target="_blank" class="text-blue-500 hover:underline">${item.image}</a>` : '-'}
                                </td>
                                <td class="px-6 py-3 text-center text-sm">
                                    <button class="text-blue-500 hover:text-blue-700 mx-1 edit-leader"  data-modal-target="#upsertLeader"  data-id="${item.id}">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button class="text-red-500 hover:text-red-700 mx-1 delete-leader" data-id="${item.id}">
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


    async getDataById(id, checkingEdit) {
        try {
            const res = await apiGet(`${appUrl}/justitia/leader/get/${id}`);
            const data = res.data?.data || {};
            $('#id').val(data.id || '');
            $('#name').val(data.name || '');
            $('#nip').val(data.nip || '');
            $('#position').val(data.position || '');

            $('#image').val('');
            $('#imageTitle').text('Upload Gambar baru');

            checkingEdit();
        } catch (error) {
            console.error(error);
        }
    }



    async upsertNews(e, checkingEdit) {
        const submitButton = $(e.target).find(':submit');
        submitButton.attr('disabled', true);

        try {
            const formData = new FormData(e.target);
            let responseData;

            if (checkingEdit()) {
                const id = $('#id').val();
                responseData = await apiPost(`${appUrl}/justitia/leader/update/${id}`, formData);
            } else {
                responseData = await apiPost(`${appUrl}/justitia/leader/create`, formData);

            }

            if (responseData.data.code === 200) {
                showAlert('success', 'Data berhasil disimpan');
                $(`[data-close-modal="#upsertLeader"]`).trigger('click');
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


    async deleteData(id) {
        showConfirmation(
            'Apakah Anda yakin ingin menghapus data ini?',
            async () => {
                try {
                    const response = await axios.delete(`${appUrl}/justitia/leader/delete/${id}`);
                    const responseData = response.data;

                    if (responseData.code === 200) {
                        showAlert('success', 'Data berhasil dihapus');
                        this.loadData();
                    } else {
                        showAlert('error', 'Terjadi kesalahan server');
                    }
                } catch (error) {
                    showAlert('error', 'Terjadi kesalahan server');

                }
            }
        );
    }
}

export default new LeaderService();
