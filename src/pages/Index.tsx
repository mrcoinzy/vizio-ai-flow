import AiLaszloHero from "@/components/AiLaszloHero";
import PartnerStrip from "@/components/PartnerStrip";
import ComparisonSection from "@/components/ComparisonSection";
import ServicesSection from "@/components/ServicesSection";
import ScrollNavbar from "@/components/ScrollNavbar";

const Index = () => {
  return (
    <div className="theme-ai bg-background text-foreground">
      <ScrollNavbar />
      <AiLaszloHero />
      <PartnerStrip />
      <ComparisonSection />
      <ServicesSection />
    </div>
  );
};

export default Index;
