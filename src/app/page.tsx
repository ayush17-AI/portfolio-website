import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Achievements from "@/components/Achievements";
import Goals from "@/components/Goals";
import SectionWrapper from "@/components/SectionWrapper";

export default function Home() {
    return (
        <main className="relative min-h-screen">
            <Navbar />
            <Hero />

            <SectionWrapper delay={0.1}>
                <Achievements />
            </SectionWrapper>

            <SectionWrapper delay={0.1}>
                <Goals />
            </SectionWrapper>

            {/* Background soft shapes */}
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brown-100/50 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-brown-200/30 rounded-full blur-[100px]" />
            </div>
        </main>
    );
}
