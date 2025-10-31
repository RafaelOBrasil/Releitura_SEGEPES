"use client"

import "@theme-toggles/react/css/Classic.css"
import { Classic } from "@theme-toggles/react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="p-2 absolute right-4 ">
            <Classic
                toggled={theme === "dark"}
                onToggle={() => setTheme(theme === "dark" ? "light" : "dark")}
                duration={750}
                className="scale-150 flex flex-row-reverse justify-center items-center gap-1"
            >
            <p className="text-[12px] pb-1">{theme}</p>

            </Classic>


        </div>
    )
}
