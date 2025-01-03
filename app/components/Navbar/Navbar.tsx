"use client";
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactusform from './Contactus';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'About Us', href: '#aboutus-section', current: false },
    { name: 'Services', href: '#services-section', current: false },
    { name: 'FAQ', href: '#faq-section', current: false },
    { name: 'Blog', href: '#blog-section', current: false },
    { name: 'Testimonial', href: '#testimonial-section', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    return (
        <Disclosure as="nav" className="navbar bg-white shadow-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex h-16 sm:h-20 items-center justify-between">
                    {/* LOGO */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center text-2xl sm:text-4xl font-semibold text-black">
                            <img 
                                src="/images/navbar/icon.jpg" 
                                alt="CD Consultings Logo" 
                                className="h-8 w-8 sm:h-12 sm:w-12 mr-2"
                            />
                            CD Consultings
                        </Link>
                    </div>

                    {/* LINKS */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'navlinks hover:text-black',
                                    'px-3 py-2 rounded-md text-lg font-normal'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* CONTACT BUTTON */}
                    <Contactusform />

                    {/* DRAWER FOR MOBILE VIEW */}
                    <div className="block lg:hidden">
                        <Bars3Icon
                            className="block h-6 w-6 cursor-pointer"
                            aria-hidden="true"
                            onClick={() => setIsOpen(true)}
                        />
                    </div>

                    {/* DRAWER LINKS DATA */}
                    <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                        <Drawerdata />
                    </Drawer>
                </div>
            </div>
        </Disclosure>
    );
};

export default Navbar;
