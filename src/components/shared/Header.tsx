"use client";

import { useTheme } from "next-themes";
import { MaterialUISwitch } from "../ui/ThemeSwitch";
import { useEffect, useState } from "react";

function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <header className=" relative md:mx-32">
      <div className=" flex items-center justify-between left-0 top-0 right-0 border-4 border-black dark:border-white bg-slate-600/25 backdrop-blur-lg rounded-full p-2">
        <h1 className=" style-text-1 font-bold">Birthday List</h1>
        <div>
          <MaterialUISwitch
            checked={theme === "dark" ? true : false}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
