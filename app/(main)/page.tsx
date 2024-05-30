import Hero from "@/components/landing/hero"
import HowItWorks from "@/components/landing/how-it-works";
import Features from "@/components/landing/features";
import Community from "@/components/landing/community";
import CallToAction from "@/components/landing/call-to-action";
import FAQ from "@/components/landing/faq";
import Footer from "@/components/landing/footer";

export default function Page() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <Community />
      <CallToAction />
      <FAQ />
      <Footer />
    </>
  );
}
