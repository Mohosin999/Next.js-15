// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo or Brand Name */}
          <div className="mb-4 md:mb-0">
            <p className="text-white text-lg font-semibold">MyWebsite</p>
          </div>

          {/* Navigation Links */}
          <div className="space-x-4 text-sm">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <a href="/about" className="hover:text-white">
              About
            </a>
            <a href="/services" className="hover:text-white">
              Services
            </a>
            <a href="/contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
