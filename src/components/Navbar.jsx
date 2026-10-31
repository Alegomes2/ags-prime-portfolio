import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { id: "hero", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "tech", label: "Tecnologias" },
  { id: "projects", label: "Projetos e IA" },
  { id: "contact", label: "Contato" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cyan-400/15 bg-slate-950/90 backdrop-blur-xl">
      <nav aria-label="Navegação principal" className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <button type="button" onClick={() => navigateTo("hero")} className="text-left" aria-label="Ir para o início">
          <span className="block text-lg font-black tracking-wide text-white">AGS <span className="text-cyan-400">Prime</span> <span className="text-amber-400">Technology</span></span>
          <span className="block text-[10px] tracking-[.18em] text-slate-400">FULL STACK • AUTOMAÇÃO • IA</span>
        </button>
        <div className="hidden items-center gap-6 md:flex">
          {links.map(({ id, label }) => (
            <button key={id} type="button" onClick={() => navigateTo(id)} className="text-sm text-slate-300 transition hover:text-cyan-300">{label}</button>
          ))}
        </div>
        <button type="button" className="rounded-lg border border-white/15 p-2 text-white md:hidden" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {menuOpen && <div id="mobile-menu" className="flex flex-col border-t border-white/10 bg-slate-950 px-5 pb-5 md:hidden">
        {links.map(({ id, label }) => <button key={id} type="button" onClick={() => navigateTo(id)} className="py-3 text-left text-slate-200">{label}</button>)}
      </div>}
    </header>
  );
}

export default Navbar;
