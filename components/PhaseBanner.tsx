export default function PhaseBanner() {
  return (
    <section className="terminal-panel rounded-md border-term-cyan/50 px-4 py-5 text-center sm:px-6 sm:py-6">
      <p className="text-glow-cyan text-sm font-bold uppercase tracking-wide text-term-cyan sm:text-base">
        ⚠️ PRÓXIMA FASE
      </p>
      <p className="mt-2 text-sm leading-relaxed sm:text-base">
        El <span className="font-bold text-term-cyan">lunes 12 de octubre</span> se te entregará el
        acceso al app oficial, donde deberás utilizar tus credenciales procesadas para continuar.
      </p>
    </section>
  );
}
