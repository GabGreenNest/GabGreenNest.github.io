import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-[calc(100vh-4rem)] bg-navbar px-4 pt-24 pb-16 sm:px-8 md:pt-28 md:pb-20 lg:pt-5 flex flex-col items-center scroll-mt-16"
    >
      <div className="w-full max-w-5xl flex flex-col items-center text-center gap-8 text-white">
        {/* Header */}
        <header className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Stay informed on sustainable living
          </h2>
          <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
            Get tips, product launches, and stories delivered straight to your
            inbox monthly.
          </p>
        </header>

        {/* Email form */}
        <form className="flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            placeholder="Your email"
            className="h-9 w-64 sm:w-72 px-3 text-sm text-white placeholder:text-white/70 bg-white/10 border border-white/40 focus:border-white focus:outline-none"
          />
          <button
            type="submit"
            className="h-9 px-4 text-sm font-medium bg-white text-navbar hover:bg-white/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
        <p className="text-[11px] text-white/70 max-w-md">
          By subscribing you agree to our Terms and Conditions and Privacy
          Policy.
        </p>

        {/* Image placeholder */}
        <div className="mt-6 lg:mt-0 w-full max-w-5xl aspect-video bg-white/10 flex items-center justify-center">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-2xl bg-white/15 flex items-center justify-center">
            <span className="text-5xl md:text-6xl text-white/50">🖼️</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

