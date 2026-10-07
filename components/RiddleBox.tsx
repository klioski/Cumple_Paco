export default function RiddleBox() {
  return (
    <section className="terminal-panel rounded-md border-term-amber/40 px-4 py-5 sm:px-6 sm:py-6">
      <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-term-amber sm:text-base">
        :: PROTOCOLO DE DESCIFRADO ::
      </h2>
      <div className="space-y-2 text-sm leading-relaxed text-term-green/90 sm:text-base">
        <p>
          Una vez que el módulo compile y se ejecute correctamente, el sistema arrojará dos salidas
          numéricas: <span className="text-term-cyan">USER_RAW</span> y{" "}
          <span className="text-term-cyan">PASS_RAW</span>.
        </p>
        <p>
          &gt; AVISO: este nodo de contingencia jamás acepta credenciales expresadas en notación
          decimal. Ningún valor en base 10 será reconocido por la siguiente fase del protocolo.
        </p>
        <p>
          Antes de usar estas cifras, deberás aplicar la conversión fundamental que todo sistema
          digital entiende en el fondo. El cómo, agente, corre por tu cuenta.
        </p>
      </div>
    </section>
  );
}
