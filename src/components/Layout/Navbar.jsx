import { LocateFixed, Moon, Search, Sun } from "lucide-react";
import SearchBox from "../SearchBox";
import { useState, useRef } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const handleClick = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  };

  return (
    <nav className="flex justify-center items-center h-16 w-full border-b bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 z-50 relative shadow-lg">
      <div className="container flex justify-between items-center">
        <a href="/" className="text-3xl text-700 dark:text-gray-300">
          Weatherly
        </a>
        <SearchBox open={open} setOpen={setOpen} buttonRef={ref} />
        <div className="flex items-center gap-4">
          <button
            onClick={() => setOpen(true)}
            ref={ref}
            className="block md:hidden border-2 border-gray-200 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 p-2.5 rounded-full cursor-pointer"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={handleClick}
            className="border-2 border-gray-200 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 p-2.5 rounded-full cursor-pointer"
          >
            <Sun className="w-5 h-5 hidden dark:block" />
            <Moon className="w-5 h-5 block dark:hidden" />
          </button>
          <button className="border-2 border-gray-200 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 p-2.5 rounded-full cursor-pointer">
            <LocateFixed className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
