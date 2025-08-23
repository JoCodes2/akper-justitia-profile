import $ from "jquery";
import "jquery-validation";
import "summernote/dist/summernote-lite.css";
import "summernote/dist/summernote-lite.js";
import newsService from "../service/news.service";


export default function newsController() {
    newsService.loadData();
    let isResetting = false;
    $(document).ready(function () {
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

        $("#formNews").validate({
            ignore: "",
            rules: {
                title: { required: true },
                description: { summernoteRequired: true },
                category: { required: true },
                image: {
                    required: true,
                    fileextension: "jpg|jpeg|png",
                    filesize: 2 * 1024 * 1024
                }
            },
            messages: {
                title: "Judul berita wajib diisi.",
                mission: "Deskripsi berita wajib diisi.",
                description: "Deskripsi berita wajib diisi.",
                category: "Kategori berita wajib diisi.",
                image: {
                    required: "Dokumentasi berita wajib diunggah.",
                    fileextension: "Format file harus JPG atau PNG.",
                    filesize: "Ukuran file maksimal 2MB."
                }
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
                    // Saat reset, hapus semua border
                    const $el = $(element);
                    if ($el.hasClass("summernote")) {
                        $el.siblings(".note-editor").css("border", "");
                    } else {
                        $el.removeClass("border-red-500 border-green-500 border");
                    }
                    return;
                }
                // Mode normal → kasih border hijau
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
    $(document).on("click", "#addNews", function () {
        isResetting = true;

        $("#formNews")[0].reset();
        $("#formNews").validate().resetForm();

        $("#description").each(function () {
            $(this).summernote("code", "");
            $(this).closest(".input-wrapper").find(".note-editor")
                .css("border", "")
                .removeClass("border-red-500 border-green-500");
        });

        $("#image").val("");
        $("#description").val("");
        $("#formNews").find(".border-red-500, .border-green-500")
            .removeClass("border-red-500 border-green-500 border");

        const validator = $("#formNews").validate();
        validator.resetForm();
        $("#formNews").find("label.error").remove();

        $("#formNews").find(".valid").removeClass("valid");
        isResetting = false;
    });

    function checkingEdit() {
        return $('#id').val() ? true : false
    }

    $('#formNews').submit(function (e) {
        e.preventDefault();
        newsService.upsertNews(e, checkingEdit)
    })

    $(document).on('click', '.edit-btn', function () {
        const id = $(this).data('id');
        newsService.getDataById(id, checkingEdit);
    });

    $(document).on('click', '.delete-btn', function () {
        const id = $(this).data('id')
        newsService.deleteData(id)
    })
}
