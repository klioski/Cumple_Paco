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
