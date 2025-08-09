import Navbar from "@/components/layout/Navbar";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Payment Successful – EcoForge" description="Your purchase was successful." canonicalPath="/success" />
      <Navbar />
      <main className="container py-12">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Payment Successful</h1>
          <p className="text-muted-foreground mt-2">You’ll receive an email with your pack shortly.</p>
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
