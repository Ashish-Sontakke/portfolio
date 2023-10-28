"use client"

import * as React from "react"
import { MoonIcon, SunIcon, DesktopIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { setTheme } = useTheme()
    return (
        <div>
            <Button
                variant="link"
                size="icon"
                onClick={() => setTheme("light")}
            >
                <SunIcon className="h-[1rem] w-[1rem]" />
                <span className="sr-only">Toggle Light Theme</span>
            </Button>
            <Button
                variant="link"
                size="icon"
                onClick={() => setTheme("dark")}
            >
                <MoonIcon className="h-[1rem] w-[1rem]" />
                <span className="sr-only">Toggle Dark Theme</span>
            </Button>
            <Button
                variant="link"
                size="icon"
                onClick={() => setTheme("system")}
            >
                <DesktopIcon className="h-[1rem] w-[1rem]" />
                <span className="sr-only">Toggle System Theme</span>
            </Button>
        </div>
    )
}
