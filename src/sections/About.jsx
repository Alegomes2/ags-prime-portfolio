function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">Quem está por trás da AGS</p>
          <h2 className="mb-6 text-3xl font-bold text-cyan-300 sm:text-4xl">Tecnologia com foco em problemas reais</h2>
          <p className="mb-4 leading-relaxed text-slate-300">Sou Alexandre Gomes dos Santos, desenvolvedor Full Stack e responsável pela AGS Prime Technology. Desenvolvo aplicações web e soluções de automação para organizar processos, facilitar atendimentos e apoiar negócios.</p>
          <p className="mb-8 leading-relaxed text-slate-400">Trabalho com React, JavaScript, TypeScript, Node.js e PostgreSQL, além de fluxos de automação com n8n e integrações com modelos de IA. Neste portfólio, você encontra projetos de desenvolvimento e demonstrações práticas dessas soluções.</p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300">Entrar em contato</a>
            <a href="/Alexandre-Gomes-FullStack-Developer.pdf" download className="rounded-lg border border-cyan-400/60 px-5 py-3 font-semibold text-cyan-300 hover:bg-cyan-400/10">Baixar currículo</a>
          </div>
        </div>
        <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/80 p-8 shadow-xl shadow-cyan-950/20">
          <h3 className="mb-6 text-xl font-bold text-white">Áreas de atuação</h3>
          <ul className="space-y-5 text-slate-300">
            <li><strong className="block text-cyan-300">Desenvolvimento Full Stack</strong> Interfaces, APIs e integração com bancos de dados.</li>
            <li><strong className="block text-cyan-300">Automações com n8n</strong> Integração de ferramentas e otimização de tarefas repetitivas.</li>
            <li><strong className="block text-cyan-300">Agentes de IA</strong> Demonstrações de atendimento, agendamento e relacionamento com clientes.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
