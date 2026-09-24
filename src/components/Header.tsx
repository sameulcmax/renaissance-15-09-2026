"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";

const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { 
        name: "SERVICES", 
        href: "/services",
        subServices: [
            { name: "Corporate Events", href: "/" },
            { name: "Special Celebrations", href: "/" },
            { name: "Meeting Management", href: "/" },
            { name: "Destination Events", href: "/" },
        ]
    },
    { name: "PORTFOLIO", href: "/portfolio" },
    { name: "CONTACT", href: "/contact" },
];

const Header = () => {
    const [open, setOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const closeMenu = () => {
        setOpen(false);
        setServicesOpen(false);
    };

    return (
        <header className="sticky top-0 z-[70] w-full bg-[#06369c]">
            <div className="mx-auto flex h-[76px] w-full max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:h-[130px] lg:px-10 xl:px-14">

                {/* Logo */}
                <Link
                    href="/"
                    onClick={closeMenu}
                    className="flex shrink-0 items-center focus:outline-none"
                >
                    <img
                        src="/images/logo-white.png"
                        alt="Renaissance Meetings & Special Events"
                        className="h-auto w-[170px] object-contain sm:w-[190px] lg:w-[210px] xl:w-[220px]"
                    />
                </Link>

                {/* Right Side: Hamburger Menu Only */}
                <div className="flex items-center">
                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        className="group flex items-center justify-center text-white transition-opacity duration-300 hover:opacity-80 focus:outline-none"
                    >
                        {open ? (
                            <X size={32} strokeWidth={1.5} className="transition-transform duration-300 rotate-90" />
                        ) : (
                            <Menu size={32} strokeWidth={1.5} className="transition-transform duration-300" />
                        )}
                    </button>
                </div>
            </div>

            {/* Backdrop Overlay */}
            <div
                className={`fixed inset-0 z-[75] bg-black/50 backdrop-blur-sm transition-opacity duration-500 lg:z-[80] ${
                    open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={closeMenu}
            />

            {/* Slide-in Drawer from Right to Left */}
            <div
                className={`fixed top-0 right-0 z-[80] h-full w-full max-w-md bg-[#06369c] shadow-2xl transition-transform duration-500 ease-in-out lg:z-[90] lg:max-w-lg ${
                    open ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex h-full flex-col justify-between px-8 py-10 sm:px-12 lg:py-14 overflow-y-auto">
                    
                    {/* Drawer Header */}
                    <div className="flex items-center justify-between border-b border-white/15 pb-6 shrink-0">
                        <span className="text-[11px] font-bold tracking-[0.25em] text-white/60 uppercase">
                            Navigation Menu
                        </span>
                        <button
                            type="button"
                            onClick={closeMenu}
                            className="flex h-10 w-10 items-center justify-center text-white transition-transform duration-300 hover:rotate-90"
                            aria-label="Close menu"
                        >
                            <X size={26} strokeWidth={1.5} />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="my-auto flex flex-col gap-3 py-6">
                        {navItems.map((item) => {
                            const isServices = item.name === "SERVICES";

                            return (
                                <div key={item.name} className={`relative flex flex-col ${isServices ? 'mb-2' : ''}`}>
                                    {isServices ? (
                                        <div
                                            onClick={() => setServicesOpen(!servicesOpen)}
                                            className="group flex cursor-pointer items-center justify-between text-2xl font-semibold tracking-[0.1em] text-white transition-all duration-300 hover:text-white/70 sm:text-3xl py-2"
                                        >
                                            <span>{item.name}</span>
                                            <div className="flex items-center gap-3">
                                                <ChevronDown
                                                    size={24}
                                                    strokeWidth={1.5}
                                                    className={`transform transition-transform duration-300 ${
                                                        servicesOpen ? "rotate-180" : "rotate-0"
                                                    }`}
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            onClick={closeMenu}
                                            className="group flex items-center justify-between text-2xl font-semibold tracking-[0.1em] text-white transition-all duration-300 hover:text-white/70 sm:text-3xl py-2"
                                        >
                                            <span>{item.name}</span>
                                            <ArrowUpRight
                                                size={24}
                                                strokeWidth={1.5}
                                                className="transform opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                                            />
                                        </Link>
                                    )}

                                    {/* Sub-services Container with smooth blur-to-visible animation */}
                                    {isServices && (
                                        <div
                                            className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                                servicesOpen
                                                    ? "max-h-[300px] opacity-150 my-2 pl-4 pointer-events-auto"
                                                    : "max-h-0 opacity-0 my-0 pl-4 pointer-events-none"
                                            }`}
                                        >
                                            <div className="flex flex-col gap-2.5 border-l border-white/20 pl-4 py-1">
                                                {/* Main services overview page redirection */}
                                                <Link
                                                    href={item.href}
                                                    onClick={closeMenu}
                                                    className={`text-base font-medium tracking-wider text-white/80 hover:text-white transition-all duration-500 py-1 transform ${
                                                        servicesOpen ? "translate-y-0 filter blur-0 opacity-100" : "-translate-y-2 filter blur-sm opacity-0"
                                                    }`}
                                                    style={{ transitionDelay: '50ms' }}
                                                >
                                                    All Services Overview
                                                </Link>
                                                
                                                {item.subServices.map((sub, idx) => (
                                                    <Link
                                                        key={sub.name}
                                                        href={sub.href}
                                                        onClick={closeMenu}
                                                        className={`text-base font-medium tracking-wider text-white/80 hover:text-white transition-all duration-500 py-1 transform ${
                                                            servicesOpen ? "translate-y-0 filter blur-0 opacity-100" : "-translate-y-2 filter blur-sm opacity-0"
                                                        }`}
                                                        style={{ transitionDelay: `${(idx + 2) * 60}ms` }}
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </nav>

                    {/* Drawer Footer */}
                    <div className="border-t border-white/15 pt-6 shrink-0">
                        <Link
                            href="/contact"
                            onClick={closeMenu}
                            className="flex w-full items-center justify-center gap-2 bg-white px-6 py-4 text-[12px] font-bold tracking-[0.15em] text-[#06369c] transition-all duration-300 hover:bg-white/90"
                        >
                            GET IN TOUCH
                            <ArrowUpRight size={16} strokeWidth={2} />
                        </Link>
                        <div className="mt-6 flex justify-between text-[11px] tracking-widest text-white/60">
                            <span>RENAISSANCE EVENTS</span>
                            <span>© {new Date().getFullYear()}</span>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;