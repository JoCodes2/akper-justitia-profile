@extends('Layouts.Base')

@section('content')
    <div class="min-h-screen font-body">
        <!-- Header -->
        <x-base-header headerTitle="Program Studi" headerDescription="Kelola data Prodi." headerAddButton="Tambah Data"
            headerIcon="fas fa-file-alt" :buttonAdd="true" formId="#upsertProdi" :buttonExport="false" exportId="exportProdi"
            addBtnId="addProdi" />

        <!-- Body -->
        <x-base-body>
            <x-base-table initId="prodiTable" :search="true" :perPage="true" :pagination="true"
                searchPlaceholder="Cari data pengguna...">
                <x-slot name="thead">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">No
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                            Nama</th>
                        <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                            Jenjang</th>
                        <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                            Akreditas</th>
                        <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                            Deskripsi
                        </th>
                        <th scope="col" class="px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider">Aksi
                        </th>
                    </tr>
                </x-slot>

                <x-slot name="tbody">
                </x-slot>
            </x-base-table>
        </x-base-body>

        <x-base-modal modalId="upsertProdi" modalTitle="Form Data Prodi" size="5xl" position="top">
            <form id="formProdi" method="POST" enctype="multipart/form-data" autocomplete="off" novalidate="novalidate"
                action="javascript:void(0);" class="space-y-5">
                @csrf
                <input type="hidden" id="id" name="id">

                <div class="mb-0">
                    <div class="control-wrapper">
                        <label class="input-label block font-semibold text-gray-700 mb-1" for="name">Nama Prodi </label>
                        <div class="input-wrapper ">
                            <input type="text" id="name" name="name" placeholder="Masukkan Prodi" required
                                class="block w-full text-sm text-gray-700 border  border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary px-3 py-2 transition-colors">
                        </div>
                    </div>
                </div>
                <div class="mb-0">
                    <div class="control-wrapper">
                        <label class="input-label block font-semibold text-gray-700 mb-1" for="level">Jenjang
                        </label>
                        <div class="input-wrapper ">
                            <input type="text" id="level" name="level" placeholder="Masukkan jenjang" required
                                class="block w-full text-sm text-gray-700 border  border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary px-3 py-2 transition-colors">
                        </div>
                    </div>
                </div>
                <div class="mb-0">
                    <div class="control-wrapper">
                        <label class="input-label block font-semibold text-gray-700 mb-1" for="accreditation">Akreditas
                        </label>
                        <div class="input-wrapper ">
                            <input type="text" id="accreditation" name="accreditation" placeholder="Masukkan akreditasi"
                                required
                                class="block w-full text-sm text-gray-700 border  border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary px-3 py-2 transition-colors">
                        </div>
                    </div>
                </div>
                <div class="mb-0">
                    <div class="control-wrapper">
                        <label class="input-label block font-semibold text-gray-700 mb-1" for="description">Deskripsi
                        </label>
                        <div class="input-wrapper ">
                            <!-- Ganti input dengan textarea untuk summernote -->
                            <textarea id="description" name="description" placeholder="Masukkan deskripsi"
                                class="summernote block w-full text-sm text-gray-700 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary px-3 py-2 transition-colors"></textarea>
                        </div>
                    </div>
                </div>

                <div class="control-wrapper flex justify-end gap-2 pt-4 border-t border-gray-200">
                    <button type="button" data-close-modal="#upsertProdi"
                        class="bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm px-5 py-2 rounded-lg shadow-sm transition">
                        Batal
                    </button>
                    <button type="submit"
                        class="bg-primary hover:bg-primary-dark text-white text-sm px-5 py-2 rounded-lg shadow-sm transition">
                        Simpan
                    </button>
                </div>
            </form>
        </x-base-modal>

    </div>
@endsection
