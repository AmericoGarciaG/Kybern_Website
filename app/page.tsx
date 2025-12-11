import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { MethodologySection } from "@/components/methodology-section";
import { SolutionsSection } from "@/components/solutions-section";
import { ManifestoSection } from "@/components/manifesto-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <HeroSection />
            <ProblemSection />
            <MethodologySection />
            <SolutionsSection />
            <ManifestoSection />
            <ContactSection />
            <Footer />
        </main>
    );
}
