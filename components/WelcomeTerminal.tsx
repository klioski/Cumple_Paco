export default function WelcomeTerminal() {
  return (
    <section className="terminal-panel rounded-md px-4 py-5 sm:px-6 sm:py-6">
      <div className="mb-3 flex items-center gap-2 text-xs text-term-greendim">
        <span className="h-2.5 w-2.5 rounded-full bg-term-red/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-term-amber/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-term-green/80" />
        <span className="ml-2">bash — contingency_bday.sh</span>
      </div>
      <div className="space-y-2 text-sm leading-relaxed sm:text-base">
        <p>
          <span className="text-term-cyan">$</span> ejecutando{" "}
          <span className="text-term-green">contingency_bday.sh --target=PACO</span>
        </p>
        <p className="text-term-greendim">&gt; Verificando integridad del calendario biológico... OK</p>
        <p className="text-term-greendim">&gt; Script de contingencia de cumpleaños: ACTIVADO</p>
        <p className="pt-2">
          Agente <span className="text-glow-green font-bold text-term-green">PACO</span>, tu nivel de
          acceso ha sido elevado temporalmente. Has sido{" "}
          <span className="text-term-cyan">seleccionado para auditar un protocolo de alta seguridad</span>{" "}
          antes de que el sistema colapse bajo el peso de otro año más de servicio.
        </p>
        <p>
          Para continuar con la auditoría, deberás depurar y ejecutar el módulo adjunto
          <span className="text-term-amber"> SystemCoreAudit.java</span>. El sistema no revelará nada
          por las buenas.
        </p>
      </div>
    </section>
  );
}
