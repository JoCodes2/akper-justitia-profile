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
        react({
            jsxRuntime: 'automatic',
        }),
    ],

    build: {
        outDir: 'public/build',
        sourcemap: false,
        cssCodeSplit: true,
        cssMinify: 'esbuild',

        rollupOptions: {
            input: {
                // === Frontend bundle ===
                frontend: 'resources/js/index.jsx',
                frontendCss: 'resources/css/app.css',

                // === Backend bundle ===
                backend: 'resources/js/admin/admin.js',
                backendCss: 'resources/css/index.css',
                loginCss: 'resources/css/login.css',
            },
            output: {
                manualChunks: (id) => {
                    if (id.includes('node_modules')) {
                        if (id.includes('react') || id.includes('react-dom')) {
                            return;
                        }
                        if (id.includes('jquery') || id.includes('jquery-validation')) {
                            return 'jquery-vendor';
                        }
                        if (id.includes('axios')) {
                            return 'axios-vendor';
                        }
                        if (id.includes('summernote')) {
                            return;
                        }
                        if (id.includes('@fortawesome/fontawesome-free')) {
                            return;
                        }
                        return 'shared-vendor';
                    }
                },
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name.endsWith('.css')) {
                        return 'assets/css/[name]-[hash][extname]';
                    }
                    return 'assets/[name]-[hash][extname]';
                },
            },
        },

        chunkSizeWarningLimit: 2000,
        minify: 'esbuild',
        target: 'es2020',
        reportCompressedSize: true,
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
        devSourcemap: false,
    },
});
