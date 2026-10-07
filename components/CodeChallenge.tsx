"use client";

import { useState } from "react";
import { JAVA_FILE_NAME, JAVA_SOURCE } from "@/lib/javaCode";

export default function CodeChallenge() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(JAVA_SOURCE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable — ignore, download button still works
    }
  }

  function handleDownload() {
    const blob = new Blob([JAVA_SOURCE], { type: "text/x-java-source" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = JAVA_FILE_NAME;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  const lines = JAVA_SOURCE.split("\n");

  return (
    <section className="terminal-panel rounded-md px-4 py-5 sm:px-6 sm:py-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-glow-cyan text-sm font-bold uppercase tracking-widest text-term-cyan sm:text-base">
          :: EL RETO — MÓDULO DE AUDITORÍA ::
        </h2>
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="rounded border border-term-green/50 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-term-green shadow-glow transition hover:bg-term-green/10 sm:text-sm"
          >
            {copied ? "Copiado_OK" : "Copiar_Código"}
          </button>
          <button
            onClick={handleDownload}
            className="rounded border border-term-cyan/50 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-term-cyan shadow-glowCyan transition hover:bg-term-cyan/10 sm:text-sm"
          >
            Descargar_Traza_Java.java
          </button>
        </div>
      </div>

      <p className="mb-3 text-xs text-term-greendim sm:text-sm">
        &gt; ADVERTENCIA: el módulo contiene fallos de compilación deliberados. El sistema no ejecutará
        nada hasta que corrijas el código en tu propio entorno de desarrollo (IDE / <code>javac</code>).
        Cópialo o descárgalo y repáralo tú mismo.
      </p>

      <div className="scrollbar-term max-h-[480px] overflow-auto rounded border border-term-green/20 bg-black/40">
        <pre className="min-w-max p-4 text-xs leading-relaxed sm:text-sm">
          <code>
            {lines.map((line, idx) => (
              <div key={idx} className="flex">
                <span className="mr-4 w-8 shrink-0 select-none text-right text-term-greendim/60">
                  {idx + 1}
                </span>
                <span className="whitespace-pre text-term-green/90">{line || " "}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </section>
  );
}
