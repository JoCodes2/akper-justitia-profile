<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Login | Akademi Keperawatan Justitia</title>
    <link rel="shortcut icon" href="{{ asset('assets/image/logo-universitas.png') }}">

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script>
        let appUrl = '{{ env('APP_URL') }}';
    </script>

    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    {{-- Vite CSS & JS --}}
    @vite(['resources/css/index.css', 'resources/css/login.css', 'resources/js/admin/admin.js'])

</head>

<body class="p-4">
    <!-- Floating Background Shapes -->
    <div class="login-floating-shapes">
        <div class="login-shape"></div>
        <div class="login-shape"></div>
        <div class="login-shape"></div>
    </div>

    <!-- Login Card -->
    <div class="login-card w-full max-w-md rounded-2xl overflow-hidden login-animate-fade-in-up">
        <!-- Header Section dengan Gradient -->
        <div class="login-gradient-header p-8 text-center relative">
            <!-- Background Pattern -->
            <div class="absolute inset-0 opacity-10">
                <div class="absolute top-4 right-4 w-16 h-16 border-2 border-white rounded-full"></div>
                <div class="absolute bottom-4 left-4 w-12 h-12 border-2 border-white rounded-full"></div>
            </div>

            <!-- Logo -->
            <div
                class="login-logo-container inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-6 relative z-10 overflow-hidden">
                <img src="{{ asset('assets/image/logo-universitas.png') }}" alt="Logo"
                    class="w-16 h-16 object-contain">
            </div>

            <!-- Welcome Text -->
            <div class="relative z-10">
                <h1 class="text-3xl font-heading font-bold text-white mb-3">Selamat Datang</h1>
                <p class="text-blue-100 text-lg opacity-90">Administrator</p>
            </div>
        </div>

        <!-- Form Section -->
        <div class="p-8">
            <form class="space-y-6" method="POST" enctype="multipart/form-data" autocomplete="off"
                novalidate="novalidate" id="formLogin">
                @csrf
                <!-- Username Field -->
                <div class="relative login-animate-fade-in-up login-animate-delay-1">
                    <div
                        class="login-input-container absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <i class="fas fa-user login-input-icon text-primary text-lg"></i>
                    </div>
                    <input type="text" id="username" name="username"
                        class="login-form-input w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-primary"
                        placeholder="Username">
                </div>

                <!-- Password Field -->
                <div class="relative login-animate-fade-in-up login-animate-delay-2">
                    <div
                        class="login-input-container absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <i class="fas fa-lock login-input-icon text-primary text-lg"></i>
                    </div>
                    <input type="password" id="password" name="password"
                        class="login-form-input w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-primary"
                        placeholder="Password">
                </div>

                <!-- Login Button -->
                <button type="submit"
                    class="login-btn w-full py-4 px-6 text-white font-heading font-semibold text-lg rounded-xl focus:outline-none focus:ring-4 focus:ring-primary/30 login-animate-fade-in-up login-animate-delay-4">
                    <i class="fas fa-sign-in-alt mr-3"></i>
                    Masuk ke Dashboard
                </button>
            </form>

            <!-- Footer -->
            <div class="mt-8 pt-6 border-t border-gray-100 text-center login-animate-fade-in-up">
                <p class="text-sm text-gray-500">
                    © 2025 Akademi Keperawatan Justitia
                    <br>
                    <span class="text-xs text-gray-400">V.0.0.1 • JoCodes</span>
                </p>
            </div>
        </div>
    </div>
    <div id="alert-container" class="fixed top-4 right-4 flex flex-col space-y-2"></div>
</body>

</html>
