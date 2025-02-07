"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "../app/src/logo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/news", label: "News" },
    { href: "/careers", label: "Careers" },
    { href: "/insurance", label: "Insurance" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="max-w-7xl mx-auto px-5 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image className="w-10" width={100} height={100} alt="CareWave" src={logo} />
          <span className="text-2xl font-bold">HealthCare Plus</span>
        </Link>

        {/* Hamburger Menu Icon (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none hover:text-gray-900 transition-colors"
          aria-label="Menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Navigation Links */}
        <nav
          className={cn(
            "md:flex text-lg absolute md:static top-20 left-0 w-full md:w-auto bg-background/95 md:bg-transparent backdrop-blur md:backdrop-blur-none py-4 md:py-0 flex-col md:flex-row items-center gap-6",
            isMenuOpen ? "flex" : "hidden"
          )}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-foreground/80 block px-4 py-2 md:inline-block",
                pathname === link.href ? "text-black" : "text-foreground/60"
              )}
              onClick={() => setIsMenuOpen(false)} // Close menu after click
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
