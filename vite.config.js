import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                // React UI
                'resources/css/app.css',
                'resources/js/index.jsx',

                // Jquery admin
                'resources/css/index.css',
                'resources/css/login.css',
                'resources/js/admin/admin.js',
            ],
            refresh: true,
        }),
        react(),
    ],
    build: {
        // Mengoptimalkan chunking
        rollupOptions: {
            output: {
                manualChunks: {
                    // Memisahkan vendor libraries
                    'react-vendor': ['react', 'react-dom'],
                    'jquery-vendor': ['jquery'],
                }
            }
        },
        // Mengoptimalkan ukuran bundle
        chunkSizeWarningLimit: 600,
        // Minify untuk production
        minify: 'esbuild',
    },
    // Optimasi resolve
    resolve: {
        alias: {
            '@': '/resources/js',
        }
    }
});
