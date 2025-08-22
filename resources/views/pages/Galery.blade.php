@extends('Layouts.Base')

@section('title', 'Dokumen Akreditas Kampus')

@section('content')
<div class="min-h-screen font-body">
    <!-- Header -->
    <x-base-header
        headerTitle="Galeri Kampus"
        headerDescription="Abadikan foto-foto terkait kegiatan  kampus."
        headerAddButton="Upload foto"
        headerIcon="fas fa-file-alt"
        :buttonAdd="true"
        formId="#createGalery"
        :buttonExport="false"
        exportId="exportGalery"
    />

     <!-- Body -->
    <x-base-body>
        <x-base-table
            initId="galeryTable"
            :search="true"
            :perPage="true"
            :pagination="true"
            searchPlaceholder="Cari foto kampus..."
        >
            <x-slot name="thead">
                <tr>
                    <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">No</th>
                    <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Judul</th>
                    <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">File</th>
                    <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Diunggah oleh</th>
                    <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Tanggal Diuanggah</th>
                    <th scope="col" class="px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider">Aksi</th>
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
</div>
@endsection
