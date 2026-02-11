import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import OurStory from "./pages/OurStory";
import CorporateGifting from "./pages/CorporateGifting";
import GlobalShipping from "./pages/GlobalShipping";
import GetAPackGiveAPack from "./pages/GetAPackGiveAPack";
import CustomerReviews from "./pages/CustomerReviews";
import NewsMedia from "./pages/NewsMedia";
import Faqs from "./pages/Faqs";
import DutiesClearance from "./pages/DutiesClearance";
import PartnerWithUs from "./pages/PartnerWithUs";
import TrackOrder from "./pages/TrackOrder";

const queryClient = new QueryClient();
const Router = import.meta.env.MODE === "gh-pages" ? HashRouter : BrowserRouter;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <Router>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:category" element={<Products />} />
                <Route path="/collections" element={<Products />} />
                <Route path="/collections/:category" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<OurStory />} />
                <Route path="/our-story" element={<OurStory />} />
                <Route path="/corporate-gifting" element={<CorporateGifting />} />
                <Route path="/bulk-gifting" element={<CorporateGifting />} />
                <Route path="/gifting" element={<CorporateGifting />} />
                <Route path="/send-gifts-abroad" element={<GlobalShipping />} />
                <Route path="/global-shipping" element={<GlobalShipping />} />
                <Route path="/get-a-pack-give-a-pack" element={<GetAPackGiveAPack />} />
                <Route path="/customer-reviews" element={<CustomerReviews />} />
                <Route path="/reviews" element={<CustomerReviews />} />
                <Route path="/news-media" element={<NewsMedia />} />
                <Route path="/media-and-news" element={<NewsMedia />} />
                <Route path="/faqs" element={<Faqs />} />
                <Route path="/duties-clearance" element={<DutiesClearance />} />
                <Route path="/partner-with-us" element={<PartnerWithUs />} />
                <Route path="/partner" element={<PartnerWithUs />} />
                <Route path="/track-order" element={<TrackOrder />} />
                <Route path="/pages/gifting" element={<CorporateGifting />} />
                <Route path="/pages/corporate-bulk-gifting" element={<CorporateGifting />} />
                <Route path="/pages/global-shipping" element={<GlobalShipping />} />
                <Route path="/pages/our-story-oorla" element={<OurStory />} />
                <Route path="/pages/get-a-pack-give-a-pack" element={<GetAPackGiveAPack />} />
                <Route path="/pages/reviews" element={<CustomerReviews />} />
                <Route path="/pages/media-and-news" element={<NewsMedia />} />
                <Route path="/pages/faqs" element={<Faqs />} />
                <Route path="/pages/duties-clearance" element={<DutiesClearance />} />
                <Route path="/pages/partner-with-us" element={<PartnerWithUs />} />
                <Route path="/pages/contact-us" element={<Contact />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
