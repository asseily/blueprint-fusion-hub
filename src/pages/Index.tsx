import Navbar from "@/components/layout/Navbar";
import { SEO } from "@/components/SEO";
import Hero from "@/components/home/Hero";
import gardenImg from "@/assets/product-garden.jpg";
import packagingImg from "@/assets/product-packaging.jpg";
import learningImg from "@/assets/product-learning.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="EcoForge – AI Blueprint Marketplace" description="Turn ideas into technical blueprints and license innovations with AI." canonicalPath="/" />
      <Navbar />
      <main>
        <Hero />
        <section className="container py-16">
          <header className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Blueprints</h2>
            <p className="text-muted-foreground mt-2">Explore innovations available for licensing</p>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[{
              title: "Smart Urban Garden System",
              price: "$499.99",
              img: gardenImg,
            }, {
              title: "Biodegradable Food Packaging",
              price: "$2,999.99",
              img: packagingImg,
            }, {
              title: "AI-Powered Learning Assistant",
              price: "$1,499.99",
              img: learningImg,
            }].map((p) => (
              <Card key={p.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={p.img} alt={`${p.title} product image`} loading="lazy" className="h-44 w-full object-cover" />
                <CardHeader>
                  <CardTitle className="text-lg">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <span className="font-semibold">{p.price}</span>
                  <Button asChild>
                    <Link to="/marketplace">View</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="secondary" asChild>
              <Link to="/marketplace">Browse the Marketplace</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
