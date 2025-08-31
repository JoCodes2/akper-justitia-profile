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
                'resources/css/login.css',
                'resources/js/admin/admin.js',
            ],
            refresh: true,
        }),
        react({
            jsxRuntime: 'automatic',
        }),
    ],

    build: {
        outDir: 'public/build',
        sourcemap: process.env.NODE_ENV !== 'production',
        cssCodeSplit: true,
        cssMinify: 'esbuild',

        rollupOptions: {
            input: {
                frontend: 'resources/js/index.jsx',
                backend: 'resources/js/admin/admin.js',
            },
            output: {
                manualChunks: (id) => {
                    if (id.includes('node_modules')) {
                        if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
                            return 'react-vendor';
                        }
                        if (id.includes('jquery') || id.includes('jquery-validation')) {
                            return 'jquery-vendor';
                        }
                        if (id.includes('axios')) {
                            return 'axios-vendor';
                        }
                        if (id.includes('summernote')) {
                            return 'editor-vendor';
                        }
                        if (id.includes('@fortawesome/fontawesome-free')) {
                            return;
                        }
                        return 'shared-vendor';
                    }
                },
                chunkFileNames: 'assets/[name]-[hash].js',
                entryFileNames: 'assets/[name]-[hash].js',
                assetFileNames: 'assets/[name]-[hash][extname]',
            },
        },

        chunkSizeWarningLimit: 2000, // Increase limit untuk handle large images
        minify: 'esbuild',
        target: 'es2020',
        reportCompressedSize: false,
    },

    resolve: {
        alias: {
            '@': '/resources/js',
            '~': '/resources',
        },
    },

    server: {
        host: '0.0.0.0',
        port: 3000,
        strictPort: true,
        hmr: {
            host: 'localhost',
        },
    },

    css: {
        devSourcemap: process.env.NODE_ENV !== 'production',
    },

    define: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    },
});
