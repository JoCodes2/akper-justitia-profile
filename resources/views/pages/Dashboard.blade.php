@extends('Layouts.Base')

@section('content')
    <!-- Header -->
    <x-base-header
        headerTitle="Dashboard"
        headerDescription="Selamat datang kembali, Admin 👋"
        headerAddButton="Tambah Data"
        :buttonAdd="false"
        formId="#createData"
        :buttonExport="false"
        exportId="exportProfile"
    />

    <!-- Body -->
    <x-base-body>
        <!-- Statistik Card -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
            <!-- Berita -->
            <div class="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
                <div class="flex items-center">
                    <div class="p-3 rounded-full bg-blue-100 text-blue-600">
                        <i class="fas fa-newspaper text-xl"></i>
                    </div>
                    <div class="ml-4">
                        <p class="text-sm text-gray-500">Total Berita</p>
                        <h3 id="totalNews" class="text-xl font-semibold">0</h3>
                    </div>
                </div>
            </div>

            <!-- Galeri -->
            <div class="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
                <div class="flex items-center">
                    <div class="p-3 rounded-full bg-green-100 text-green-600">
                        <i class="fas fa-images text-xl"></i>
                    </div>
                    <div class="ml-4">
                        <p class="text-sm text-gray-500">Total Galeri</p>
                        <h3 id="totalGalery" class="text-xl font-semibold">0</h3>
                    </div>
                </div>
            </div>
        </div>

        <!-- List Berita Terbaru -->
        <div class="bg-white p-6 rounded-2xl shadow">
            <h2 class="text-lg font-semibold mb-4">Berita Terbaru</h2>
            <ul id="latestNews" class="divide-y divide-gray-100">
                <li class="py-3 text-gray-500 text-sm">Memuat berita...</li>
            </ul>
        </div>

    </x-base-body>
@endsection
