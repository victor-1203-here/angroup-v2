import { useState } from 'react';

const COOKIE_CATEGORIES = [
    {
        key: 'necessary',
        label: 'Necessary Cookies',
        description: 'Enable essential site functionality. These cannot be disabled.',
    },
    // {
    //   key: "functional",
    //   label: "Functional Cookies",
    //   description: "Remember your choices such as language or region.",
    // },
    // {
    //   key: "analytics",
    //   label: "Analytics Cookies",
    //   description: "Help us understand how visitors interact with the site.",
    // },
    // {
    //   key: "marketing",
    //   label: "Marketing Cookies",
    //   description: "Used to show relevant advertising on this or other sites.",
    // },
];

const defaultPrefs = {
    necessary: false,
    functional: false,
    analytics: false,
    marketing: false,
};

export function CookieSettingsModal({ open, onClose }) {
    const [prefs, setPrefs] = useState(defaultPrefs);

    const handleToggle = (key) => {
        setPrefs((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const handleSave = () => {
        localStorage.setItem('cookie_prefs', JSON.stringify(prefs));
        onClose();
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="relative mx-4 w-full max-w-lg rounded bg-white p-6 shadow-lg">
                <button type="button" aria-label="Close" className="absolute right-2 top-2" onClick={onClose}>
                    ✕
                </button>
                <h2 className="mb-4 text-xl font-bold">Cookie Settings</h2>
                <form className="space-y-4">
                    {COOKIE_CATEGORIES.map((cat) => (
                        <div key={cat.key} className="flex items-start gap-3">
                            <input
                                id={`cookie-${cat.key}`}
                                type="checkbox"
                                checked={prefs[cat.key]}
                                onChange={() => handleToggle(cat.key)}
                                className="mt-1"
                            />
                            <div>
                                <label htmlFor={`cookie-${cat.key}`} className="cursor-pointer font-semibold">
                                    {cat.label}
                                </label>
                                <div className="text-sm text-gray-500">{cat.description}</div>
                            </div>
                        </div>
                    ))}
                </form>
                <div className="mt-6 text-xs text-red-600">
                    Warning: If you opt out of necessary cookies, some or all website features may not work. You may have to refresh the page to clear
                    all cookies.
                </div>
                <button
                    type="button"
                    className="mt-4 w-full rounded px-4 py-2 font-semibold text-white shadow transition [background:linear-gradient(180deg,#102a00,#00cca5)] hover:brightness-95 focus:outline-none"
                    onClick={handleSave}
                >
                    Save Preferences
                </button>
            </div>
        </div>
    );
}

const Footer = () => {
    const [showCookieModal, setShowCookieModal] = useState(false);

    return (
        <footer className="w-full border-t bg-white">
            <div className="mx-auto max-w-7xl px-4 py-8">
                <div className="flex h-28 flex-col justify-between md:h-24 md:flex-row">
                    <div className="flex justify-center md:justify-end">
                        <nav className="flex flex-row gap-6 text-xs font-medium text-gray-700">
                            <a href="/terms" className="hover:underline">
                                Terms of Use
                            </a>
                            <a href="/privacy" className="hover:underline">
                                Privacy Statement
                            </a>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowCookieModal(true);
                                }}
                                className="cursor-pointer hover:underline"
                            >
                                Cookies Settings
                            </a>
                        </nav>
                    </div>
                    {/* Copyright */}
                    <div className="mt-4 flex items-end md:mt-0">
                        <span className="text-xs text-gray-500">
                            Copyright © 2025 An Group. <br className="block md:hidden" /> All rights reserved.
                        </span>
                    </div>
                </div>
                <CookieSettingsModal open={showCookieModal} onClose={() => setShowCookieModal(false)} />
            </div>
        </footer>
    );
};

export default Footer;
