import { Heart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" max-w-7xl mx-auto border-t bg-background/95">
      <div className="container py-8 md:py-12 px-5 md:mx-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-blue-600" />
              <span className="font-bold">HealthCare Plus</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Your trusted partner in healthcare, providing professional medical
              services with a patient-first approach.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <span className="text-sm text-muted-foreground">
                  Primary Care
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Specialized Treatment
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Emergency Care
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Preventive Medicine
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <span className="text-sm text-muted-foreground">
                  123 Healthcare Ave
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Medical City, MC 12345
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  contact@healthcareplus.com
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  (555) 123-4567
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <a target="blank" href="https://allinfozone.tech">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Allinfozone IT Solutions. All rights reserved.
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
