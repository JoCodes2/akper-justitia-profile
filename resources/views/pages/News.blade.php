@extends('Layouts.Base')

@section('content')
<div class="min-h-screen font-body">
    <!-- Header -->
    <x-base-header
        headerTitle="Berita Kampus"
        headerDescription="Berita terkait kegiatan  kampus."
        headerAddButton="Buat Berita"
        headerIcon="fas fa-file-alt"
        :buttonAdd="true"
        formId="#upsertNews"
        :buttonExport="false"
        exportId="exportGalery"
        addBtnId="addNews"
    />

     <!-- Body -->
    <x-base-body>
        <x-base-table
            initId="newsTable"
            :search="true"
            :perPage="true"
            :pagination="true"
            searchPlaceholder="Cari berita kampus..."
        >
            <x-slot name="thead">
                <tr>
                    <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">No</th>
                    <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Judul Berita</th>
                     <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Cetagori</th>
                    <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Deskripsi Berita</th>
                    <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">File</th>
                    <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Diunggah oleh</th>
                    <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Tanggal Diuanggah</th>
                    <th scope="col" class="px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider">Aksi</th>
                </tr>
            </x-slot>

            <x-slot name="tbody">
            </x-slot>
        </x-base-table>
    </x-base-body>

    <x-base-modal modalId="upsertNews" modalTitle="Form Data Berita" size="5xl" position="top">
        <form id="formNews" method="POST" enctype="multipart/form-data" autocomplete="off" novalidate="novalidate" class="space-y-5">
            @csrf
            <input type="hidden" id="id" name="id">

            <div class="mb-0">
                <div class="control-wrapper">
                    <label class="input-label block font-semibold text-gray-700 mb-1" for="title">Judul Berita </label>
                    <div class="input-wrapper ">
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Masukkan judul berita"
                            required
                            class="block w-full text-sm text-gray-700 border  border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary px-3 py-2 transition-colors"
                        >
                    </div>
                </div>
            </div>
           <div class="mb-6">
                <div class="control-wrapper">
                    <label class="input-label block font-semibold text-gray-700 mb-1" for="category">Kategori </label>
                    <div class="input-wrapper">
                        <select
                            name="category"
                            id="category"
                            required
                            class="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary px-3 py-2 transition-colors"
                        >
                            <option value="" selected disabled>-- Pilih Kategori --</option>
                            <option value="announcement">Pengumuman</option>
                            <option value="event">Event</option>
                            <option value="news">Berita</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="mb-6">
                <div class="control-wrapper">
                    <label class="input-label block font-semibold text-gray-700 mb-1" for="description">Deskripsi Berita </label>
                <div class="input-wrapper">
                        <textarea
                            id="description"
                            name="description"
                            class="summernote" ></textarea>
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

                <div class="mb-6">
                    <div class="control-wrapper">
                        <label class="input-label block font-semibold text-gray-700 mb-1" for="date_upload">Tanggal Diuanggah</label>
                        <div class="input-wrapper">
                            <input type="date" id="date_upload" name="date_upload" required
                                class="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary px-3 py-2 transition-colors">
                        </div>
                    </div>
                </div>

                <div class="control-wrapper flex justify-end gap-2 pt-4 border-t border-gray-200">
                <button type="button" data-close-modal="#upsertNews" class="bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm px-5 py-2 rounded-lg shadow-sm transition">
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
