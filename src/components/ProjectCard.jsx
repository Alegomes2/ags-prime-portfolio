

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Workflow,
  Code2,
  Images,
} from "lucide-react";

import ProjectGallery from "./ProjectGallery";

export default function ProjectCard({ project }) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const {
    title,
    description,
    tech = [],
    image,
    images = [],
    repo,
    backend,
    demo,
    category,
    status,
  } = project;

  const hasLinks = Boolean(repo || backend || demo);

  // Usa a galeria configurada ou a imagem de capa
  const galleryImages =
    images.length > 0 ? images : image ? [image] : [];

  const coverImage = image || galleryImages[0];

  const hasGallery = galleryImages.length > 0;

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-950/85 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-cyan-500/10"
      >
        {/* Imagem do projeto */}
        <div className="relative h-44 overflow-hidden bg-gradient-to-br from-slate-900 via-[#10243b] to-[#092c39]">
          {coverImage ? (
            <button
              type="button"
              onClick={() => setIsGalleryOpen(true)}
              aria-label={`Abrir galeria de ${title}`}
              className="group relative h-full w-full cursor-zoom-in"
            >
              <img
                src={coverImage}
                alt={`Imagem do projeto ${title}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Indicador de galeria */}
              <span className="absolute right-3 top-3 flex items-center gap-2 rounded-lg border border-white/20 bg-slate-950/85 px-3 py-2 text-xs text-white opacity-90 transition group-hover:border-cyan-400/50 group-hover:text-cyan-300">
                <Images size={15} />
                {galleryImages.length > 1
                  ? `${galleryImages.length} imagens`
                  : "Ampliar"}
              </span>
            </button>
          ) : (
            <div className="flex h-full items-center justify-center">
              {category === "automation" ? (
                <Workflow
                  size={64}
                  className="text-cyan-400/75"
                  aria-hidden="true"
                />
              ) : (
                <Code2
                  size={64}
                  className="text-cyan-400/75"
                  aria-hidden="true"
                />
              )}
            </div>
          )}

          {/* Status */}
          {status && (
            <span className="pointer-events-none absolute bottom-3 left-3 rounded-full border border-amber-400/30 bg-slate-950/90 px-3 py-1 text-xs text-amber-300">
              {status}
            </span>
          )}
        </div>

        {/* Conteúdo */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-2 text-xl font-bold text-white">
            {title}
          </h3>

          <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-300">
            {description}
          </p>

          {/* Tecnologias */}
          {tech.length > 0 && (
            <div className="mb-5 flex flex-wrap gap-2">
              {tech.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-cyan-400/20 bg-cyan-400/10 px-2 py-1 text-xs text-cyan-200"
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {/* Links do projeto */}
          {hasLinks && (
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-white/10 pt-4">
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver aplicação ${title}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-amber-300 transition-colors hover:text-white"
                >
                  <ExternalLink size={16} />
                  Ver aplicação
                </a>
              )}

              {repo && (
                <a
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver código frontend de ${title}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-white"
                >
                  <Github size={16} />
                  Frontend
                </a>
              )}

              {backend && (
                <a
                  href={backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver código backend de ${title}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-white"
                >
                  <Github size={16} />
                  Backend
                </a>
              )}
            </div>
          )}
        </div>
      </motion.article>

      {/* Galeria renderizada fora do card */}
      {isGalleryOpen && hasGallery && (
        <ProjectGallery
          title={title}
          images={galleryImages}
          onClose={() => setIsGalleryOpen(false)}
        />
      )}
    </>
  );
}
