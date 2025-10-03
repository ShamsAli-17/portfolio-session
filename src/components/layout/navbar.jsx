// components/Navbar.jsx
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Left: Logo / Name */}
        <Link
          href="/"
          aria-label="Shams Ali - Home"
          className="text-xl font-semibold tracking-wide text-gray-900 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded"
        >
          Shams Ali
        </Link>

        {/* Right: Desktop links */}
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-gray-900/90 hover:text-gray-900 focus-visible:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded px-1 py-1"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 text-gray-900 hover:text-gray-900 focus-visible:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
