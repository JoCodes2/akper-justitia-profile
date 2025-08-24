import $ from "jquery";
import "jquery-validation";
import "jquery-validation/dist/additional-methods";
import userService from "../service/user.service";

export default function userController() {
    userService.loadData();

    let isResetting = false;


    $(document).ready(function () {
        // Toggle password visibility
        $('.password-toggle').on('click', function () {
            const target = $(this).data('target');
            const input = $(`#${target}`);
            const type = input.attr('type') === 'password' ? 'text' : 'password';
            input.attr('type', type);
            $(this).find('i').toggleClass('fa-eye fa-eye-slash');
        });
        $.validator.addMethod("filesize", function (value, element, param) {
            if (element.files.length === 0) return true;
            return this.optional(element) || (element.files[0].size <= param);
        }, "Ukuran file terlalu besar.");

        $("#formUser").validate({
            rules: {
                name: { required: true },
                username: { required: true },
                password: { required: true },
                password_confirmation: {
                    required: true,
                    equalTo: "#password"
                }
            },
            messages: {
                name: "Form wajib diisi.",
                username: "Form wajib diisi.",
                password: "Form wajib diisi.",
                password_confirmation: {
                    required: "Form wajib diisi.",
                    equalTo: "Konfirmasi password harus sama dengan password"
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
    $(document).on("click", "#addUser", function () {
        isResetting = true;
        $("#id").val("");
        $("#formUser")[0].reset();
        $("#formUser").validate().resetForm();

        $("#image").val("");
        $("#formUser").find(".border-red-500, .border-green-500")
            .removeClass("border-red-500 border-green-500 border");

        const validator = $("#formUser").validate();
        validator.resetForm();

        $("#formUser").find("label.error").remove();
        $("#formUser").find(".valid").removeClass("valid");

        isResetting = false;
    });


    function checkingEdit() {
        return $("#id").val() ? true : false;
    }

    // Submit form
    $("#formUser").submit(function (e) {
        e.preventDefault();
        if ($(this).valid()) {
            userService.upsertUser(e, checkingEdit);
        }
    });

    // Edit data user
    $(document).on("click", ".edit-user", function () {
        const id = $(this).data("id");
        const $form = $("#formUser");
        $form[0].reset();
        $form.validate().resetForm();

        $form.find(".border-red-500, .border-green-500")
            .removeClass("border-red-500 border-green-500 border");

        $form.find("label.error").remove();

        userService.getDataById(id, checkingEdit);
    });

    // Delete data
    $(document).on("click", ".delete-user", function () {
        const id = $(this).data("id");
        userService.deleteData(id);
    });
}
