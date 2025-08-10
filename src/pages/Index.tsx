import AiLaszloHero from "@/components/AiLaszloHero";
import ComparisonSection from "@/components/ComparisonSection";
import SharedBackground from "@/components/SharedBackground";
const Index = () => {
  return (
    <div className="theme-ai relative bg-background text-foreground">
      <SharedBackground />
      <AiLaszloHero />
      <ComparisonSection />
    </div>
  );
};

export default Index;
