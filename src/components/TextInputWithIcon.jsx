import React from "react";

export default function TextInputWithIcon({ icon, label, fieldName, placeholder }) {
    return (
        <div className="my-6">
            <label htmlFor={fieldName}>{label}</label>
            <div className="py-3 px-6 bg-sky-50 rounded-lg mt-2 flex gap-x-4 items-center">
                {icon}
                <input type="text" name={fieldName} id={fieldName} placeholder={placeholder} className="bg-transparent w-full" />
            </div>
        </div>
    );
}
