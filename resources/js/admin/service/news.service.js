import { showAlert, showConfirmation } from '../helper/alert';
import { apiGet, apiPost } from '../helper/api';

class NewsService {
    async loadData() {
        try {
            const res = await apiGet(`${appUrl}/justitia/news`);
            const data = Array.isArray(res.data?.data) ? res.data.data : [];

            const tableId = '#newsTable';
            let currentPage = 1;
            let perPage = parseInt($(`${tableId}_perpage`).val() || 10);
            let searchQuery = '';

            // Fungsi untuk mapping category
            const mapCategory = (cat) => {
                switch (cat) {
                    case 'news': return { label: 'Berita', class: 'bg-blue-100 text-blue-800' };
                    case 'event': return { label: 'Event', class: 'bg-green-100 text-green-800' };
                    case 'announcement': return { label: 'Pengumuman', class: 'bg-yellow-100 text-yellow-800' };
                    default: return { label: cat, class: 'bg-gray-100 text-gray-800' };
                }
            };

            const renderTable = () => {
                let filteredData = data.filter(item => {
                    const categoryLabel = mapCategory(item.category).label.toLowerCase();
                    const dateStr = item.date_upload ? new Date(item.date_upload).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }).toLowerCase() : '';
                    const query = searchQuery.toLowerCase();
                    return (
                        item.title.toLowerCase().includes(query) ||
                        item.description.toLowerCase().includes(query) ||
                        categoryLabel.includes(query) ||
                        dateStr.includes(query)
                    );
                });

                const totalPages = Math.ceil(filteredData.length / perPage);
                const start = (currentPage - 1) * perPage;
                const end = start + perPage;
                const pageData = filteredData.slice(start, end);

                const $tbody = $(`${tableId} tbody`);
                $tbody.empty();

                if (data.length === 0) {
                    // Tidak ada data sama sekali
                    $tbody.append(`
                        <tr>
                            <td colspan="8" class="text-center text-gray-500 py-6">
                                <i class="fas fa-exclamation-circle mr-2"></i> Tidak ada berita
                            </td>
                        </tr>
                    `);
                } else if (filteredData.length === 0) {
                    // Pencarian tidak ditemukan
                    $tbody.append(`
                        <tr>
                            <td colspan="8" class="text-center text-gray-500 py-6">
                                <i class="fas fa-search-minus mr-2"></i> Hasil tidak ditemukan
                            </td>
                        </tr>
                    `);
                } else {
                    pageData.forEach((item, index) => {
                        const category = mapCategory(item.category);

                        // Format date
                        let formattedDate = '-';
                        if (item.date_upload) {
                            const dateObj = new Date(item.date_upload);
                            formattedDate = dateObj.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
                        }

                        const row = `
                            <tr>
                                <td class="px-6 py-3 text-sm text-gray-700">${start + index + 1}</td>
                                <td class="px-6 py-3 text-sm text-gray-700">${item.title}</td>
                                <td class="px-6 py-3 text-sm text-gray-700">
                                    <span class="px-3 py-1 rounded-full text-sm font-semibold ${category.class}">${category.label}</span>
                                </td>
                                <td class="px-6 py-3 text-sm text-gray-700 prose prose-sm">${item.description}</td>
                                <td class="px-6 py-3 text-sm text-gray-700">
                                    ${item.image ? `<a href="${appUrl}/uploads/news/${item.image}" target="_blank" class="text-primary hover:underline">Lihat Gambar</a>` : '-'}
                                </td>
                                <td class="px-6 py-3 text-sm text-gray-700">${item.user.name}</td>
                                <td class="px-6 py-3 text-sm text-gray-700">${formattedDate}</td>
                                <td class="px-6 py-3 text-center text-sm">
                                    <button class="text-primary hover:text-primary-dark mx-1 edit-btn-news"  data-modal-target="#upsertNews"  data-id="${item.id}">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button class="text-red-500 hover:text-red-700 mx-1 delete-btn-news" data-id="${item.id}">
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
            const res = await apiGet(`${appUrl}/justitia/news/get/${id}`);
            const data = res.data?.data || {};

            $('#id').val(data.id || '');
            $('#title').val(data.title || '');
            $('#category').val(data.category || '');
            $('#description').summernote('code', data.description || '');
            $('#description').val(data.description || '');
            $('#description').next('.note-editor').css('border', '');

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
                responseData = await apiPost(`${appUrl}/justitia/news/update/${id}`, formData);
            } else {
                responseData = await apiPost(`${appUrl}/justitia/news/create`, formData);

            }

            if (responseData.data.code === 200) {
                showAlert('success', 'Data berhasil disimpan');
                $(`[data-close-modal="#upsertNews"]`).trigger('click');
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
                    const response = await axios.delete(`${appUrl}/justitia/news/delete/${id}`);
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

export default new NewsService();
