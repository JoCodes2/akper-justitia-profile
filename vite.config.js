import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/index.jsx',

                'resources/css/index.css',
                'resources/js/admin/admin.js',
            ],
            refresh: true,
        }),
        react(),
    ],
});
