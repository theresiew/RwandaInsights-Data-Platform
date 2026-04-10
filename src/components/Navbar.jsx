const navItems = ["Economy", "Population", "Health", "Education"];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
            RwandaInsights
          </p>
          <h1 className="text-lg font-semibold text-white">
            National Development Dashboard
          </h1>
        </div>

        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
