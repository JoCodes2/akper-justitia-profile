import $ from "jquery";
import "jquery-validation";
import "jquery-validation/dist/additional-methods";
import leaderService from "../service/leader.service";

export default function leaderController() {
    leaderService.loadData();

    let isResetting = false;

    $(document).ready(function () {
        $.validator.addMethod("filesize", function (value, element, param) {
            if (element.files.length === 0) return true;
            return this.optional(element) || (element.files[0].size <= param);
        }, "Ukuran file terlalu besar.");

        $("#formLeader").validate({
            rules: {
                name: { required: true },
                nip: { required: true },
                position: { required: true },
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
                nip: "Form wajib diisi.",
                position: "Form wajib diisi.",
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

    // Tombol tambah leader → reset form
    $(document).on("click", "#addLeader", function () {
        isResetting = true;
        $("#id").val("");
        $("#formLeader")[0].reset();
        $("#formLeader").validate().resetForm();

        $("#image").val("");
        $("#formLeader").find(".border-red-500, .border-green-500")
            .removeClass("border-red-500 border-green-500 border");

        const validator = $("#formLeader").validate();
        validator.resetForm();

        $("#formLeader").find("label.error").remove();
        $("#formLeader").find(".valid").removeClass("valid");

        isResetting = false;
    });

    function checkingEdit() {
        return $("#id").val() ? true : false;
    }

    // Submit form
    $("#formLeader").submit(function (e) {
        e.preventDefault();
        leaderService.upsertNews(e, checkingEdit);
    });
    $(document).on('input', '#nip', function () {
        this.value = this.value.replace(/\D/g, '');
    });
    // Edit data leader
    $(document).on("click", ".edit-leader", function () {
        const id = $(this).data("id");
        const $form = $("#formLeader");
        $form[0].reset();
        $form.validate().resetForm();

        $("#image").val("");
        $("#imageTitle").text("Upload Gambar baru");

        $form.find(".border-red-500, .border-green-500")
            .removeClass("border-red-500 border-green-500 border");

        $form.find("label.error").remove();

        leaderService.getDataById(id, checkingEdit);
    });

    // Hapus data leader
    $(document).on("click", ".delete-leader", function () {
        const id = $(this).data("id");
        leaderService.deleteData(id);
    });
}
