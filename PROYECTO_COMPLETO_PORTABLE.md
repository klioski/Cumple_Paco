# Protocolo Paco — Proyecto completo portable

Este archivo contiene **todo el código fuente** del proyecto "Protocolo Paco" para que puedas
reconstruirlo idéntico en otra máquina (por ejemplo tu equipo personal, si en el trabajo no
puedes instalar/ejecutar estas herramientas).

Instrucciones de uso al final del documento.

---

## Estructura de carpetas a crear

```
protocolo-paco/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── BinaryRain.tsx
│   ├── CodeChallenge.tsx
│   ├── CriticalWarning.tsx
│   ├── PhaseBanner.tsx
│   ├── RiddleBox.tsx
│   ├── SecondFactor.tsx
│   ├── SystemFooter.tsx
│   ├── SystemHeader.tsx
│   └── WelcomeTerminal.tsx
├── lib/
│   └── javaCode.ts
├── public/                (vacía, se puede dejar sin archivos)
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

---

## `package.json`

```json
{
  "name": "protocolo-paco",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.35",
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
  "devDependencies": {
    "@types/node": "20.14.9",
    "@types/react": "18.3.3",
    "@types/react-dom": "18.3.0",
    "autoprefixer": "10.4.19",
    "postcss": "8.4.39",
    "tailwindcss": "3.4.4",
    "typescript": "5.5.3"
  }
}
```

---

## `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## `next.config.mjs`

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
```

---

## `tailwind.config.ts`

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        term: {
          bg: "#060a08",
          panel: "#0b1410",
          green: "#39ff6a",
          greendim: "#1c8f3c",
          cyan: "#4af2ff",
          amber: "#ffb000",
          red: "#ff3b3b",
        },
      },
      fontFamily: {
        mono: ["var(--font-jbmono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        glow: "0 0 8px rgba(57,255,106,0.55), 0 0 24px rgba(57,255,106,0.25)",
        glowCyan: "0 0 8px rgba(74,242,255,0.55), 0 0 24px rgba(74,242,255,0.25)",
        glowRed: "0 0 8px rgba(255,59,59,0.6), 0 0 24px rgba(255,59,59,0.3)",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "45%": { opacity: "0.85" },
          "50%": { opacity: "0.4" },
          "55%": { opacity: "0.9" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        flicker: "flicker 3.5s infinite",
        blink: "blink 1s step-start infinite",
        scan: "scan 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## `postcss.config.js`

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

## `.gitignore`

```
/node_modules
/.next/
/out/
.env*.local
*.log
.DS_Store
```

---

## `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
}

html,
body {
  background-color: #060a08;
}

body {
  background-image:
    radial-gradient(ellipse at top, rgba(57, 255, 106, 0.06), transparent 60%),
    repeating-linear-gradient(
      0deg,
      rgba(57, 255, 106, 0.035) 0px,
      rgba(57, 255, 106, 0.035) 1px,
      transparent 1px,
      transparent 3px
    );
}

::selection {
  background: #39ff6a;
  color: #060a08;
}

.terminal-panel {
  background: rgba(11, 20, 16, 0.85);
  border: 1px solid rgba(57, 255, 106, 0.35);
  box-shadow: 0 0 0 1px rgba(57, 255, 106, 0.08) inset, 0 0 24px rgba(57, 255, 106, 0.08);
}

.text-glow-green {
  text-shadow: 0 0 6px rgba(57, 255, 106, 0.8), 0 0 18px rgba(57, 255, 106, 0.35);
}

.text-glow-cyan {
  text-shadow: 0 0 6px rgba(74, 242, 255, 0.8), 0 0 18px rgba(74, 242, 255, 0.35);
}

.text-glow-red {
  text-shadow: 0 0 6px rgba(255, 59, 59, 0.85), 0 0 18px rgba(255, 59, 59, 0.4);
}

.scrollbar-term::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.scrollbar-term::-webkit-scrollbar-track {
  background: #0b1410;
}

.scrollbar-term::-webkit-scrollbar-thumb {
  background: rgba(57, 255, 106, 0.4);
  border-radius: 4px;
}
```

---

## `app/layout.tsx`

```tsx
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-jbmono",
});

