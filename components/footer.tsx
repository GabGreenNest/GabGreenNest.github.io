import React from "react";

const Footer = () => {
  return (
    <footer className="bg-navbar text-white px-4 py-10 sm:px-8 lg:px-20 lg:py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo + newsletter */}
          <div className="space-y-4">
            <div className="text-2xl font-semibold">Logo</div>
            <p className="text-xs sm:text-sm text-white/80 max-w-xs">
              Get weekly tips on living sustainably and building better homes.
            </p>
            <form className="mt-3 flex">
              <input
                type="email"
                placeholder="Email address"
                className="h-8 w-full max-w-xs px-3 text-xs bg-transparent border border-white/40 text-white placeholder:text-white/70"
              />
              <button
                type="submit"
                className="ml-2 h-8 px-4 text-xs font-medium bg-transparent border border-white text-white hover:bg-white hover:text-navbar transition-colors"
              >
                Join
              </button>
            </form>
            <p className="mt-2 text-[10px] text-white/60 max-w-xs">
              We respect your privacy and only send what matters to you.
            </p>
          </div>

          {/* Shop */}
          <div className="space-y-3 text-sm">
            <h3 className="font-semibold">Shop</h3>
            <ul className="space-y-1 text-white/80">
              <li>About us</li>
              <li>Our work</li>
              <li>Contact</li>
              <li>Resources</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3 text-sm">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-1 text-white/80">
              <li>All products</li>
              <li>About us</li>
              <li>Shipping info</li>
              <li>Returns</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-3 text-sm">
            <h3 className="font-semibold">Connect</h3>
            <ul className="space-y-1 text-white/80">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>X</li>
              <li>LinkedIn</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>

        <hr className="border-white/20" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-white/70">
          <p>© 2025 Imaginary Landing Studio. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <span>Privacy policy</span>
            <span>Terms of service</span>
            <span>Cookie settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

