import $ from "jquery";
import "jquery-validation";
import "summernote/dist/summernote-lite.css";
import "summernote/dist/summernote-lite.js";

import profileService from "../service/profile.service";

export default function profileController() {
    profileService.loadData();

    $.validator.addMethod(
        "filesize",
        function (value, element, param) {
            if (this.optional(element) || !element.files.length) return true;
            return element.files[0].size <= param;
        },
        "File terlalu besar."
    );

    $.validator.addMethod(
        "fileextension",
        function (value, element, param) {
            if (this.optional(element) || !element.files.length) return true;
            const allowed = param.split("|");
            const ext = value.split(".").pop().toLowerCase();
            return allowed.includes(ext);
        },
        "Format file tidak diizinkan."
    );

    $.validator.addMethod(
        "summernoteRequired",
        function (value, element) {
            let content = $(element).summernote("code")
                .replace(/<p><br><\/p>/gi, "")
                .replace(/<p><\/p>/gi, "")
                .trim();
            return content.length > 0;
        },
        "Kolom ini wajib diisi."
    );
    let isResetting = false;
    $(document).ready(function () {
        $("#vision, #mission, #history").summernote({
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

        $("#formProfile").validate({
            ignore: "",
            rules: {
                vision: { summernoteRequired: true },
                mission: { summernoteRequired: true },
                history: { summernoteRequired: true },
                structure: {
                    required: true,
                    fileextension: "jpg|jpeg|png",
                    filesize: 2 * 1024 * 1024
                }
            },
            messages: {
                vision: "Visi wajib diisi.",
                mission: "Misi wajib diisi.",
                history: "Sejarah wajib diisi.",
                structure: {
                    required: "File struktur organisasi wajib diunggah.",
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
    function checkingEdit() {
        return $('#id').val() ? true : false
    }

    $('#formProfile').submit(function (e) {
        e.preventDefault();
        profileService.upsertProfile(e, checkingEdit)
    })


    $(document).on('click', '#deleteProfile', function () {
        const id = $(this).data('id')
        profileService.deleteData(id)
    })


    $(document).on("click", "#addProfile", function () {
        isResetting = true;

        $("#formProfile")[0].reset();
        $("#formProfile").validate().resetForm();

        $("#vision, #mission, #history").each(function () {
            $(this).summernote("code", "");
            $(this).closest(".input-wrapper").find(".note-editor")
                .css("border", "")
                .removeClass("border-red-500 border-green-500");
        });

        $("#structure").val("");
        $("#vision, #mission, #history").val("");
        $("#formProfile").find(".border-red-500, .border-green-500")
            .removeClass("border-red-500 border-green-500 border");

        const validator = $("#formProfile").validate();
        validator.resetForm();
        $("#formProfile").find("label.error").remove();

        $("#formProfile").find(".valid").removeClass("valid");
        isResetting = false;
    });

}
