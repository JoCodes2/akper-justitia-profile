import React from "react";

const Button = ({
    children,
    className = "",
    variant = "default",
    size = "md",
    ...props
}) => {
    const base =
        "rounded-md font-medium focus:outline-none transition-colors duration-200";

    const variants = {
        default: "bg-primary text-white  hover:bg-primary-dark",
        ghost: "bg-transparent text-gray-800 hover:text-primary",
    };

    const sizes = {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    return (
        <button
            className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
