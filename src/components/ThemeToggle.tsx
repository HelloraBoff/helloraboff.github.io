import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden group transition-colors duration-200"
    >
      <div className="absolute inset-0 bg-muted/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <Sun 
        className="h-5 w-5 transition-opacity duration-200 dark:opacity-0 absolute inset-0 m-auto" 
      />
      <Moon 
        className="h-5 w-5 transition-opacity duration-200 opacity-0 dark:opacity-100 absolute inset-0 m-auto" 
      />
      <span className="sr-only">Alternar tema</span>
    </Button>
  );
}