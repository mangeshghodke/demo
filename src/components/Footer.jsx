export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Mayur Art" className="h-12 w-12" />
            <p className="mt-2 text-lg font-bold text-white" style={{ fontFamily: "'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif" }}>मयूर आर्ट</p>
            <p className="text-sm text-gray-400">
              Premium sign boards manufacturer & supplier in Solapur, Maharashtra since 2017.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Quick Links</h4>
            <div className="mt-3 space-y-2">
              <a href="#home" className="block text-sm text-gray-400 transition hover:text-white">Home</a>
              <a href="#about" className="block text-sm text-gray-400 transition hover:text-white">About</a>
              <a href="#products" className="block text-sm text-gray-400 transition hover:text-white">Products</a>
              <a href="#contact" className="block text-sm text-gray-400 transition hover:text-white">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Contact</h4>
            <div className="mt-3 space-y-2 text-sm text-gray-400">
              <p>Shop No. 31, Hutatma Smruti Mandir,<br />Railway Lines, Solapur - 413001</p>
              <p>+91 9890866229</p>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Mayur Art. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
