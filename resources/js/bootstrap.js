import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Definisikan appUrl secara global
window.appUrl = window.location.origin; // Atau URL yang sesuai dengan aplikasi Anda
