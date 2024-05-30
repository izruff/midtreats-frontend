import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MagnifyingGlassIcon,
  MoveIcon,
  MagicWandIcon,
  PaperPlaneIcon,
} from "@radix-ui/react-icons";

interface StepItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

const steps: StepItem[] = [
  {
    icon: <MagnifyingGlassIcon />,
    title: "Explore",
    description:
      "Tell us anything you have in mind, and we'll select a variety of places that matches your situation.",
  },
  {
    icon: <MoveIcon />,
    title: "Expand",
    description:
      "Choose from a list of suggested places and finalize your destinations, then we'll devise the best routes.",
  },
  {
    icon: <MagicWandIcon />,
    title: "Refine",
    description:
      "Match our plans with your specific criterias, so we can create a final itinerary tailored to your needs.",
  },
  {
    icon: <PaperPlaneIcon />,
    title: "Travel",
    description:
      "Bring an exported itinerary document with you and enjoy your retreat worry-free!",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Start your journey with us in four simple steps. We&apos;ll take care of
        the rest.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map(({ icon, title, description }: StepItem) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
