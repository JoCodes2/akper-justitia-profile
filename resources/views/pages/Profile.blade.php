@extends('Layouts.Base')

@section('content')
    <x-base-header
        headerTitle="Manajemen Profil Kampus"
        headerDescription="Kelola data visi, misi, sejarah, dan struktur organisasi kampus."
        headerAddButton="Buat Profile Kampus"
        :buttonAdd="true"
        :buttonDelete="true"
        deleteBtnId="deleteProfile"
        headerDeleteButton="Hapus Profile Kampus"
        formId="#upsertData"
        :buttonExport="false"
        exportId="exportProfile"
        addBtnId="addProfile"
    />

    <x-base-body>
        <div class="space-y-8">

            {{-- Organization Structure Card (Top) --}}
            <div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div class="p-6">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-2xl font-bold text-gray-800">Struktur Organisasi</h2>
                        <div class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            Informasi Penting
                        </div>
                    </div>

                    <div class="flex justify-center mt-4">
                        <div class="relative w-full" style="max-width: 700px">
                            <img id="profileStructure" src="" alt="Struktur Organisasi"
                                 class="mx-auto w-full max-h-[400px] object-contain rounded-lg border border-gray-200 shadow-sm hidden">
                            <div id="profileStructurePlaceholder" class="text-center py-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                                <svg class="mx-auto h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                <h3 class="mt-2 text-base font-medium text-gray-700">Belum ada data struktur organisasi</h3>
                                <p class="mt-1 text-sm text-gray-500">Tambahkan gambar struktur organisasi kampus</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {{-- Visi & Misi Perguruan Tinggi --}}
            <div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 mb-6">
                <div class="p-6">
                    <div class="flex items-center mb-4">
                        <div class="bg-indigo-500 p-2 rounded-lg mr-3">
                            <svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <h2 class="text-xl font-bold text-gray-800">Visi & Misi Perguruan Tinggi</h2>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {{-- Vision --}}
                        <div class="pl-12">
                            <h3 class="text-lg font-semibold text-gray-700 mb-2">Visi</h3>
                            <div id="profileVision" class="prose prose-sm max-w-none text-gray-700">
                                <p class="text-gray-600 italic">-</p>
                            </div>
                        </div>

                        {{-- Mission --}}
                        <div class="pl-12">
                            <h3 class="text-lg font-semibold text-gray-700 mb-2">Misi</h3>
                            <div id="profileMission" class="prose prose-sm max-w-none text-gray-700">
                                <p class="text-gray-600 italic">-</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {{-- Visi & Misi Keilmuan --}}
            <div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 mb-6">
                <div class="p-6">
                    <div class="flex items-center mb-4">
                        <div class="bg-indigo-400 p-2 rounded-lg mr-3">
                            <svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <h2 class="text-xl font-bold text-gray-800">Visi & Misi Keilmuan</h2>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {{-- Vision --}}
                        <div class="pl-12">
                            <h3 class="text-lg font-semibold text-gray-700 mb-2">Visi</h3>
                            <div id="profileVision2" class="prose prose-sm max-w-none text-gray-700">
                                <p class="text-gray-600 italic">-</p>
                            </div>
                        </div>

                        {{-- Mission --}}
                        <div class="pl-12">
                            <h3 class="text-lg font-semibold text-gray-700 mb-2">Misi</h3>
                            <div id="profileMission2" class="prose prose-sm max-w-none text-gray-700">
                                <p class="text-gray-600 italic">-</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {{-- History Card (Bottom) --}}
            <div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div class="p-6">
                    <div class="flex items-center mb-4">
                        <div class="bg-amber-500 p-2 rounded-lg mr-3">
                            <svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h2 class="text-xl font-bold text-gray-800">Sejarah</h2>
                    </div>
                    <div class="pl-12">
                        <div id="profileHistory" class="prose prose-sm max-w-none text-gray-700 profile-content">
                            <p class="text-gray-600 italic">-</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </x-base-body>

    <x-base-modal modalId="upsertData" modalTitle="Tambah Profil Kampus" size="5xl" position="top">
        <form id="formProfile" method="POST" enctype="multipart/form-data" autocomplete="off" novalidate="novalidate" class="space-y-5">
            @csrf
            <input type="hidden" id="id" name="id">

            {{-- Visi & Misi Perguruan Tinggi --}}
            <div class="mb-6">
                <h3 class="text-lg font-bold text-primary mb-4 border-b pb-2">
                    Visi & Misi Perguruan Tinggi
                </h3>

                <div class="control-wrapper mb-4">
                    <label class="input-label block font-semibold text-gray-700 mb-1" for="vision">Visi</label>
                    <div class="input-wrapper">
                        <textarea
                            id="vision"
                            name="vision"
                            class="summernote"></textarea>
                    </div>
                </div>

                <div class="control-wrapper">
                    <label class="input-label block font-semibold text-gray-700 mb-1" for="mission">Misi</label>
                    <div class="input-wrapper">
                        <textarea
                            id="mission"
                            name="mission"
                            class="summernote"></textarea>
                    </div>
                </div>
            </div>

            {{-- Visi & Misi Keilmuan --}}
            <div class="mb-6">
                <h3 class="text-lg font-bold text-primary mb-4 border-b pb-2">
                    Visi & Misi Keilmuan
                </h3>

                <div class="control-wrapper mb-4">
                    <label class="input-label block font-semibold text-gray-700 mb-1" for="vision1">Visi</label>
                    <div class="input-wrapper">
                        <textarea
                            id="vision2"
                            name="vision2"
                            class="summernote"></textarea>
                    </div>
                </div>

                <div class="control-wrapper">
                    <label class="input-label block font-semibold text-gray-700 mb-1" for="mission1">Misi</label>
                    <div class="input-wrapper">
                        <textarea
                            id="mission2"
                            name="mission2"
                            class="summernote"></textarea>
                    </div>
                </div>
            </div>

             {{-- Sejarah--}}
            <div class="mb-6">
                <h3 class="text-lg font-bold text-primary mb-4 border-b pb-2">
                    Sejarah Singkat
                </h3>

                <div class="control-wrapper mb-4">
                    <div class="input-wrapper">
                        <textarea
                            id="history"
                            name="history"
                            class="summernote" ></textarea>
                    </div>
                </div>
            </div>

             <div class="mb-6">
                <h3 class="text-lg font-bold text-primary mb-4 border-b pb-2">
                    Struktur Organisasi
                </h3>
                <div class="input-wrapper ">
                    <input
                        type="file"
                        name="structure"
                        id="structure"
                        class="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-dark transition"
                    >
                </div>
                <p class="text-xs text-gray-500 mt-1">Format: JPG, JPEG, PNG. Maksimal 2MB.</p>
            </div>

            <div class="control-wrapper flex justify-end gap-2 pt-4 border-t border-gray-200">
                <button type="button" data-close-modal="#upsertData" class="bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm px-5 py-2 rounded-lg shadow-sm transition">Batal</button>
                <button type="submit" class="bg-primary hover:bg-primary-dark text-white text-sm px-5 py-2 rounded-lg shadow-sm transition">Simpan</button>
            </div>
        </form>
    </x-base-modal>
@endsection
