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
