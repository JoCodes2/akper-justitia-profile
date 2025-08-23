import $ from "jquery";
import "jquery-validation";
import "jquery-validation/dist/additional-methods";
import galeriService from "../service/galeri.service";

export default function galeriController() {
    galeriService.loadData();

    let isResetting = false;


    $(document).ready(function () {
        $.validator.addMethod("filesize", function (value, element, param) {
            if (element.files.length === 0) return true;
            return this.optional(element) || (element.files[0].size <= param);
        }, "Ukuran file terlalu besar.");

        $("#formGaleri").validate({
            rules: {
                name: { required: true },
                date_upload: { required: true },
                created_by: { required: true },
                image: {
                    required: function () {
                        return $("#id").val() === "" || $("#id").val() === null;
                    },
                    extension: "jpg|jpeg|png",
                    filesize: 2048000
                }
            },
            messages: {
                name: "Form wajib diisi.",
                date_upload: "Form wajib diisi.",
                created_by: "Form wajib diisi.",
                image: {
                    required: "Gambar wajib diunggah.",
                    extension: "Format file harus JPG, JPEG, atau PNG.",
                    filesize: "Ukuran file maksimal 2MB."
                }
            },
            errorPlacement: function (error, element) {
                error.addClass("text-red-500 text-sm mt-1");

                if (element.closest(".input-wrapper").length) {
                    error.appendTo(element.closest(".input-wrapper"));
                } else {
                    error.insertAfter(element);
                }
            },
            highlight: function (element) {
                const $el = $(element);
                $el.addClass("border border-red-500")
                    .removeClass("border-green-500");
            },
            unhighlight: function (element) {
                const $el = $(element);

                if (isResetting) {
                    $el.removeClass("border-red-500 border-green-500 border");
                    return;
                }

                $el.addClass("border border-green-500")
                    .removeClass("border-red-500");
            }
        });
    });


    // Tombol tambah galeri → reset form
    $(document).on("click", "#addGaleri", function () {
        isResetting = true;
        $("#id").val("");
        $("#formGaleri")[0].reset();
        $("#formGaleri").validate().resetForm();

        $("#image").val("");
        $("#formGaleri").find(".border-red-500, .border-green-500")
            .removeClass("border-red-500 border-green-500 border");

        const validator = $("#formGaleri").validate();
        validator.resetForm();

        $("#formGaleri").find("label.error").remove();
        $("#formGaleri").find(".valid").removeClass("valid");

        isResetting = false;
    });


    function checkingEdit() {
        return $("#id").val() ? true : false;
    }

    // Submit form
    $("#formGaleri").submit(function (e) {
        e.preventDefault();
        if ($(this).valid()) {
            galeriService.upsertGaleri(e, checkingEdit);
        }
    });

    // Edit data galeri
    $(document).on("click", ".edit-galeri", function () {
        const id = $(this).data("id");
        const $form = $("#formGaleri");
        $form[0].reset();
        $form.validate().resetForm();

        $("#image").val("");
        $("#imageTitle").text("Upload Gambar baru");

        $form.find(".border-red-500, .border-green-500")
            .removeClass("border-red-500 border-green-500 border");

        $form.find("label.error").remove();

        galeriService.getDataById(id, checkingEdit);
    });

    // Delete data
    $(document).on("click", ".delete-galeri", function () {
        const id = $(this).data("id");
        galeriService.deleteData(id);
    });

}
