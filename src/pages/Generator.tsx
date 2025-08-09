import Navbar from "@/components/layout/Navbar";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Generator = () => {
  const [industry, setIndustry] = useState("");
  const [idea, setIdea] = useState("");
  const [constraints, setConstraints] = useState("");
  const [target, setTarget] = useState("");
  const [budget, setBudget] = useState("");
  const [brief, setBrief] = useState("");

  const onGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea) {
      toast("Please add a product idea");
      return;
    }
    const text = `Blueprint Brief\n\nProject: ${idea}\nIndustry: ${industry || "General"}\nTarget User: ${target || "N/A"}\nBudget: ${budget || "N/A"}\n\nDeliverables:\n- Problem summary (500 chars)\n- Solution outline with 3 core features\n- Bill of Materials (BOM) with 3 supplier links\n- Simple validation checklist (5 steps)\n- 7-day launch plan with daily tasks\n\nNotes / Constraints:\n${constraints || "None"}`;
    setBrief(text);
  };

  const onCopy = async () => {
    if (!brief) return;
    await navigator.clipboard.writeText(brief);
    toast("Copied to clipboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO title="AI Brief Generator – EcoForge" description="Generate a structured blueprint brief for your idea in seconds." canonicalPath="/generator" />
      <Navbar />
      <main className="container py-12">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">AI Brief Generator</h1>
          <p className="text-muted-foreground mt-2">Create a crisp product brief for faster blueprinting</p>
        </header>
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Describe your idea</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={onGenerate} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry/Niche</Label>
                    <Input id="industry" value={industry} onChange={(e) => setIndustry(e.target.value)} placeholder="e.g., Urban agriculture" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget</Label>
                    <Input id="budget" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="$500 - $2,000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="idea">Product Idea</Label>
                  <Input id="idea" value={idea} onChange={(e) => setIdea(e.target.value)} placeholder="e.g., Balcony-friendly vertical planter with sensors" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="target">Target User</Label>
                  <Input id="target" value={target} onChange={(e) => setTarget(e.target.value)} placeholder="e.g., Apartment dwellers, busy parents" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="constraints">Constraints / Materials / Notes</Label>
                  <Textarea id="constraints" rows={5} value={constraints} onChange={(e) => setConstraints(e.target.value)} placeholder="Budget cap, sustainable materials only, local suppliers, etc." />
                </div>
                <div className="flex justify-end gap-3">
                  <Button type="submit" variant="hero">Generate Brief</Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {brief && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Result</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea readOnly rows={14} value={brief} className="font-mono" />
                <div className="flex justify-end mt-3">
                  <Button onClick={onCopy}>Copy</Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Want AI to write it for you? Add a Perplexity API key in Supabase Edge Function secrets and we’ll enable server-side generation.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default Generator;
