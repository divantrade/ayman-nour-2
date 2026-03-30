"use client";

import { useState, useEffect } from "react";

const navItems = [
  { href: "#home", label: "الرئيسية" },
  { href: "#bio", label: "السيرة الذاتية" },
  { href: "#timeline", label: "المسيرة" },
  { href: "#books", label: "المؤلفات" },
  { href: "#articles", label: "المقالات" },
  { href: "#media", label: "قناة الشرق" },
  { href: "#party", label: "حزب غد الثورة" },
  { href: "#positions", label: "المناصب" },
  { href: "#contact", label: "تواصل" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((section) => {
        const el = section as HTMLElement;
        if (window.scrollY >= el.offsetTop - 120) {
          current = el.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = (el as HTMLElement).offsetTop - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary-dark/95 backdrop-blur-md shadow-lg"
          : "bg-primary/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[70px]">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleClick("#home");
          }}
          className="text-xl font-bold text-white"
        >
          د. أيمن <span className="text-accent">نور</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.href);
              }}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === item.href.slice(1)
                  ? "text-white bg-white/15"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="القائمة"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[70px] right-0 w-72 h-[calc(100vh-70px)] bg-primary-dark transition-transform duration-300 overflow-y-auto ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.href);
              }}
              className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                activeSection === item.href.slice(1)
                  ? "text-white bg-white/15"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
