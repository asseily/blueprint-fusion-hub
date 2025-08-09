import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header>
      <nav className="container py-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl">
          <span className="bg-gradient-to-r from-[hsl(var(--brand))] to-[hsl(var(--brand-2))] bg-clip-text text-transparent">EcoForge</span>
        </Link>
        <div className="flex items-center gap-3">
          <NavLink to="/marketplace" className={({ isActive }) => isActive ? "text-foreground" : "text-muted-foreground"}>Marketplace</NavLink>
          <NavLink to="/submit-idea" className={({ isActive }) => isActive ? "text-foreground" : "text-muted-foreground"}>Submit Idea</NavLink>
          <Button variant="hero" asChild>
            <Link to="/submit-idea">Get Started</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
