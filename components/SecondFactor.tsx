export default function SecondFactor() {
  return (
    <section className="terminal-panel rounded-md border-term-red/40 px-4 py-5 sm:px-6 sm:py-6">
      <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-term-red sm:text-base">
        :: VERIFICACIÓN SECUNDARIA ::
      </h2>
      <div className="space-y-2 text-sm leading-relaxed text-term-green/90 sm:text-base">
        <p>
          &gt; AVISO: compilar y ejecutar el módulo no basta. El nodo exige una{" "}
          <span className="text-term-amber">segunda clave</span> que no está escrita en ningún
          archivo de este sistema — ni en el código, ni en esta página. Solo existe en tu memoria.
        </p>
        <p className="text-term-greendim">
          &gt; ACERTIJO: Ella rechazó hace tiempo el nombre que debía llevar. Hoy respondes a otro
          cuando la llamas — el que ella sí eligió, el que usas sin pensar. Pero este nodo no
          acepta apodos: solo reconoce el nombre que ella nunca quiso, el que firmó sin elegirlo.
          Ese es el dato que debes introducir.
        </p>
        <p>
          Escribe la respuesta (sin importar mayúsculas o espacios) en la variable{" "}
          <span className="text-term-amber">secondFactorAnswer</span> del módulo, antes de
          ejecutarlo. El sistema no te confirmará si acertaste — no hay segunda oportunidad para
          preguntar. Si te equivocas, el programa compilará y correrá igual, pero el{" "}
          <span className="text-term-cyan">USER_RAW</span> y el{" "}
          <span className="text-term-cyan">PASS_RAW</span> que obtengas simplemente no
          funcionarán en la siguiente fase.
        </p>
      </div>
    </section>
  );
}
