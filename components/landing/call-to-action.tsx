import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section id="cta">
      <hr className="w-11/12 mx-auto" />

      <div className="container grid place-items-center py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Ready to{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            start your adventure?
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Start with 5 free itineraries per month using your email. Or just browse for free. No strings attached.
        </p>

        <div className="flex justify-center flex-col md:flex-row space-y-4 w-full md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3" asChild>
            <Link href="/create">Start Planning</Link>
          </Button>
          <Button className="w-full md:w-1/3" variant="outline" asChild>
            <Link href="/explore">Explore Places</Link>
          </Button>
        </div>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
}
