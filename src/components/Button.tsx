import type { ButtonHTMLAttributes, ReactNode } from "react";

interface UIButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export const Button = ({ children, className = "", type = "button", ...props }: UIButton) => {

    return (
        <button
            type={type}
            className={`border rounded-lg p-3 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};