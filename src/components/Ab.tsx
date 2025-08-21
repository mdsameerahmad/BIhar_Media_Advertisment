import { About } from "./About";
import { Testimonials } from "./Testimonials";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Ab() {
  return (
    <div>
      <Header />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}