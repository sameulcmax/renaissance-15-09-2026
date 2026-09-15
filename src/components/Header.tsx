"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "PORTFOLIO", href: "/portfolio" },
    { name: "CONTACT", href: "/contact" },
];

const Header = () => {
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);

    return (
        <header className="sticky top-0 z-[70] w-full bg-[#06369c]">
            <div className="mx-auto flex h-[76px] w-full max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:h-[100px] lg:px-10 xl:px-14 ">

                {/* Logo */}
                <Link
                    href="/"
                    onClick={closeMenu}
                    className="flex shrink-0 items-center"
                >
                    <img
                        src="/images/logo-white.png"
                        alt="Renaissance Meetings & Special Events"
                        className="h-auto w-[170px] object-contain sm:w-[190px] lg:w-[210px] xl:w-[220px]"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="group relative py-2 text-[12px] font-bold tracking-[0.12em] text-white/85 transition-colors duration-300 hover:text-white xl:text-[13px]"
                        >
                            {item.name}

                            <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}

                    {/* CTA */}
                    <Link
                        href="/contact"
                        className="ml-2 flex items-center gap-2 bg-white px-6 py-3 text-[12px] font-bold tracking-[0.12em] text-[#06369c] transition-all duration-300 hover:bg-white/90 xl:px-7"
                    >
                        GET IN TOUCH
                        <ArrowUpRight size={15} strokeWidth={2} />
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    className="flex h-11 w-11 items-center justify-center text-white lg:hidden"
                >
                    {open ? (
                        <X size={27} strokeWidth={1.5} />
                    ) : (
                        <Menu size={28} strokeWidth={1.5} />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`overflow-hidden border-t border-white/10 bg-[#06369c] transition-all duration-300 ease-in-out lg:hidden ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="px-5 pb-7 pt-3 sm:px-8">
                    {navItems.map((item, index) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={closeMenu}
                            className={`flex items-center justify-between border-b border-white/10 py-4 text-[13px] font-semibold tracking-[0.15em] text-white transition-all duration-300 hover:pl-2 ${index === 0 ? "border-t border-white/10" : ""
                                }`}
                        >
                            {item.name}
                            <ArrowUpRight
                                size={16}
                                strokeWidth={1.5}
                                className="opacity-60"
                            />
                        </Link>
                    ))}

                    {/* Mobile CTA */}
                    <Link
                        href="/contact"
                        onClick={closeMenu}
                        className="mt-6 flex w-full items-center justify-center gap-2 bg-white px-6 py-4 text-[12px] font-bold tracking-[0.15em] text-[#06369c]"
                    >
                        GET IN TOUCH
                        <ArrowUpRight size={16} />
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;