/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        animation: {
            'h-scroll': 'h-scroll 18s linear infinite',
            'airplane': 'airplane 6s linear infinite'
        },
        keyframes: {
            "h-scroll": {
                "from": {
                    transform: "translateX(0)",
                },
                "to": {
                    transform: "translateX(-100%)",
                },
            },
            "airplane": {
                "from": {
                    transform: "translateX(-50%)",
                },
                "to": {
                    transform: "translateX(100%)",
                },
            },
        },
        fontFamily: {
            header: "Montserrat, sans-serif",
            body: "Lora, serif",
            sans: "Lora",
        },
        extend: {
            screens: {
                xs: "480px",
            },
            colors: {
                primary: {
                    50: "#FFF0EB",
                    100: "#FFD2C2",
                    200: "#FFB499",
                    300: "#FF9670",
                    400: "#FF6F3C",
                    500: "#FF5A1F",
                    600: "#F54100",
                    700: "#CC3600",
                    800: "#A32C00",
                    900: "#7A2100",
                    950: "#521600",
                },
                accent: {
                    50: "#DEF7F5",
                    100: "#BDEFEA",
                    200: "#9CE8E0",
                    300: "#7BE0D6",
                    400: "#5AD8CC",
                    500: "#39D0C1",
                    600: "#2BB6A8",
                    700: "#239589",
                    800: "#1B746B",
                    900: "#13534C",
                    950: "#0C322E",
                },
                gray: {
                    50: "#EAEAEC",
                    100: "#D4D4D8",
                    200: "#BFBFC5",
                    300: "#A9A9B1",
                    400: "#94949E",
                    500: "#7E7E8B",
                    600: "#6B6B76",
                    700: "#575760",
                    800: "#44444B",
                    900: "#303036",
                    950: "#1A1A1D",
                },
                background: {
                    50: "#F4EDE8",
                    100: "#EBDFD6",
                    200: "#DEC9BA",
                    300: "#D1B39F",
                    400: "#C39E83",
                    500: "#B68868",
                    600: "#A57350",
                    700: "#8A6042",
                    800: "#6E4D35",
                    900: "#533A28",
                    950: "#37261B",
                },
            },
        },
    },
    plugins: [],
};
