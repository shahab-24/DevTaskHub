"use client"; // Because it uses hooks (usePathname)

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); // Get current route

  return (
        <div className="bg-gray-900 text-white p-4 shadow-md w-full">

<nav className="bg-gray-900 text-white p-4 shadow-md w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">DevTaskHub</h1>
        <ul className="flex gap-6">
          <li>
            <Link
              href="/"
              className={`hover:text-gray-300 ${
                pathname === "/" ? "text-blue-400" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/tasks"
              className={`hover:text-gray-300 ${
                pathname === "/tasks" ? "text-blue-400" : ""
              }`}
            >
              Tasks
            </Link>
          </li>
        </ul>
      </div>
    </nav>
        </div>

    
  );
}
