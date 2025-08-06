import { useEffect, useRef, useState } from 'react';
import { BsGlobe2, BsSearch } from 'react-icons/bs';
import { HiBars3BottomRight } from 'react-icons/hi2';
import Image from 'next/image';
import { useRouter } from 'next/router';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Services', href: '/services' },
    { label: 'Honor & Licenses', href: '/honor' },
    { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
    const router = useRouter();
    const isWhiteBG = router.pathname === '/privacy' || router.pathname === '/terms';
    const [isOpen, setIsOpen] = useState(false);
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [showHeader, setShowHeader] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true);
    const lastScrollY = useRef(0);
    const threshold = 10;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < threshold) {
                setIsAtTop(true);
                setIsScrollingUp(true);
                setShowHeader(true);
            } else {
                setIsAtTop(false);
                if (currentScrollY < lastScrollY.current) {
                    setIsScrollingUp(true);
                    setShowHeader(true);
                } else {
                    setIsScrollingUp(false);
                    setShowHeader(false);
                }
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        const initialScrollY = window.scrollY;
        if (initialScrollY < threshold) {
            setIsAtTop(true);
            setIsScrollingUp(true);
            setShowHeader(true);
        } else {
            setIsAtTop(false);
            setIsScrollingUp(false);
            setShowHeader(true);
        }
        lastScrollY.current = initialScrollY;

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div
                className={`md:h-26 pointer-events-none fixed left-4 top-2 z-[100] transition-opacity transition-transform duration-300 ease-in-out md:top-4 md:px-10 md:px-4 md:py-3 md:py-4 ${showHeader || isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-full opacity-0'} `}
            >
                <Image src="/images/icon/icon.png" alt="Logo" width={64} height={64} priority />
            </div>
            <header
                className={`fixed left-0 top-0 z-50 flex min-w-full justify-end px-2 py-6 transition-opacity transition-transform duration-300 ease-in-out md:h-24 md:px-12 md:py-4 ${isAtTop ? (isWhiteBG ? 'bg-transparent text-black' : 'bg-transparent text-white') : isScrollingUp ? 'bg-white bg-opacity-80 text-black' : ''} ${showHeader || isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-full opacity-0'} `}
            >
                <div
                    className={`flex w-[90%] justify-end md:h-14 md:border-b md:px-12 md:py-4 ${isAtTop ? (isWhiteBG ? 'md:border-black' : 'md:border-white') : isScrollingUp ? 'md:border-black' : ''} `}
                >
                    <nav className="hidden gap-6 md:flex md:gap-10 lg:gap-16 xl:gap-20">
                        {navLinks.map(({ label, href }, i) => (
                            <a key={i} href={href} className="transition-colors duration-200 hover:text-[#38947e]">
                                {label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-4 md:pl-20 lg:pl-20">
                        <button
                            type="button"
                            aria-label="Open search"
                            className="transition-colors duration-200 hover:text-[#38947e] focus:outline-none"
                        >
                            <BsSearch size={20} />
                        </button>
                        <button
                            type="button"
                            aria-label="Change language"
                            className="transition-colors duration-200 hover:text-[#38947e] focus:outline-none"
                        >
                            <BsGlobe2 size={20} />
                        </button>
                        <button type="button" className={`focus:outline-none md:hidden`} onClick={() => setIsOpen(!isOpen)} aria-label="Open Menu">
                            <HiBars3BottomRight size={24} />
                        </button>
                    </div>
                </div>
                <div
                    className={`fixed left-0 top-0 z-20 mx-auto h-screen w-full overflow-hidden bg-white text-black transition-[max-height] duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'} `}
                >
                    <div className="flex justify-end px-2 py-6">
                        <button type="button" aria-label="Menu" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`line h-6 w-6 fill-current ${isOpen ? 'opened' : ''}`}
                                viewBox="0 0 100 100"
                            >
                                <path
                                    className={`line ${isOpen ? 'opened line1' : 'line1'}`}
                                    d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                                />
                                <path className={`line ${isOpen ? 'opened line2' : 'line2'}`} d="M 20,50 H 80" />
                                <path
                                    className={`line ${isOpen ? 'opened line3' : 'line3'}`}
                                    d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                                />
                            </svg>
                        </button>
                    </div>
                    <nav className="flex flex-col space-y-8 px-6 py-8 text-2xl font-semibold">
                        {navLinks.map(({ label, href }, i) => (
                            <a key={i} href={href} className="">
                                {label}
                            </a>
                        ))}
                    </nav>
                </div>
            </header>
        </>
    );
}
