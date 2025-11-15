import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowLeft, ShoppingCart } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Button onClick={() => navigate("/")}>Back to Shop</Button>
      </div>
    );
  }

  return (
    <div className="container max-w-6xl mx-auto py-8 px-4">
      <Button
        variant="ghost"
        onClick={() => navigate("/")}
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Shop
      </Button>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-square overflow-hidden rounded-lg border">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <div className="text-sm text-muted-foreground mb-2">
            {product.category}
          </div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-bold text-primary mb-6">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {product.description}
          </p>
          
          <div className="space-y-3 mt-auto">
            <Button
              size="lg"
              className="w-full"
              onClick={() => addToCart(product)}
              disabled={!product.inStock}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full"
              onClick={() => {
                addToCart(product);
                navigate("/cart");
              }}
              disabled={!product.inStock}
            >
              Buy Now
            </Button>
          </div>

          <div className="mt-6 pt-6 border-t space-y-2 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>Free Shipping</span>
              <span className="text-foreground">On orders over $50</span>
            </div>
            <div className="flex justify-between">
              <span>Returns</span>
              <span className="text-foreground">30-day return policy</span>
            </div>
            <div className="flex justify-between">
              <span>Gift Wrapping</span>
              <span className="text-foreground">Available at checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
