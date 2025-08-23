<!-- Sidebar -->
<aside id="sidebar" class="bg-white w-56 flex flex-col p-4 text-gray-800 select-none border-r border-gray-200
transform -translate-x-full md:translate-x-0 fixed md:static inset-y-0 left-0 z-50 transition-transform duration-300">
    <div class="flex items-centerb  gap-3 mb-10">
        <img src="{{ asset('assets/image/logo-universitas.jpeg') }}" alt="Logo" class="w-8 h-8 rounded-full object-cover">
        <span class="font-heading font-bold text-base leading-5">AKPER Justitia</span>
    </div>

    <nav class="flex flex-col gap-4 text-sm font-medium">
        <a href="{{ url('/cms/dashboard') }}"
        class="flex items-center gap-3 rounded-md px-3 py-2 transition
        {{ request()->is('cms/dashboard') ? 'bg-primary text-white font-semibold' : 'hover:bg-gray-100' }}">
            <i class="fas fa-home text-base"></i>
            Dashboard
        </a>

        <a href="{{ url('/cms/profile') }}"
        class="flex items-center gap-3 rounded-md px-3 py-2 transition
        {{ request()->is('cms/profile') ? 'bg-primary text-white font-semibold' : 'hover:bg-gray-100' }}">
            <i class="fa-solid fa-building"></i>
            Profile Kampus
        </a>
         <a href="{{ url('/cms/leader') }}"
        class="flex items-center gap-3 rounded-md px-3 py-2 transition
        {{ request()->is('cms/leader') ? 'bg-primary text-white font-semibold' : 'hover:bg-gray-100' }}">
            <i class="fa-solid fa-book"></i>
            Pimpinan Kampus
        </a>
        <a href="{{ url('/cms/galery') }}"
        class="flex items-center gap-3 rounded-md px-3 py-2 transition
        {{ request()->is('cms/galery') ? 'bg-primary text-white font-semibold' : 'hover:bg-gray-100' }}">
            <i class="fa-solid fa-book"></i>
            Galeri
        </a>
         <a href="{{ url('/cms/news') }}"
        class="flex items-center gap-3 rounded-md px-3 py-2 transition
        {{ request()->is('cms/news') ? 'bg-primary text-white font-semibold' : 'hover:bg-gray-100' }}">
            <i class="fa-solid fa-book"></i>
            Berita
        </a>
    </nav>
</aside>
