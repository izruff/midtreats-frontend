import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeatureItem {
  title: string;
  description: string;
  imageSrc: string;
}

const features: FeatureItem[] = [
  {
    title: "Responsive Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    imageSrc: "/placeholder.jpg",  // TODO: Replace with actual image
  },
  {
    title: "Intuitive user interface",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    imageSrc: "/placeholder.jpg",  // TODO: Replace with actual image
  },
  {
    title: "AI-Powered insights",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    imageSrc: "/placeholder.jpg",  // TODO: Replace with actual image
  },
];

const featureKeywords: string[] = [
  "Dark/Light theme",
  "Reviews",
  "Features",
  "Pricing",
  "Contact form",
  "Our team",
  "Responsive design",
  "Newsletter",
  "Minimalist",
];

export default function Features() {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Why It Works
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureKeywords.map((keyword: string) => (
          <div key={keyword}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {keyword}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, imageSrc }: FeatureItem) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <div className="w-[200px] lg:w-[300px] mx-auto relative">
                <Image
                  src={imageSrc}
                  alt="About feature"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
