import React from "react";

export default function SectionHeader({ children, className }) {
    return (
        <h2 className={`text-xl font-bold font-header lg:text-2xl mb-4 ${className}`}>
            {children}
        </h2>
    );
}
