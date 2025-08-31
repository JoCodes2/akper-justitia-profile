import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                // Frontend React
                'resources/css/app.css',
                'resources/js/index.jsx',

                // Admin jQuery
                'resources/css/index.css',
                'resources/css/login.css',
                'resources/js/admin/admin.js',
            ],
            refresh: true,
        }),
        react(),
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        if (id.includes('react')) return 'react';
                        if (id.includes('jquery')) return 'jquery';
                        if (id.includes('axios')) return 'axios';
                        if (id.includes('summernote')) return 'summernote';
                        if (id.includes('@fortawesome')) return 'fontawesome';
                        return 'vendor';
                    }
                },
            },
        },
        // Biar warning size lebih longgar
        chunkSizeWarningLimit: 2000,
    },
});
