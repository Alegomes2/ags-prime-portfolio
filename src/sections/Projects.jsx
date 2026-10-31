import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const filters = [
  { id: 'all', label: 'Todos' },
  { id: 'fullstack', label: 'Desenvolvimento' },
  { id: 'automation', label: 'Automações e IA' },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const visibleProjects = projects.filter(project => filter === 'all' || project.category === filter);
  return (
    <section id="projects" className="scroll-mt-24 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[.25em] text-amber-300">Portfólio • AGS Prime Technology</p>
        <h2 className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl">Projetos e soluções <span className="text-cyan-400">em destaque</span></h2>
        <p className="mx-auto mb-9 max-w-2xl text-center text-slate-300">Aplicações web e demonstrações de automações criadas para resolver problemas reais de gestão, atendimento e produtividade.</p>
        <div className="mb-9 flex flex-wrap justify-center gap-3" role="group" aria-label="Filtrar projetos">
          {filters.map(item => <button key={item.id} type="button" onClick={() => setFilter(item.id)} aria-pressed={filter === item.id} className={`rounded-full border px-5 py-2 text-sm font-medium transition ${filter === item.id ? 'border-cyan-400 bg-cyan-400 text-slate-950' : 'border-white/20 bg-slate-900/70 text-slate-200 hover:border-cyan-400/50'}`}>{item.label}</button>)}
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{visibleProjects.map(project => <ProjectCard key={project.id} project={project} />)}</div>
        <p className="mt-8 text-center text-sm text-slate-400">As automações apresentadas são demonstrações com dados de teste. Vídeos e links adicionais serão incluídos após validação.</p>
      </div>
    </section>
  );
}
