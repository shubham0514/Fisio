import { Carousel } from "./Carousel";
import { Navbar } from "./Navbar";
import type { Metadata } from 'next';
import { ProductCategory } from "./ProductCategory";
import { Footer } from "./Footer";
export const metadata: Metadata = {
  title: "Fisio Cosmetics",
  description: "",
}
export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="body">
        <div className="Carousel-body">
          <Carousel />
          <ProductCategory />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
