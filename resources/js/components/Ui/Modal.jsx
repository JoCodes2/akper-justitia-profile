// components/ui/Modal.jsx
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-y-auto">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl relative p-6">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-red-600"
                >
                    <X size={20} />
                </button>

                {/* Title */}
                {title && (
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
                        {title}
                    </h2>
                )}

                {/* Content */}
                <div className="text-sm sm:text-base text-gray-700">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
