import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "#comunidade", label: "Comunidade" },
  { to: "#precos", label: "Preços" },
  { to: "#ajuda", label: "Ajuda" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        
        {/* LOGO SEM QUADRADO */}
        <Link to="/marketing" className="text-xl font-semibold text-neutral-900">
          CatálogoZap
        </Link>

        {/* desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {NAV.map((n) => (
            <NavLink
              key={n.label}
              to={n.to}
              className="text-neutral-600 hover:text-neutral-900"
            >
              {n.label}
            </NavLink>
          ))}

          <Link to="/login" className="text-neutral-700 hover:text-neutral-900">
            Entrar
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700"
          >
            Experimente grátis
          </Link>
        </div>

        {/* mobile button */}
        <button
          className="md:hidden rounded-lg p-2 text-neutral-700 hover:bg-neutral-100"
          onClick={() => setOpen((s) => !s)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d={open ? "M6 6l12 12M18 6l-12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* mobile dropdown */}
      {open && (
        <div className="md:hidden border-t bg-white shadow-sm animate-fade-down px-4 pb-4 pt-2 text-sm flex flex-col gap-3">
          {NAV.map((n) => (
            <NavLink
              key={n.label}
              to={n.to}
              className="text-neutral-700 hover:text-neutral-900"
              onClick={() => setOpen(false)}
            >
              {n.label}
            </NavLink>
          ))}

          <Link
            to="/login"
            className="text-neutral-700 hover:text-neutral-900"
            onClick={() => setOpen(false)}
          >
            Entrar
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700"
            onClick={() => setOpen(false)}
          >
            Experimente grátis
          </Link>
        </div>
      )}
    </nav>
  );
}
