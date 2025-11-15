import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Gift, Heart, Sparkles } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
        <div className="container max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 text-primary">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-medium">Thoughtful Gifts for Every Occasion</span>
            <Sparkles className="h-5 w-5" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Discover the Perfect Gift
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Curated collection of unique, handcrafted gifts that create lasting memories
          </p>
          <Button size="lg" className="text-lg px-8">
            <Gift className="mr-2 h-5 w-5" />
            Shop Now
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 border-b">
        <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
              <Gift className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Curated Selection</h3>
            <p className="text-sm text-muted-foreground">Handpicked items from talented artisans</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Gift Wrapping</h3>
            <p className="text-sm text-muted-foreground">Beautiful presentation for every order</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Fast Shipping</h3>
            <p className="text-sm text-muted-foreground">Quick delivery to spread joy faster</p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Gifts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
