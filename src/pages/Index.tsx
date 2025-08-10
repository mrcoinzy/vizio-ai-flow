import AiLaszloHero from "@/components/AiLaszloHero";
import ComparisonSection from "@/components/ComparisonSection";

const Index = () => {
  return (
    <div className="theme-ai text-foreground relative z-10 overflow-visible bg-[hsl(var(--background)/0.95)]">
      <AiLaszloHero />
      <ComparisonSection />
    </div>
  );
};

export default Index;
