import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CheckCircle2 } from 'lucide-react';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, getCartTotal, clearCart } = useCart();
  const { user, loading } = useAuth();
  const [processing, setProcessing] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to proceed with checkout.",
        variant: "destructive",
      });
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    clearCart();
    setProcessing(false);
    setShowSuccessDialog(true);
  };

  const handleSuccessDialogClose = () => {
    setShowSuccessDialog(false);
    navigate('/');
  };

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl font-bold mb-8">Checkout</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <h2 className="font-serif text-2xl font-bold mb-6">
                      Shipping Information
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" required />
                      </div>
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" required />
                      </div>
                      <div>
                        <Label htmlFor="postal">Postal Code</Label>
                        <Input id="postal" required />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" required />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <h2 className="font-serif text-2xl font-bold mb-6">
                      Payment Information
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" required />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" required />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div>
                <Card className="shadow-card sticky top-24">
                  <CardContent className="p-6">
                    <h2 className="font-serif text-2xl font-bold mb-6">
                      Order Summary
                    </h2>
                    
                    <div className="space-y-4 mb-6">
                      {cart.map(item => (
                        <div key={item.id} className="flex gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-20 object-cover rounded"
                          />
                          <div className="flex-1">
                            <p className="font-semibold text-sm line-clamp-1">
                              {item.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Qty: {item.quantity}
                            </p>
                            <p className="text-sm font-bold text-primary">
                              ${item.price * item.quantity}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3 mb-6 border-t pt-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-semibold">${getCartTotal()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span className="font-semibold text-accent">FREE</span>
                      </div>
                      <div className="border-t pt-3">
                        <div className="flex justify-between">
                          <span className="font-bold text-lg">Total</span>
                          <span className="font-bold text-lg text-primary">
                            ${getCartTotal()}
                          </span>
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={processing}
                    >
                      {processing ? 'Processing...' : 'Place Order'}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />

      <Dialog open={showSuccessDialog} onOpenChange={handleSuccessDialogClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-accent/20 p-3 animate-scale-in">
                <CheckCircle2 className="h-12 w-12 text-accent" />
              </div>
            </div>
            <DialogTitle className="text-center text-2xl font-serif">
              Order Placed Successfully!
            </DialogTitle>
            <DialogDescription className="text-center">
              Thank you for your purchase. You'll receive a confirmation email shortly
              with your order details and tracking information.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={handleSuccessDialogClose} className="w-full mt-4">
            Continue Shopping
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Checkout;
