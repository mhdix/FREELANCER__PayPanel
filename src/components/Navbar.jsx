import React from 'react'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 h-16 gap-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* <img
            src="/NIPcard.png"
            alt="NIPcard"
            className="w-10 h-10 object-contain"
          /> */}

          <div>
            <h1 className="font-bold text-lg text-slate-900">
              NIP<span className="text-cyan-500">card</span>
            </h1>

            <p className="text-[10px] text-slate-500">Smart Payment Card</p>
          </div>
        </div>

        <a
          href="tel:09925438078"
          className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm hover:bg-slate-800 transition"
        >
          رزرو نیپ‌کارت
        </a>
      </div>
    </nav>
  );
}

export default Navbar