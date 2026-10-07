export default function CriticalWarning() {
  return (
    <section className="relative overflow-hidden rounded-md border-2 border-term-red/70 bg-term-red/5 px-4 py-5 text-center shadow-glowRed sm:px-6 sm:py-6">
      <p className="text-glow-red animate-flicker text-sm font-extrabold uppercase tracking-wide text-term-red sm:text-base">
        ⚠️ CONDICIÓN INELUDIBLE
      </p>
      <p className="mt-2 text-sm font-semibold leading-relaxed text-term-red/90 sm:text-base">
        Debes tener completamente libre el{" "}
        <span className="animate-blink">SÁBADO 17 DE OCTUBRE</span> para la ejecución final del
        protocolo.
      </p>
      <p className="mt-1 text-xs uppercase tracking-widest text-term-red/60">
        Este requisito no admite excepciones, reprogramaciones ni fuerza mayor.
      </p>
    </section>
  );
}