export const metadata: Metadata = {
  title: "PROTOCOLO PACO :: Sistema de Contingencia - Pista 01",
  description:
    "[ CLASSIFIED SYSTEM WARNING: CONGRATULATIONS PROTOCOL ] -- Acceso restringido. Auditoría de seguridad requerida.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${jbMono.variable} font-mono bg-term-bg text-term-green antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

---

## `app/page.tsx`

```tsx
import BinaryRain from "@/components/BinaryRain";
import SystemHeader from "@/components/SystemHeader";
import WelcomeTerminal from "@/components/WelcomeTerminal";
import CodeChallenge from "@/components/CodeChallenge";
import RiddleBox from "@/components/RiddleBox";
import SecondFactor from "@/components/SecondFactor";
import PhaseBanner from "@/components/PhaseBanner";
import CriticalWarning from "@/components/CriticalWarning";
import SystemFooter from "@/components/SystemFooter";

export default function Home() {
  return (
    <main className="relative min-h-screen px-3 py-6 sm:px-6 sm:py-10">
      <BinaryRain />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col gap-6">
        <SystemHeader />
        <WelcomeTerminal />
        <CodeChallenge />
        <RiddleBox />
        <SecondFactor />
        <PhaseBanner />
        <CriticalWarning />
        <SystemFooter />
      </div>
    </main>
  );
}
```

---

## `lib/javaCode.ts`

```ts
export const JAVA_FILE_NAME = "SystemCoreAudit.java";

export const JAVA_SOURCE = `import java.util.Vector;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.List;
import java.io.Serializable;
import java.util.concurrent.ConcurrentHashMap;

public class SystemCoreAudit implements Serializable {

    private static final long serialVersionUID = 0xDEADBEEFL;
    private static final ConcurrentHashMap<String, Object> memoryPool = new ConcurrentHashMap<>();

    public static void main(String[] args) {
        HashMap<String, Integer> dummyCache = new HashMap<>();
        dummyCache.put("alpha", 404);
        dummyCache.put("beta", 500);
        dummyCache.put("gamma", 503);
        dummyCache.put("delta", 301);

        String legacyProtocol = "HTTP/1.1 200 OK Connection: Keep-Alive";
        boolean isProductionReady = false
        boolean forceCacheFlush = true;
        Vector<Thread> ghostThreads = new Vector<>();
        List<String> auditLogs = new ArrayList<>();

        int statusChecksum = 0;
        for (Integer code : dummyCache.values()) {
            statusChecksum ^= code;
        }

        for (int i = 0; i < dummyCache.size(); i++) {
            ghostThreads.add(new Thread("Daemon-Worker-" + i));
            auditLogs.add("LOG_WARN: Buffer index " + i + " unresponsive.");
        }

        if (forceCacheFlush && !isProductionReady) {
            memoryPool.put("status", legacyProtocol);
        }

        String nodeAlias = "PACO-NODE-42";
        int aliasFactor = 0;
        for (int i = 0; i < nodeAlias.length(); i++) {
            aliasFactor += nodeAlias.charAt(i) * (i + 1);
        }

        int baseDias = 11;
        int factorHex = 0x10;
        int passSeed = (baseDias * factorHex) ^ statusChecksum;
        int passRaw = (passSeed << 5) + (aliasFactor % 991);

        double entropyFactor = Math.random() * 3.1416;
        if (entropyFactor < 0) {
            passRaw = (int) (passRaw * entropyFactor);
        }

        String secondFactorAnswer = "ESCRIBE_AQUI_TU_RESPUESTA"; // Resuelve el acertijo de la web y sustituye este texto
        int keyHash = secondFactorAnswer.trim().toUpperCase().hashCode();

        passRaw = passRaw ^ (keyHash & 0xFF);

        String userSeed = String.valueOf((aliasFactor + statusChecksum) ^ (keyHash & 0xFFF));
        Integer userRaw = userSeed;

        for (String log : auditLogs) {
            if (log.contains("FATAL")) {
                System.out.println(log);
            }
        }

        System.out.println("=== EXTRACCION DE CREDENCIALES ===");
        Systm.out.println("USER_RAW: " + userRaw);
        System.out.println("PASS_RAW: " + passRaw);
    }
}
\`;
```

> ⚠️ Nota: este archivo `.ts` contiene el código Java como **texto dentro de un template string**
> (triple backtick de JS, no de Markdown). Al copiarlo, respeta exactamente las comillas invertidas
> (`` ` ``) de apertura y cierre. El código Java tiene 3 errores de compilación **a propósito**
> (falta un `;` tras `isProductionReady`, `Integer userRaw = userSeed` con tipo incorrecto —
> `userSeed` es `String`, no se puede asignar directo a `Integer` —, y `Systm.out.println` mal
> escrito) — es el reto que debe depurar Paco. No los corrijas aquí.
>
> Importante: `USER_RAW` y `PASS_RAW` ya **no** son literales visibles en el código (antes
> `"3000"` y `11 * 16` se podían leer a simple vista sin compilar nada). Ahora ambos salen de un
> checksum XOR sobre `dummyCache` más una suma ponderada de los códigos de carácter de
> `"PACO-NODE-42"`, con un desplazamiento de bits (`<<`) y un módulo de por medio. El resultado es
> determinista (el `Math.random()` sigue siendo un señuelo: `entropyFactor` nunca es negativo, así
> que esa rama jamás se ejecuta), pero calcularlo a mano es tan tedioso que la vía realista es
> arreglar los 3 errores y ejecutarlo. Si cambias `nodeAlias`, `dummyCache` o las constantes, los
> valores finales cambiarán — pruébalo tú mismo con `javac`/`java` antes de dar por buena cualquier
> credencial calculada "de cabeza".
>
> ⚠️ Segundo factor (anti-IA): `keyHash` es el `String.hashCode()` de Java de la respuesta
> normalizada (`trim().toUpperCase()`) de `secondFactorAnswer`, y entra por XOR en `passRaw` y en
> `userSeed`. A propósito **no hay ningún `if` ni mensaje que compare `keyHash` contra un valor
> esperado** — si lo hubiera (como en una versión anterior de este archivo, que imprimía
> `AUTENTICACION_SECUNDARIA: OK/FALLIDA` comparando contra una constante `EXPECTED_KEY_HASH`
> visible en el código), cualquiera podría asumir "éxito" y sustituir esa constante conocida en
> las fórmulas sin necesitar la respuesta real — de hecho así se detectó el fallo: un agente de
> IA sin ninguna pista sobre la respuesta calculó igualmente los valores finales correctos solo
> asumiendo que `keyHash == EXPECTED_KEY_HASH`. Por eso ahora el programa simplemente usa
> `keyHash` tal cual, sin exponer en ningún sitio cuál sería el valor "correcto": si
> `secondFactorAnswer` está mal, `USER_RAW`/`PASS_RAW` salen distintos, sin ningún aviso ni forma
> de confirmarlo desde el propio código. La única verificación real ocurre al intentar entrar a
> la app de la siguiente fase.

---

## `components/BinaryRain.tsx`

```tsx
"use client";

import { useEffect, useRef } from "react";

export default function BinaryRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const fontSize = 16;
    let columns = Math.floor(width / fontSize);
    let drops = new Array(columns).fill(1);

    const glyphs = "01";
    const birthdayWords = ["FELIZ", "CUMPLE", "PACO", "42"];

    function draw() {
      if (!ctx) return;
      ctx.fillStyle = "rgba(6, 10, 8, 0.12)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px var(--font-jbmono), monospace`;

      for (let i = 0; i < drops.length; i++) {
        const useWord = Math.random() > 0.995;
        const text = useWord
          ? birthdayWords[Math.floor(Math.random() * birthdayWords.length)][0]
          : glyphs[Math.floor(Math.random() * glyphs.length)];

        ctx.fillStyle = useWord
          ? "rgba(255, 176, 0, 0.9)"
          : Math.random() > 0.93
          ? "rgba(74, 242, 255, 0.85)"
          : "rgba(57, 255, 106, 0.75)";

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 45);

    function handleResize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = new Array(columns).fill(1);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-50"
    />
  );
}
```

---

## `components/SystemHeader.tsx`

```tsx
export default function SystemHeader() {
  const now = new Date();
  const timestamp = now.toISOString();

  return (
    <header className="terminal-panel relative overflow-hidden rounded-md">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-term-green to-transparent animate-scan" />
      <div className="flex flex-col gap-1 border-b border-term-green/20 px-4 py-2 text-xs text-term-greendim">
        <span>root@contingency-grid:~# tail -f /var/log/auth_protocol.log</span>
        <span>[{timestamp}] AUTH_LEVEL=5 SESSION=0xBDAY-PACO ACCESS=GRANTED</span>
      </div>
      <div className="px-4 py-6 text-center sm:py-8">
        <p className="text-glow-red animate-flicker text-sm font-bold uppercase tracking-widest text-term-red sm:text-base">
          [ CLASSIFIED SYSTEM WARNING: CONGRATULATIONS PROTOCOL ]
        </p>
        <h1 className="mt-3 text-2xl font-extrabold uppercase tracking-tight text-glow-green sm:text-4xl">
          PROTOCOLO PACO
        </h1>
        <p className="mt-2 text-sm uppercase tracking-[0.3em] text-term-cyan text-glow-cyan sm:text-base">
          Sistema de Contingencia — Pista 01
        </p>
      </div>
    </header>
  );
}
```

---

## `components/WelcomeTerminal.tsx`

```tsx
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
```

---

## `components/CodeChallenge.tsx`

```tsx
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
```

---

## `components/RiddleBox.tsx`

```tsx
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
```

---

## `components/SecondFactor.tsx`

```tsx
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
```

> ⚠️ Importante: el acertijo apunta a que el nombre legal de su esposa no es el que ella usa a
> diario (y que a ella no le gusta ese nombre legal) — un hecho privado que solo Paco conoce de
> entrada, no deducible leyendo esta página. Ni el apodo ni el nombre legal están escritos en
> ningún archivo de este repositorio; solo el `hashCode()` numérico en `EXPECTED_KEY_HASH`. Si en
> algún momento cambias la respuesta esperada, recalcula ese hash fuera del repositorio y pega
> aquí solo el número — nunca el nombre en claro.

---

## `components/PhaseBanner.tsx`

```tsx
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
```

---

## `components/CriticalWarning.tsx`

```tsx
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
```

---

## `components/SystemFooter.tsx`

```tsx
export default function SystemFooter() {
  return (
    <footer className="mt-10 border-t border-term-green/15 px-2 py-6 text-center text-xs text-term-greendim">
      <p>&gt; END OF TRANSMISSION — CONNECTION WILL SELF-TERMINATE IN 3... 2... 1...</p>
      <p className="mt-1">PROTOCOLO PACO © {new Date().getFullYear()} — CONTINGENCY GRID</p>
    </footer>
  );
}
```

---

## `README.md`

```md
# Protocolo Paco — Sistema de Contingencia (Pista 01)

App Next.js (App Router) + Tailwind CSS. Sin backend, sin variables de entorno.

## Desplegar en Vercel en menos de 2 minutos (sin GitHub)

Vercel no tiene una zona de "arrastrar carpeta" en su web — para desplegar sin conectar un repositorio se usa la **Vercel CLI**, que sube los archivos directo desde tu máquina.

1. Instala la CLI (una sola vez):
   npm install -g vercel
2. Dentro de la carpeta del proyecto, inicia sesión (abre el navegador para autenticarte):
   vercel login
3. Despliega:
   vercel
   Te hará un par de preguntas (acepta los valores por defecto: Set up and deploy? -> Yes, Link to existing project? -> No, Project name -> Enter, Directory -> Enter). Vercel detecta Next.js automáticamente.
4. Cuando termine, te dará una URL de vista previa. Para publicarla como definitiva:
   vercel --prod
5. Listo: tendrás una URL tipo https://protocolo-paco.vercel.app

### Alternativa con GitHub

1. Sube esta carpeta a un repositorio en GitHub/GitLab/Bitbucket.
2. Entra a vercel.com -> Add New Project -> importa el repositorio.
3. Vercel detecta Next.js automáticamente. Click en Deploy.

## Desarrollo local

npm install
npm run dev

Abre http://localhost:3000.
```

---

## Instrucciones para reconstruir el proyecto en otra máquina

1. En la otra máquina, crea una carpeta nueva, por ejemplo `protocolo-paco`.
2. Dentro de ella, crea cada subcarpeta (`app`, `components`, `lib`, `public`) y cada archivo
   exactamente con el **nombre y ruta** indicados en cada sección de arriba, copiando el contenido
   del bloque de código correspondiente tal cual (sin los ``` de Markdown, solo lo que está dentro).
3. Requisitos previos en esa máquina: tener instalado **Node.js 18 o superior** (incluye `npm`).
   Verifica con:
   ```bash
   node -v
   npm -v
   ```
4. Dentro de la carpeta del proyecto, instala dependencias:
   ```bash
   npm install
   ```
5. Prueba en local:
   ```bash
   npm run dev
   ```
   y abre `http://localhost:3000`.
6. Para desplegar en Vercel sin GitHub, sigue la sección "Desplegar en Vercel" del `README.md`
   (usa la Vercel CLI: `npm install -g vercel`, `vercel login`, `vercel`, `vercel --prod`).

Con esto el proyecto quedará exactamente igual al que se generó aquí, listo para desplegarse desde
la otra máquina.
