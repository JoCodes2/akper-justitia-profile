import $ from "jquery";
import "jquery-validation";
import "jquery-validation/dist/additional-methods";
import authService from "../service/auth.service";

export default function AuthController() {
    let isResetting = false;

    $(document).ready(function () {
        $("#formLogin").validate({
            rules: {
                username: { required: true },
                password: { required: true }
            },
            messages: {
                username: "username wajib diisi.",
                password: "password wajib diisi.",
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
    $("#formLogin").submit(function (e) {
        e.preventDefault();
        authService.login(e);
    });
    $("#userLogoutBtn").on("click", function (e) {
        e.preventDefault();
        authService.logout(e);
    });


}
