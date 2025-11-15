import { ShoppingCart, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "./ui/button";

export const Header = () => {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <Gift className="h-6 w-6" />
          <span>GiftShop</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Shop
          </Link>
          <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <Link to="/cart">
          <Button variant="outline" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>
        </Link>
      </div>
    </header>
  );
};
