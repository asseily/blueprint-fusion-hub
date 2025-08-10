import Navbar from "@/components/layout/Navbar";
import { SEO } from "@/components/SEO";
import gardenImg from "@/assets/product-garden.jpg";
import packagingImg from "@/assets/product-packaging.jpg";
import learningImg from "@/assets/product-learning.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const items = [
  {
    title: "Smart Urban Garden System",
    price: "$499.99",
    img: gardenImg,
    desc: "Automated indoor/outdoor vertical gardening with IoT monitoring.",
    paymentLink: "https://buy.stripe.com/fZu14g04C84n7WM0fQfnO00",
  },
  {
    title: "Biodegradable Food Packaging",
    price: "$2,999.99",
    img: packagingImg,
    desc: "Compostable, fiber-based packaging with optimized durability.",
    paymentLink: "", // TODO: Paste your payment link
  },
  {
    title: "AI-Powered Learning Assistant",
    price: "$1,499.99",
    img: learningImg,
    desc: "Adaptive study assistant that personalizes learning pathways.",
    paymentLink: "", // TODO: Paste your payment link
  },
];

const Packs = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Blueprint Packs – EcoForge" description="Buy ready-to-execute eco micro-business blueprint packs." canonicalPath="/packs" />
      <Navbar />
      <main className="container py-12">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Blueprint Packs</h1>
          <p className="text-muted-foreground mt-2">Business-ready bundles including specs, suppliers, and launch plan</p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <Card key={p.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img src={p.img} alt={`Blueprint pack image for ${p.title}`} loading="lazy" className="h-48 w-full object-cover" />
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{p.price}</span>
                  {p.paymentLink ? (
                    <Button asChild>
                      <a href={p.paymentLink} target="_blank" rel="noopener noreferrer">Buy Now</a>
                    </Button>
                  ) : (
                    <Button onClick={() => toast("Payment link coming soon. Contact sales@ecoforge.app")}>Buy Now</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Packs;
