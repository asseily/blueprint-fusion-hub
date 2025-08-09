import Navbar from "@/components/layout/Navbar";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";

const categories = ["Agriculture", "Healthcare", "Energy", "Education", "Manufacturing", "Other"];

const SubmitIdea = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !category || !description) {
      toast("Please fill in all fields.");
      return;
    }
    toast("Thanks! AI blueprint generation is coming soon.");
    setTitle("");
    setCategory("");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Submit Idea – EcoForge" description="Submit your invention ideas to generate AI blueprints." canonicalPath="/submit-idea" />
      <Navbar />
      <main className="container py-12">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Submit Your Idea</h1>
          <p className="text-muted-foreground mt-2">Describe your concept and we'll help transform it into a blueprint</p>
        </header>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Idea Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., Smart Urban Garden System" />
                </div>
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((c) => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={6} placeholder="Describe your idea, goals, and constraints..." />
                </div>
                <div className="flex justify-end">
                  <Button variant="hero" type="submit">Generate Blueprint</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SubmitIdea;
