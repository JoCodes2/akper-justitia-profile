import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: {
                react: [
                    'resources/css/app.css',
                    'resources/js/index.jsx', // React UI
                ],
                jquery: [
                    'resources/css/index.css',
                    'resources/css/login.css',
                    'resources/js/admin/admin.js', // jQuery admin
                ],
            },
            refresh: true,
        }),
        react({
            jsxRuntime: 'automatic',
        }),
    ],
    build: {
        outDir: 'public/build',
        rollupOptions: {
            output: {
                manualChunks: {
                    // React-side vendor
                    'react-vendor': ['react', 'react-dom', 'react-router-dom'],

                    // jQuery-side vendor
                    'jquery-vendor': ['jquery', 'jquery-validation'],

                    // Shared libraries
                    'axios-vendor': ['axios'],

                    // Big libraries (biar nggak numpuk)
                    'editor-vendor': ['summernote'],
                    'icons-vendor': ['@fortawesome/fontawesome-free'],
                },
            },
        },
        chunkSizeWarningLimit: 600,
        minify: 'esbuild',
    },
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
});
