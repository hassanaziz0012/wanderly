import React from "react";

export default function PrimaryButton({ className, children, onClick, style = "normal" }) {
    const styles = {
        normal: "rounded-xl px-6 py-2",
        rounded: "rounded-full p-3"
    }

    return (
        <button onClick={onClick} className={`bg-primary-600 text-white xl:px-12 xl:py-4 ${styles[style]} ${className}`}>
            {children}
        </button>
    );
}
