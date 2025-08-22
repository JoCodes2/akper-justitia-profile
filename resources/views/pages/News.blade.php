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
        formId="#createGalery"
        :buttonExport="false"
        exportId="exportGalery"
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
                    <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Judul</th>
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
</div>
@endsection
