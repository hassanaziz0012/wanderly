import React from "react";

export default function Container({ children }) {
    return <div className="max-w-screen-xl mx-auto px-6 xs:px-10">{children}</div>;
}
