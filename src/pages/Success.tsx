import Navbar from "@/components/layout/Navbar";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Success – EcoForge" description="Thanks! If you bought a pack, check your email. If you submitted an idea, we’ll be in touch soon." canonicalPath="/success" />
      <Navbar />
      <main className="container py-12">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Success</h1>
          <p className="text-muted-foreground mt-2">If you purchased a pack, you’ll receive an email with access shortly. If you submitted an idea, we’ll review it and follow up soon.</p>
        </header>
        <div className="flex justify-center gap-3">
          <Button asChild>
            <Link to="/packs">Back to Packs</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link to="/generator">Generate another brief</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Success;
