'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AlignJustify, X } from 'lucide-react';
import { Menu } from '@/app/componets/Header/MenuNav/Menu';

import Logo from '@/../public/logo.webp';
import { MenuRoute } from '@/data/Menu';

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="paddingAlignment flex justify-between items-center flex-wrap lg:flex-row relative shadow-md">
            <Link href="/" className="">
                <Image
                    src={Logo}
                    alt="Evo One - black and red logo"
                    className="ml-4 w-28 object-cover"
                />
            </Link>

            {isMobileMenuOpen === true ? <X className='groupToggleMenu' onClick={toggleMobileMenu}
            /> :
                <AlignJustify
                    onClick={toggleMobileMenu}
                    className="groupToggleMenu"
                />
            }

            <nav
                className={`${isMobileMenuOpen ? 'flex' : 'hidden'
                    } flex-1 flex-col absolute z-50 py-16 sm:py-0 top-full left-0 right-0 bg-[#EEF0F2] md:bg-transparent md:flex md:flex-row justify-center sm:justify-center items-start sm:items-center space-y-4 md:space-y-0 md:space-x-4 md:relative`}
            >
                {MenuRoute.map((item, index) => (
                    <Menu slug={item.slug} key={index} />
                ))}
            </nav>
        </header>
    );
};
