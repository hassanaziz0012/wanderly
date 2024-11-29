import React from "react";

export default function NavLink({ url, active, children }) {
    return <a href={url || "#"} className={`hover:text-accent-100 duration-300 ${active === true ? "bg-white text-accent-600 px-2 rounded-full" : ""}`}>{children}</a>;
}
