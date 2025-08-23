@extends('Layouts.Base')

@section('content')
<div class="min-h-screen font-body">
    <!-- Header -->
    <x-base-header
        headerTitle="Pimpinan Kampus"
        headerDescription="Kelola data pimpinan  kampus."
        headerAddButton="Tambah Data"
        headerIcon="fas fa-file-alt"
        :buttonAdd="true"
        formId="#upsertLeader"
        :buttonExport="false"
        exportId="exportGalery"
        addBtnId="addLeader"
    />

     <!-- Body -->
    <x-base-body>
        <x-base-table
            initId="leaderTable"
            :search="true"
            :perPage="true"
            :pagination="true"
            searchPlaceholder="Cari data pimpinan kampus..."
        >
            <x-slot name="thead">
                <tr>
                    <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">No</th>
                    <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Nama</th>
                     <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Jabatan</th>
                    <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">NIP</th>
                    <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Foto</th>
                    <th scope="col" class="px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider">Aksi</th>
                </tr>
            </x-slot>

            <x-slot name="tbody">
            </x-slot>
        </x-base-table>
    </x-base-body>

    <x-base-modal modalId="upsertLeader" modalTitle="Form Data Pimpinan" size="5xl" position="top">
        <form id="formNews" method="POST" enctype="multipart/form-data" autocomplete="off" novalidate="novalidate" class="space-y-5">
            @csrf
            <input type="hidden" id="id" name="id">

            <div class="mb-0">
                <div class="control-wrapper">
                    <label class="input-label block font-semibold text-gray-700 mb-1" for="name">Nama Pimpinan </label>
                    <div class="input-wrapper ">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Masukkan nama pimpinan"
                            required
                            class="block w-full text-sm text-gray-700 border  border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary px-3 py-2 transition-colors"
                        >
                    </div>
                </div>
            </div>
             <div class="mb-6">
                <div class="control-wrapper">
                    <label class="input-label block font-semibold text-gray-700 mb-1" for="nip">NIP </label>
                    <div class="input-wrapper ">
                        <input
                            type="text"
                            id="nip"
                            name="nip"
                            placeholder="Masukkan NIP pimpinan"
                            required
                            class="block w-full text-sm text-gray-700 border  border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary px-3 py-2 transition-colors"
                        >
                    </div>
                </div>
            </div>
            <div class="mb-6">
                <div class="control-wrapper">
                    <label class="input-label block font-semibold text-gray-700 mb-1" for="position">Jabatan </label>
                    <div class="input-wrapper ">
                        <input
                            type="text"
                            id="position"
                            name="position"
                            placeholder="Masukkan Jabatan pimpinan"
                            required
                            class="block w-full text-sm text-gray-700 border  border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary px-3 py-2 transition-colors"
                        >
                    </div>
                </div>
            </div>
            <div class="mb-6">
                <label class="input-label block font-semibold text-gray-700 mb-1" for="image" id="imageTitle">Dokumentasi Berita </label>
                <div class="input-wrapper">
                    <input
                        type="file"
                        name="image"
                        id="image"
                        class="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-dark transition"
                    >
                </div>
                <p class="text-xs text-gray-500 mt-1">Format: JPG, JPEG, PNG. Maksimal 2MB.</p>
            </div>

            <div class="control-wrapper flex justify-end gap-2 pt-4 border-t border-gray-200">
                <button type="button" data-close-modal="#upsertLeader" class="bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm px-5 py-2 rounded-lg shadow-sm transition">
                    Batal
                </button>
                <button type="submit" class="bg-primary hover:bg-primary-dark text-white text-sm px-5 py-2 rounded-lg shadow-sm transition">
                    Simpan
                </button>
            </div>
        </form>
    </x-base-modal>

</div>
@endsection
