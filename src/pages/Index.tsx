import AiLaszloHero from "@/components/AiLaszloHero";
import PartnerStrip from "@/components/PartnerStrip";
import ComparisonSection from "@/components/ComparisonSection";
import ServicesSection from "@/components/ServicesSection";
import ReferencesSection from "@/components/ReferencesSection";
import ScrollNavbar from "@/components/ScrollNavbar";

const Index = () => {
  return (
    <div className="theme-ai bg-background text-foreground">
      <ScrollNavbar />
      <AiLaszloHero />
      <PartnerStrip />
      <ComparisonSection />
      <ServicesSection />
      <ReferencesSection />
    </div>
  );
};

export default Index;
