<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Akademi Keperawatan Justitia</title>
    <link rel="shortcut icon" href="{{ asset('assets/image/logo-universitas.png') }}">

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script>
        let appUrl = '{{ env('APP_URL') }}';
    </script>

    {{-- Google Fonts --}}
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
    {{-- Vite CSS & JS --}}
     <!-- Load Vite JS based on route -->
    @if(request()->is('cms/*') || request()->is('cms/login'))
         @vite(['resources/css/index.css', 'resources/js/admin/admin.js'])
    @else
        @viteReactRefresh
        @vite('resources/js/index.jsx')
    @endif


</head>
<body class="bg-gray-50 text-gray-800 flex flex-col min-h-screen font-body">
    <div class="flex flex-1 overflow-hidden">
        <!-- Sidebar -->
        @include('Layouts.Sidebar')

        <!-- Overlay -->
        <div id="overlay" class="fixed inset-0 bg-black bg-opacity-50 hidden z-40 md:hidden"></div>

        <!-- Content -->
        <div class="flex flex-col flex-1">
            <!-- Top Bar -->
            @include('Layouts.TopBar')
            <!-- Main -->
            <main class="flex-1 overflow-y-auto p-6">
                @yield('content')
            </main>

            <!-- Footer -->
            <footer class="bg-gray-900 text-gray-300 text-xs px-6 py-3 flex justify-between items-center select-none mt-auto">
                <p>© {{ date('Y') }} Akademi Keperawatan Justitia. By JoCodes.</p>
                <nav class="flex gap-4">
                    <a href="#" class="hover:text-white">Version 0.0.1</a>
                    <span>•</span>
                    <a href="#" class="hover:text-white">Support</a>
                    <span>•</span>
                    <a href="#" class="hover:text-white">Privacy</a>
                </nav>
            </footer>
        </div>
    </div>

    <div id="alert-container" class="fixed top-4 right-4 flex flex-col space-y-2"></div>
</body>

</html>
