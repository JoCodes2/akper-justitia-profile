<header class="flex items-center justify-between px-6 py-3 bg-primary border-b border-gray-200">
    <div class="flex items-center gap-3">
        <button id="toggleSidebar" class="md:hidden text-gray-800 hover:text-primary">
            <i class="fas fa-bars text-lg"></i>
        </button>
    </div>

    <div class="flex items-center gap-4 ml-6 relative">
        <span class="text-white font-semibold">{{ Auth::user()->name ?? 'Halo Admin' }}</span>
        <button id="userMenuBtn" class=" rounded-full w-8 h-8 flex items-center bg-white justify-center text-white font-semibold text-sm">
            <i class="fas fa-user text-primary"></i>
        </button>
        <div id="userDropdown" class="hidden absolute top-12 right-0 bg-white border border-gray-200 rounded shadow-md w-32 text-sm">
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-gray-700">Logout</a>
        </div>
    </div>
</header>
