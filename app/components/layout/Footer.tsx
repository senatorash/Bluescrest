import Link from "next/link";
import {
  LuMail,
  LuPhone,
  LuMapPin,
  LuLinkedin,
  LuTwitter,
  LuFacebook,
} from "react-icons/lu";
import Image from "next/image";

const Footer = () => {
  const getCurrentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary text-primary-foreground dark:bg-[#141414] dark:text-[#e4e4e4]">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/ba12.png"
                alt="bluecrest logo"
                width={50}
                height={50}
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold tracking-tight">
                  BlueCrest Attorneys
                </span>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Dedicated to providing exceptional legal representation with
              integrity, expertise, and unwavering commitment to our clients'
              success.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <LuLinkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <LuTwitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <LuFacebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">
              Practice Areas
            </h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>
                <Link
                  href="/practice-areas"
                  className="hover:text-accent transition-colors"
                >
                  Corporate Law
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas"
                  className="hover:text-accent transition-colors"
                >
                  Litigation
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas"
                  className="hover:text-accent transition-colors"
                >
                  Real Estate
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas"
                  className="hover:text-accent transition-colors"
                >
                  Family Law
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas"
                  className="hover:text-accent transition-colors"
                >
                  Estate Planning
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/attorneys"
                  className="hover:text-accent transition-colors"
                >
                  Our Attorneys
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm opacity-80">
              <li className="flex items-start gap-3">
                <LuMapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>
                  Suite 207, Ikeja Plaza, Mobolaji Bank
                  <br />
                  Anthony Way, Ikeja, Lagos.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <LuPhone className="h-5 w-5 text-accent shrink-0" />
                <span>+234-(0)-708-831-2857</span>
              </li>
              <li className="flex items-center gap-3">
                <LuMail className="h-5 w-5 text-accent shrink-0" />
                <span>bluecrestattorneys@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
          <p> © {getCurrentYear} Bluecrest Attorneys. All rights reserved.</p>
          <p>
            Attorney Advertising. Prior results do not guarantee a similar
            outcome.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
