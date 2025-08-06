'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isHeaderHidden, setHeaderHidden] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    let lastScrollTop = window.scrollY;
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop) {
        setHeaderHidden(true);
      } else {
        setHeaderHidden(false);
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setHeaderHidden(false), 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about/" },
    { name: "Team", path: "/team/" },
    { name: "Projects", path: "/projects/" },
    { name: "Responsible Computing", path: "/responsible_computing/" },
    { name: "Publications", path: "/publications" },
    { name: "Robots", path: "/robots/" },
    { name: "Blogs", path: "/blogs/" },
  ];

  return (
    <header
      className={`bg-customCyanBlue sticky top-0 z-50 transition-transform duration-300 ${
        isHeaderHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav>
        {/* Top bar with logo and actions */}
        <div className="flex justify-between items-center px-2 md:px-5 pt-2 relative">
          <Link href="/">
            <Image
              src="/img/core/logo.png"
              alt="Logo"
              width={56}
              height={56}
              unoptimized
              className="h-14 w-auto"
              priority
            />
          </Link>

          <div className="flex items-center gap-4 md:hidden">
            {/* Mobile search toggle */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSearchOpen(!isSearchOpen);
              }}
              className="block text-white focus:outline-none z-20"
            >
              <Image
                src="/img/search-icon.png"
                alt="Search"
                width={20}
                height={20}
                className="size-5"
              />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="block text-white focus:outline-none z-20"
            >
              {!isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Search */}
          <form
            action="/search"
            method="get"
            className="hidden md:flex flex-row items-center gap-2 pl-2 border rounded-2xl bg-custom-cyanBlue"
          >
            <input
              type="text"
              name="q"
              required
              className="appearance-none bg-transparent text-white placeholder-white focus:outline-none px-4 py-2 flex-1"
              placeholder="Type to search ..."
            />
            <button
              type="submit"
              className="bg-customLintingGreenDark text-white p-2 rounded-e-2xl hover:bg-green-700 transition duration-300"
            >
              <Image
                src="/img/search-icon.png"
                alt="Search"
                width={20}
                height={20}
              />
            </button>
          </form>
        </div>

        {/* White horizontal line under top bar */}
        <div className="border-b border-white mx-2 md:mx-5"></div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden mt-2 shadow-lg text-white px-2">
            <form
              action="/search"
              method="get"
              className="flex border rounded-2xl justify-between gap-2 pl-2"
            >
              <input
                type="text"
                name="q"
                required
                className="bg-custom-cyanBlue text-white focus:outline-none w-full placeholder:text-white"
                placeholder="Type to search ..."
              />
              <button
                type="submit"
                className="bg-custom-lintingGreenDark text-white p-3 px-4 rounded-e-2xl hover:bg-blue-900 transition duration-300"
              >
                <Image
                  src="/img/search-icon.png"
                  alt="Search"
                  width={20}
                  height={20}
                />
              </button>
            </form>
          </div>
        )}

        {/* Navbar Links */}
        <div className="p-2 relative">
          <ul
            className={`${
              isMobileMenuOpen
                ? "flex flex-col items-start gap-4 px-4 pb-4"
                : "hidden"
            } md:flex md:items-center md:justify-center gap-6 md:gap-12 text-white duration-300 absolute top-0 left-0 right-0 bg-customLintingGreenDark md:relative md:bg-transparent z-10`}
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`relative inline-block pb-1 text-lg transition-transform transform hover:-translate-y-1 ${
                    pathname.replace(/\/$/, "") === item.path.replace(/\/$/, "")
                      ? "text-red-500"
                      : "text-white"
                  } after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-red-500 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300`}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Contact Button - Desktop & Mobile */}
            {/* <li>
            <Link
              href="/contact"
              className="
                bg-customLintingGreenDark md:bg-custom-lintingGreenDark
                hover:bg-customLintingGreenDark/90 md:hover:bg-custom-lintingGreenDark/90
                text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Contact Us
            </Link>
          </li> */}

          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
