import { useEffect, useState } from "react";
import logo from "../assets/react.svg";

export default function Header() {
    // 1. Initial state check: Pehle local storage dekho, warna "gTwo" default rakho
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "gTwo");

    useEffect(() => {
        // 2. Local Storage mein save karo jab bhi theme change ho
        localStorage.setItem("theme", JSON.stringify(theme));

        // 3. DOM update
        document.documentElement.removeAttribute("class");
        document.documentElement.classList.add(theme);
    }, [theme]); // Dependency array mein theme daalna zaroori hai

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo" />
                <span>TaskApp</span>
            </div>
            <div className="themeSelector">
                {/* Aapne spans mein ek choti galti ki thi (class names mix ho rahe the). 
                   Yahan cleaner logic hai:
                */}
                <span onClick={() => setTheme("light")} className={theme === "light" ? "light activeTheme" : "light"}></span>
                <span onClick={() => setTheme("medium")} className={theme === "medium" ? "medium activeTheme" : "medium"}></span>
                <span onClick={() => setTheme("dark")} className={theme === "dark" ? "dark activeTheme" : "dark"}></span>
                <span onClick={() => setTheme("gOne")} className={theme === "gOne" ? "gOne activeTheme" : "gOne"}></span>
                <span onClick={() => setTheme("gTwo")} className={theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}></span>
                <span onClick={() => setTheme("gThree")} className={theme === "gThree" ? "gThree activeTheme" : "gThree"}></span>
            </div>
        </header>
    );
}