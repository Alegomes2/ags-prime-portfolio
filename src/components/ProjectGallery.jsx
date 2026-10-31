
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function ProjectGallery({
  title,
  images,
  onClose,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalImages = images.length;

  const nextImage = () => {
    setCurrentIndex((previousIndex) =>
      (previousIndex + 1) % totalImages
    );
  };

  const previousImage = () => {
    setCurrentIndex((previousIndex) =>
      (previousIndex - 1 + totalImages) % totalImages
    );
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight" && totalImages > 1) {
        setCurrentIndex((index) =>
          (index + 1) % totalImages
        );
      }

      if (event.key === "ArrowLeft" && totalImages > 1) {
        setCurrentIndex((index) =>
          (index - 1 + totalImages) % totalImages
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, totalImages]);

  if (totalImages === 0) return null;

  return createPortal(
    <div
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-3 backdrop-blur-lg md:p-8"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Galeria do projeto ${title}`}
        className="flex max-h-[95vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-cyan-400/30 bg-slate-950 shadow-2xl"
      >
        {/* Cabeçalho */}
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-4 md:px-6">
          <div>
            <h3 className="font-semibold text-white md:text-lg">
              {title}
            </h3>

            <p className="text-xs text-slate-400">
              {currentIndex + 1} de {totalImages} imagens
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar galeria"
            className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Imagem principal */}
        <div className="relative flex min-h-0 flex-1 items-center justify-center bg-black/60 p-3 md:p-6">
          <img
            src={images[currentIndex]}
            alt={`Imagem ${currentIndex + 1} do projeto ${title}`}
            className="max-h-[60vh] max-w-full rounded-lg object-contain"
          />

          {totalImages > 1 && (
            <>
              <button
                type="button"
                onClick={previousImage}
                aria-label="Imagem anterior"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-slate-950/85 p-2 text-white transition hover:border-cyan-400 hover:text-cyan-300 md:left-5"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                type="button"
                onClick={nextImage}
                aria-label="Próxima imagem"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-slate-950/85 p-2 text-white transition hover:border-cyan-400 hover:text-cyan-300 md:right-5"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {/* Miniaturas */}
        {totalImages > 1 && (
          <div className="flex shrink-0 gap-3 overflow-x-auto border-t border-white/10 p-4">
            {images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ver imagem ${index + 1}`}
                aria-current={
                  currentIndex === index ? "true" : undefined
                }
                className={`h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition md:h-20 md:w-32 ${
                  currentIndex === index
                    ? "border-cyan-400 opacity-100"
                    : "border-transparent opacity-50 hover:opacity-100"
                }`}
              >
                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
