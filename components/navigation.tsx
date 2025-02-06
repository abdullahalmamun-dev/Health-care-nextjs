"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import Image from "next/image";
import logo from "../app/src/logo.png";

const Navigation = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/news", label: "News" },
    { href: "/careers", label: "Careers" },
    { href: "/insurance", label: "Insurance" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="px-10 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-20 items-center justify-around">
        <div className="flex gap-6 md:gap-10 justify-between pt-5">
          <Link href="/" className="flex items-between space-x-2">
            <Image className="w-10" width={100} height={100} alt="CareWave" src={logo}></Image>
            <span className="text-2xl font-bold">HealthCare Plus</span>
          </Link>
          <nav className="hidden gap-6 md:flex text-lg ">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === link.href ? "text-black" : "text-foreground/60"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
