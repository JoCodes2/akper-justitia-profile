@extends('Layouts.Base')

@section('content')
    <div class="min-h-screen font-body">
        <!-- Header -->
        <x-base-header headerTitle="Pengguna" headerDescription="Kelola data Pengguna." headerAddButton="Tambah Data"
            headerIcon="fas fa-file-alt" :buttonAdd="true" formId="#upsertUser" :buttonExport="false" exportId="exportUser"
            addBtnId="addUser" />

        <!-- Body -->
        <x-base-body>
            <x-base-table initId="userTable" :search="true" :perPage="true" :pagination="true"
                searchPlaceholder="Cari data pengguna...">
                <x-slot name="thead">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">No
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                            Nama</th>
                        <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Nama
                            Cantik</th>
                        <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                            Sebagai</th>
                        <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                            Password
                        </th>
                        <th scope="col" class="px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider">Aksi
                        </th>
                    </tr>
                </x-slot>

                <x-slot name="tbody">
                </x-slot>
            </x-base-table>
        </x-base-body>

        <x-base-modal modalId="upsertUser" modalTitle="Form Data User" size="5xl" position="top">
            <form id="formUser" method="POST" enctype="multipart/form-data" autocomplete="off" novalidate="novalidate"
                action="javascript:void(0);" class="space-y-5">
                @csrf
                <input type="hidden" id="id" name="id">

                <div class="mb-0">
                    <div class="control-wrapper">
                        <label class="input-label block font-semibold text-gray-700 mb-1" for="name">Nama </label>
                        <div class="input-wrapper ">
                            <input type="text" id="name" name="name" placeholder="Masukkan nama" required
                                class="block w-full text-sm text-gray-700 border  border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary px-3 py-2 transition-colors">
                        </div>
                    </div>
                </div>
                <div class="mb-0">
                    <div class="control-wrapper">
                        <label class="input-label block font-semibold text-gray-700 mb-1" for="username">Nama Cantik
                        </label>
                        <div class="input-wrapper ">
                            <input type="text" id="username" name="username" placeholder="Masukkan username" required
                                class="block w-full text-sm text-gray-700 border  border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary px-3 py-2 transition-colors">
                        </div>
                    </div>
                </div>
                <div class="mb-0">
                    <div class="control-wrapper">
                        <label class="input-label block font-semibold text-gray-700 mb-1" for="password">Password</label>
                        <div class="input-wrapper relative">
                            <input type="password" id="password" name="password" placeholder="Masukkan password" required
                                class="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary px-3 py-2 pr-10 transition-colors">
                            <button type="button" class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 password-toggle" data-target="password">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="mb-0">
                    <div class="control-wrapper">
                        <label class="input-label block font-semibold text-gray-700 mb-1" for="password_confirmation">Konfirmasi Password</label>
                        <div class="input-wrapper relative">
                            <input type="password" id="password_confirmation" name="password_confirmation" placeholder="Konfirmasi password" required
                                class="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary px-3 py-2 pr-10 transition-colors">
                            <button type="button" class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 password-toggle" data-target="password_confirmation">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <input type="hidden" id="role" name="role" value="user">

                <div class="control-wrapper flex justify-end gap-2 pt-4 border-t border-gray-200">
                    <button type="button" data-close-modal="#upsertUser"
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
