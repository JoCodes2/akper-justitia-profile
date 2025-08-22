import '../bootstrap';
import '../../css/index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';


import $ from 'jquery';
window.$ = window.jQuery = $;

import initTemplateUI from './initTemplateUI.js';
import profileController from "./controller/profile.controller.js";
import galeriController from './controller/galeri.controller.js';
$(function () {
    initTemplateUI();
    profileController();
    galeriController();
});

