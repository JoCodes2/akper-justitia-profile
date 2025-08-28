import $ from "jquery";
import "jquery-validation";
import "jquery-validation/dist/additional-methods";
import "summernote/dist/summernote-lite.css";
import "summernote/dist/summernote-lite.js";
import prodiService from "../service/prodi.service";

console.log('Prodi Controller loaded');

export default function prodiController() {
    prodiService.loadData();

    let isResetting = false;

    $(document).ready(function () {
        // Inisialisasi summernote
        $("#description").summernote({
            height: 150,
            toolbar: [
                ['style', ['bold', 'italic', 'underline', 'clear']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['insert', ['link', 'picture', 'video']],
                ['view', ['fullscreen', 'codeview', 'help']]
            ],
            callbacks: {
                onChange: function (contents) {
                    $(this).valid();
                },
                onBlur: function () {
                    $(this).valid();
                }
            }
        });

        // Validasi form
        $("#formProdi").validate({
            ignore: "",
            rules: {
                name: { required: true },
                level: { required: true },
                accreditation: { required: true },
            },
            messages: {
                name: "Wajib diisi.",
                level: "Level wajib diisi.",
                accreditation: "Akreditasi wajib diisi.",
            },
            errorPlacement: function (error, element) {
                error.addClass("text-red-500 text-sm mt-1");
                if (element.hasClass("summernote")) {
                    error.insertAfter(element.closest(".input-wrapper").find(".note-editor"));
                } else {
                    error.insertAfter(element);
                }
            },
            highlight: function (element) {
                const $el = $(element);
                if ($el.hasClass("summernote")) {
                    $el.siblings(".note-editor")
                        .css("border", "1px solid #f87171")
                        .removeClass("border-green-500");
                } else {
                    $el.addClass("border border-red-500")
                        .removeClass("border-green-500");
                }
            },
            unhighlight: function (element) {
                if (isResetting) {
                    const $el = $(element);
                    if ($el.hasClass("summernote")) {
                        $el.siblings(".note-editor").css("border", "");
                    } else {
                        $el.removeClass("border-red-500 border-green-500 border");
                    }
                    return;
                }
                const $el = $(element);
                if ($el.hasClass("summernote")) {
                    $el.siblings(".note-editor")
                        .css("border", "1px solid #4ade80")
                        .removeClass("border-red-500");
                } else {
                    $el.addClass("border border-green-500")
                        .removeClass("border-red-500");
                }
            }
        });
    });

    // Event untuk tombol tambah data
    $(document).on("click", "#addProdi", function () {
        isResetting = true;

        const $formProdi = $("#formProdi");
        if ($formProdi.length > 0 && $formProdi[0]) {
            $formProdi[0].reset();
        }
        $("#id").val("");

        if ($formProdi.length > 0 && $.fn.validate) {
            $formProdi.validate().resetForm();
        }

        // Reset summernote
        $("#description").summernote("code", "");
        $("#description").closest(".input-wrapper").find(".note-editor")
            .css("border", "")
            .removeClass("border-red-500 border-green-500");

        // Reset field lainnya
        $formProdi.find(".border-red-500, .border-green-500")
            .removeClass("border-red-500 border-green-500 border");

        if ($formProdi.length > 0 && $.fn.validate) {
            const validator = $formProdi.validate();
            validator.resetForm();
            $formProdi.find("label.error").remove();
            $formProdi.find(".valid").removeClass("valid");
        }

        isResetting = false;
    });

    function checkingEdit() {
        return $('#id').val() ? true : false;
    }

    // Submit form
    $('#formProdi').submit(function (e) {
        let code = $('#description').summernote('code');
        let cleanCode = code.replace(/<\/?p><br><\/p>/g, '').replace(/<\/?[^>]+(>|$)/g, "").trim();
        $('#description').val(cleanCode);
        e.preventDefault();
        prodiService.upsertProdi(e, checkingEdit);
    });

    // Event untuk edit button
    $(document).on('click', '.edit-btn', function (e) {
        e.preventDefault();

        // Pastikan kita berada di halaman prodi dengan memeriksa apakah form prodi ada
        const $form = $("#formProdi");
        if ($form.length === 0) {
            return; // Keluar jika form prodi tidak ditemukan (berarti kita di halaman lain)
        }

        const id = $(this).data('id');
        console.log('Edit clicked with ID:', id);

        // Reset form biar bersih
        $form[0].reset();
        if ($.fn.validate) {
            $form.validate().resetForm();
        }
        $form.find(".border-red-500, .border-green-500")
            .removeClass("border-red-500 border-green-500 border");
        $form.find("label.error").remove();

        $('#description').summernote('code', '');

        // 👉 Panggil service untuk ambil & isi data
        prodiService.getDataById(id, checkingEdit);
    });



    // Event untuk delete button
    $(document).on('click', '.delete-btn', function (e) {
        e.preventDefault();
        const id = $(this).data('id');
        console.log('Delete clicked with ID:', id);
        prodiService.deleteData(id);
    });
}
