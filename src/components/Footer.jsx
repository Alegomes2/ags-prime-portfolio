import { Github, Linkedin, Instagram } from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com/Alegomes2", Icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/alexandregomessantos", Icon: Linkedin },
  { label: "Instagram AGS Prime Tech", href: "https://www.instagram.com/agsprimetech/", Icon: Instagram },
];

function Footer() {
  return (
    <footer className="mt-20 border-t border-cyan-500/20 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-7 px-6 py-10 text-center md:flex-row md:text-left">
        <div>
          <p className="text-xl font-bold text-white">AGS <span className="text-cyan-400">Prime</span> <span className="text-amber-400">Technology</span></p>
          <p className="mt-2 text-sm text-slate-400">Desenvolvimento Full Stack • Automação • IA</p>
          <p className="mt-1 text-xs text-slate-500">Por Alexandre Gomes dos Santos</p>
        </div>
        <div className="flex gap-3">
          {socials.map(({ label, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="rounded-lg bg-slate-800 p-3 text-slate-200 transition hover:bg-slate-700 hover:text-cyan-300"><Icon size={20} /></a>
          ))}
        </div>
      </div>
      <p className="border-t border-white/5 px-6 py-5 text-center text-xs text-slate-500">© {new Date().getFullYear()} AGS Prime Technology. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
