export function showAlert(type = "success", message = "", duration = 3000) {
    const colors = {
        success: {
            bg: "bg-green-500",
            icon: "fas fa-check-circle"
        },
        error: {
            bg: "bg-red-500",
            icon: "fas fa-times-circle"
        },
        warning: {
            bg: "bg-yellow-500",
            icon: "fas fa-exclamation-triangle"
        },
        info: {
            bg: "bg-blue-500",
            icon: "fas fa-info-circle"
        }
    };

    const $container = $("#alert-container");

    const $alert = $(`
        <div class="flex items-center gap-2 px-4 py-3 text-white rounded-xl shadow-lg border-2 ${colors[type].bg} ${colors[type].border} animate-fadeIn">
            <i class="${colors[type].icon}"></i>
            <span>${message}</span>
        </div>
    `);

    $container.append($alert);

    setTimeout(() => {
        $alert.addClass("animate-fadeOut");
        setTimeout(() => $alert.remove(), 300);
    }, duration);
}



export function showConfirmation(message, onConfirm, onCancel) {
    $("#confirmationModal").remove();

    const modalHtml = `
        <div id="confirmationModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
            <div class="bg-white rounded-lg shadow-lg max-w-sm w-full p-6 text-center transform transition-all scale-95 hover:scale-100 duration-200">

                <!-- Message -->
                <p class="text-gray-800 text-lg mb-6 font-medium">${message}</p>

                <!-- Buttons -->
                <div class="flex justify-center gap-4">
                    <button id="confirmNo"
                        class="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition-colors duration-150">
                        Batal
                    </button>
                    <button id="confirmYes"
                        class="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors duration-150">
                        Ya
                    </button>
                </div>
            </div>
        </div>
    `;

    $("body").append(modalHtml);

    // Event listener
    $("#confirmYes").on("click", function () {
        if (typeof onConfirm === "function") onConfirm();
        $("#confirmationModal").remove();
    });

    $("#confirmNo").on("click", function () {
        if (typeof onCancel === "function") onCancel();
        $("#confirmationModal").remove();
    });
}

