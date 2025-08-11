import Navbar from "@/components/layout/Navbar";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { useSearchParams } from "react-router-dom";

const categories = ["Agriculture", "Healthcare", "Energy", "Education", "Manufacturing", "Other"];
const IDEA_PAYMENT_LINK = ""; // TODO: Paste your Stripe Payment Link for idea submission (redirect to /submit-idea?paid=1)
const IDEA_SUBMIT_ENDPOINT = ""; // TODO: Paste your Formspree (or similar) endpoint to collect ideas
const SubmitIdea = () => {
  const [searchParams] = useSearchParams();
  const isPaid = searchParams.get("paid") === "1";
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (IDEA_PAYMENT_LINK && !isPaid) {
      toast("Please complete the submission fee first.");
      return;
    }
    if (!title || !email || !category || !description) {
      toast("Please fill in all fields.");
      return;
    }
    try {
      setSubmitting(true);
      if (IDEA_SUBMIT_ENDPOINT) {
        const res = await fetch(IDEA_SUBMIT_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            title,
            email,
            category,
            description,
            paid: isPaid ? 1 : 0,
            submittedAt: new Date().toISOString(),
          }),
        });
        if (!res.ok) {
          let errMsg = `Submission failed (${res.status})`;
          try {
            const data = await res.json();
            errMsg = data?.errors?.[0]?.message ?? data?.message ?? errMsg;
          } catch {}
          throw new Error(errMsg);
        }
        toast("Thanks! Your idea was submitted. We’ll be in touch.");
      } else {
        toast("Submission endpoint not configured. Please add IDEA_SUBMIT_ENDPOINT.");
      }
      setTitle("");
      setEmail("");
      setCategory("");
      setDescription("");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast(msg);
    } finally {
      setSubmitting(false);
    }
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

        <div className="max-w-2xl mx-auto space-y-4">
          {IDEA_PAYMENT_LINK && !isPaid ? (
            <Alert>
              <AlertTitle>Submission fee required</AlertTitle>
              <AlertDescription>
                Please complete the submission fee before sending your idea. Your payment secures priority review.
              </AlertDescription>
            </Alert>
          ) : (
            <Alert>
              <AlertTitle>Launch promo: submission fee waived</AlertTitle>
              <AlertDescription>
                Submit your idea for free while we finalize payments. You’ll still get an AI blueprint preview.
              </AlertDescription>
            </Alert>
          )}
          {IDEA_PAYMENT_LINK && !isPaid && (
            <div className="text-right">
              <Button asChild>
                <a href={IDEA_PAYMENT_LINK} target="_blank" rel="noopener noreferrer">Pay submission fee</a>
              </Button>
            </div>
          )}

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
                  <Label htmlFor="email">Contact Email</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
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
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">
                    {IDEA_PAYMENT_LINK && !isPaid ? "Complete payment to enable submission." : "No payment required during launch."}
                  </p>
                  <Button variant="hero" type="submit" disabled={submitting || (!!IDEA_PAYMENT_LINK && !isPaid)}>
                    {submitting ? "Submitting..." : "Submit Idea"}
                  </Button>
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
