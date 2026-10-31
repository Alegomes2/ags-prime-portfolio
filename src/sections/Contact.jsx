
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  // Número do WhatsApp com código do país e DDD
  const phoneNumber = "5527995828244";

  // Mensagem preenchida automaticamente no WhatsApp
  const whatsappMessage = encodeURIComponent(
    "Olá! Conheci seu portfólio da AGS Prime Technology e gostaria de conversar sobre seus serviços."
  );

  const whatsappUrl =
    `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  // Atualiza os campos do formulário
  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  };

  // Envia a mensagem pelo EmailJS
  const sendEmail = async (event) => {
    event.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_oglxgrt",
        "template_gk810da",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "ftvQDEhB_5yoHdwY_"
      );

      setStatus("Mensagem enviada com sucesso!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setStatus(
        "Não foi possível enviar sua mensagem. Tente novamente ou entre em contato pelo WhatsApp."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-4xl px-6 py-20"
    >
      <h2 className="mb-4 text-center text-3xl font-bold text-cyan-400">
        Entre em contato
      </h2>

      <p className="mb-10 text-center text-slate-300">
        Tem um projeto em mente ou deseja automatizar processos
        do seu negócio? Vamos conversar!
      </p>

      <form
        onSubmit={sendEmail}
        className="rounded-2xl border border-cyan-500/20 bg-slate-950/90 p-6 shadow-xl md:p-8"
      >
        <div className="mb-5">
          <label
            htmlFor="contact-name"
            className="mb-2 block text-sm text-slate-300"
          >
            Nome
          </label>

          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Seu nome"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-white/10 bg-slate-800 p-3 text-white outline-none transition focus:border-cyan-400"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="contact-email"
            className="mb-2 block text-sm text-slate-300"
          >
            E-mail
          </label>

          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="seuemail@exemplo.com"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-white/10 bg-slate-800 p-3 text-white outline-none transition focus:border-cyan-400"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="contact-message"
            className="mb-2 block text-sm text-slate-300"
          >
            Mensagem
          </label>

          <textarea
            id="contact-message"
            name="message"
            placeholder="Conte um pouco sobre o que você precisa..."
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full resize-y rounded-lg border border-white/10 bg-slate-800 p-3 text-white outline-none transition focus:border-cyan-400"
          />
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <button
            type="submit"
            disabled={isSending}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send size={18} />
            {isSending ? "Enviando..." : "Enviar mensagem"}
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-slate-950 transition hover:scale-105 hover:bg-[#20BD5A]"
          >
            <FaWhatsapp size={22} />
            Falar pelo WhatsApp
          </a>
        </div>

        {status && (
          <p
            role="status"
            aria-live="polite"
            className="mt-5 text-sm text-slate-300"
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
