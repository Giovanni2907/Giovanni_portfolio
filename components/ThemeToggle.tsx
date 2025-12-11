"use client"

import { Sun, Moon, Laptop } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  const handleThemeChange = (newTheme: string) => {
    const haloOverlay = document.getElementById('theme-halo-overlay');

    // Déterminer la direction du changement
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const isGoingToDark = newTheme === 'dark' || (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    // Ajouter le halo selon la direction
    if (haloOverlay) {
      if (isGoingToDark && currentTheme === 'light') {
        // Light → Dark : warm gray halo
        haloOverlay.classList.add('active-warm');
      } else if (!isGoingToDark && currentTheme === 'dark') {
        // Dark → Light : cool white halo
        haloOverlay.classList.add('active-cool');
      }
    }

    // Attendre 150ms puis changer le thème
    setTimeout(() => {
      setTheme(newTheme);

      // Faire disparaître le halo progressivement
      setTimeout(() => {
        if (haloOverlay) {
          haloOverlay.classList.add('fading');
          setTimeout(() => {
            haloOverlay.classList.remove('active-warm', 'active-cool', 'fading');
          }, 200);
        }
      }, 50);
    }, 150);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Sun className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px]">
        <DropdownMenuItem onClick={() => handleThemeChange("light")} className="justify-center px-2">
          <Sun className="h-[1.2rem] w-[1.2rem]" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("dark")} className="justify-center px-2">
          <Moon className="h-[1.2rem] w-[1.2rem]" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("system")} className="justify-center px-2">
          <Laptop className="h-[1.2rem] w-[1.2rem]" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}