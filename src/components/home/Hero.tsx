import hero from "@/assets/hero-ecoforge.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={hero}
          alt="EcoForge AI innovation hero"
          className="w-full h-full object-cover opacity-90"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-background/10" />
      </div>
      <div className="container py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-[hsl(var(--brand))] to-[hsl(var(--brand-2))] bg-clip-text text-transparent">
              EcoForge
            </span>
            <span className="block">Turn ideas into AI-crafted blueprints.</span>
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
            Submit your invention concepts, generate detailed technical plans, and license innovations in a community-driven marketplace.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="hero" size="lg" asChild>
              <Link to="/submit-idea">Submit an Idea</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/marketplace">Explore Marketplace</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
