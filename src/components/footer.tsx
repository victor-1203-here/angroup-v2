const Footer = () => (
  <footer className="bg-white border-t w-full">
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex flex-col justify-between h-28 md:flex-row md:h-24">
        <div className="flex justify-center md:justify-end">
          <nav className="flex flex-row gap-6 text-xs text-gray-700 font-medium">
            <a href="/terms" className="hover:underline">Terms of Use</a>
            <a href="/privacy" className="hover:underline">Privacy Statement</a>
            <a href="/cookies" className="hover:underline">Cookies Settings</a>
          </nav>
        </div>
        <div className="flex items-end mt-4 md:mt-0">
          <span className="text-xs text-gray-500">
            Copyright © 2025 An Group
            <br className="block md:hidden" />
            All rights reserved.
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
