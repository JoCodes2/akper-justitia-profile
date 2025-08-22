import $ from "jquery";
import "jquery-validation";

import galeriService from "../service/galeri.service";

export default function galeriController() {
    galeriService.loadData();

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

    let isResetting = false;

    $(document).ready(function () {
        $("#formUpsertGalery").validate({
            ignore: "",
            rules: {
                name: { required: true },
                image: {
                    required: function () {
                        // Kalau edit, file boleh kosong
                        return !$("#id").val();
                    },
                    fileextension: "jpg|jpeg|png",
                    filesize: 2 * 1024 * 1024
                }
            },
            messages: {
                name: "Judul wajib diisi.",
                image: {
                    required: "Gambar wajib diunggah.",
                    fileextension: "Format file harus JPG atau PNG.",
                    filesize: "Ukuran file maksimal 2MB."
                }
            },
            errorPlacement: function (error, element) {
                error.addClass("text-red-500 text-sm mt-1");
                error.insertAfter(element);
            },
            highlight: function (element) {
                $(element)
                    .addClass("border border-red-500")
                    .removeClass("border-green-500");
            },
            unhighlight: function (element) {
                if (isResetting) {
                    $(element).removeClass("border-red-500 border-green-500 border");
                    return;
                }
                $(element)
                    .addClass("border border-green-500")
                    .removeClass("border-red-500");
            }
        });
    });

        // Edit data
    $(document).on("click", ".editGaleri", async function () {
        const id = $(this).data("id");

        try {
            const response = await galeriService.getById(id);
            const data = response.data.data;

            // Isi form dengan data lama
            $("#id").val(data.id);
            $("#name").val(data.name);

            // File input dikosongkan biar user bisa upload baru
            $("#image").val("");

            // Ubah judul modal biar jelas
            $("#upsertGaleri .modal-title").text("Edit Galeri");

            // Tampilkan modal
            $("#upsertGaleri").removeClass("hidden");
        } catch (error) {
            console.error("Error mengambil data:", error);
            showAlert("error", "Gagal mengambil data galeri");
        }
    });


    function checkingEdit() {
        return $("#id").val() ? true : false;
    }

    // Submit form
    $("#formUpsertGalery").submit(function (e) {
        e.preventDefault();
        if ($(this).valid()) {
            galeriService.upsertGaleri(e, checkingEdit);
        }
    });

    // Delete data
    $(document).on("click", ".deleteGaleri", function () {
        const id = $(this).data("id");
        galeriService.deleteData(id);
    });

    // Reset form saat tambah
    $(document).on("click", "#addGaleri", function () {
        isResetting = true;

        $("#formUpsertGalery")[0].reset();
        $("#formUpsertGalery").validate().resetForm();

        $("#formUpsertGalery").find(".border-red-500, .border-green-500")
            .removeClass("border-red-500 border-green-500 border");

        $("#id").val("");

        const validator = $("#formUpsertGalery").validate();
        validator.resetForm();
        $("#formUpsertGalery").find("label.error").remove();
        $("#formUpsertGalery").find(".valid").removeClass("valid");

        isResetting = false;
    });
}
