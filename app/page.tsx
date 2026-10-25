import { About } from "@/components/page/about";
import { Customer } from "@/components/page/customers";
import { Showcase } from "@/components/page/showcase";

export default function HomePage() {
  return (
    <main className="min-h-screen text-white font-sans">
      <Showcase />
      <Customer />
      <About />
    </main>
  );
}
