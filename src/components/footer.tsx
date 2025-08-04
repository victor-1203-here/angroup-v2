import { useState } from "react";

const COOKIE_CATEGORIES = [
  {
    key: "necessary",
    label: "Necessary Cookies",
    description: "Enable essential site functionality. These cannot be disabled.",
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
    localStorage.setItem("cookie_prefs", JSON.stringify(prefs));
    onClose();
  };

  if (!open) return null;

  return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="bg-white max-w-lg w-full mx-4 p-6 rounded shadow-lg relative">
          <button type="button" aria-label="Close" className="absolute top-2 right-2" onClick={onClose}>✕</button>
          <h2 className="text-xl font-bold mb-4">Cookie Settings</h2>
          <form className="space-y-4">
            {COOKIE_CATEGORIES.map(cat => (
              <div key={cat.key} className="flex items-start gap-3">
                <input
                  id={`cookie-${cat.key}`}
                  type="checkbox"
                  checked={prefs[cat.key]}
                  onChange={() => handleToggle(cat.key)}
                  className="mt-1"
                />
                <div>
                  <label htmlFor={`cookie-${cat.key}`} className="font-semibold cursor-pointer">
                    {cat.label}
                  </label>
                  <div className="text-sm text-gray-500">{cat.description}</div>
                </div>
              </div>
            ))}
          </form>
          <div className="mt-6 text-red-600 text-xs">
            Warning: If you opt out of necessary cookies, some or all website features may not work. You may have to refresh the page to clear all cookies.
          </div>
          <button
            type="button"
            className="
              w-full mt-4 px-4 py-2 rounded font-semibold text-white shadow
              [background:linear-gradient(180deg,#102a00,#00cca5)]
              hover:brightness-95
              focus:outline-none
              transition
            "
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
    <footer className="bg-white border-t w-full">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col justify-between h-28 md:flex-row md:h-24">
          <div className="flex justify-center md:justify-end">
            <nav className="flex flex-row gap-6 text-xs text-gray-700 font-medium">
              <a href="/terms" className="hover:underline">Terms of Use</a>
              <a href="/privacy" className="hover:underline">Privacy Statement</a>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();            
                  setShowCookieModal(true);     
                }}
                className="hover:underline cursor-pointer"
              >
                Cookies Settings
              </a>
            </nav>
          </div>
          {/* Copyright */}
          <div className="flex items-end mt-4 md:mt-0">
            <span className="text-xs text-gray-500">
              Copyright © 2025 An Group
              <br className="block md:hidden" />
              All rights reserved.
            </span>
          </div>
        </div>
        <CookieSettingsModal
          open={showCookieModal}
          onClose={() => setShowCookieModal(false)}
        />
      </div>
    </footer>
  );
};

export default Footer;
