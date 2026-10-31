import { ArrowDownRight, ArrowUpRight } from "lucide-react";

function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="flex min-h-screen items-center justify-center px-6 pb-20 pt-36 text-center">
      <div className="mx-auto max-w-5xl">
        <p className="mb-6 inline-flex rounded-full border border-amber-400/30 bg-amber-400/5 px-5 py-2 text-xs font-semibold tracking-[.15em] text-amber-300 sm:text-sm">AGS PRIME TECHNOLOGY</p>
        <h1 className="mb-7 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-7xl">
          Desenvolvimento <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">Full Stack</span>,<br className="hidden md:block" /> Automação e <span className="text-amber-400">Inteligência Artificial</span>
        </h1>
        <p className="mx-auto mb-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-xl">Crio aplicações web e automações que transformam processos em soluções digitais práticas.</p>
        <p className="mb-10 text-sm text-slate-400 sm:text-base">Alexandre Gomes dos Santos • Desenvolvedor responsável pela AGS Prime Technology</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button type="button" onClick={() => scrollTo("projects")} className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">Explorar projetos <ArrowDownRight size={18} /></button>
          <button type="button" onClick={() => scrollTo("contact")} className="inline-flex items-center gap-2 rounded-lg border border-amber-400/70 px-6 py-3 font-semibold text-amber-300 transition hover:bg-amber-400/10">Fale comigo <ArrowUpRight size={18} /></button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
