@extends('Layouts.Base')

@section('title', 'Dokumen Akreditas Kampus')

@section('content')
    <div class="min-h-screen font-body">
        <!-- Header -->
        <x-base-header headerTitle="Galeri Kampus" headerDescription="Abadikan foto-foto terkait kegiatan  kampus."
            headerAddButton="Upload foto" headerIcon="fas fa-file-alt" :buttonAdd="true" formId="#upsertGaleri"
            :buttonExport="false" exportId="exportGalery" addBtnId="addGaleri" />

        <!-- Body -->
        <x-base-body>
            <x-base-table initId="galeryTable" :search="true" :perPage="true" :pagination="true"
                searchPlaceholder="Cari foto kampus...">
                <x-slot name="thead">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">No
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Judul
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">File
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                            Diunggah oleh</th>
                        <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                            Tanggal Diuanggah</th>
                        <th scope="col" class="px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider">Aksi
                        </th>
                    </tr>
                </x-slot>

                <x-slot name="tbody">
                    <!-- Data akan diisi via jQuery -->
                    <tr id="profileTable_empty" class="border-b border-gray-200">
                        <td colspan="6" class="px-6 py-4 text-center text-gray-500">
                            <i class="fas fa-spinner fa-spin mr-2"></i> Memuat data...
                        </td>
                    </tr>
                </x-slot>
            </x-base-table>
        </x-base-body>

        <!-- Modal Upsert Galeri -->

        <x-base-modal modalId="upsertGaleri" modalTitle="Tambah Galeri" size="5xl" position="top">
            <form id="formUpsertGalery" enctype="multipart/form-data">
                @csrf
                <input type="hidden" id="id" name="id">

                <div class="px-6 py-4 space-y-4">
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700">Judul Foto</label>
                        <input type="text" name="name" id="name"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200"
                            placeholder="Masukkan judul foto..." required>
                    </div>
                    <div>
                        <label for="image" class="block text-sm font-medium text-gray-700">File Foto</label>
                        <input type="file" name="image" id="image" accept="image/*"
                            class="mt-1 block w-full text-sm text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-600 hover:file:bg-yellow-100">
                    </div>
                </div>
                <div class="px-6 py-3 border-t flex justify-end space-x-3">
                    <button type="button" onclick="$('#upsertGaleri').addClass('hidden')"
                        class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Batal</button>
                    <button type="submit"
                        class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Simpan</button>
                </div>
            </form>
        </x-base-modal>



    </div>
@endsection
