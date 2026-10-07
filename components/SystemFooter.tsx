export default function SystemFooter() {
  return (
    <footer className="mt-10 border-t border-term-green/15 px-2 py-6 text-center text-xs text-term-greendim">
      <p>&gt; END OF TRANSMISSION — CONNECTION WILL SELF-TERMINATE IN 3... 2... 1...</p>
      <p className="mt-1">PROTOCOLO PACO © {new Date().getFullYear()} — CONTINGENCY GRID</p>
    </footer>
  );
}
