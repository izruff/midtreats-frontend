"use client";

import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import GoogleMap from "@/components/create/gmap";

const stages = [
  "Tell us what you want.",
  "Choose your destinations.",
  "Adjust the little things.",
  "Get your itinerary.",
];

function StepCarousel() {
  const [currentStep, setCurrentStep] = React.useState(1);

  return (
    <Carousel className="w-full h-full p-8">
      <div className="flex justify-between w-full h-8 mb-4">
        <div className="flex gap-2">
          <CarouselPrevious />
          <CarouselNext />
        </div>
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((index) => (
            <Button
              key={index}
              onClick={() => {setCurrentStep(index)}}
              variant={currentStep === index ? "default" : "outline"}
              size="icon"
              className="h-4 w-4 rounded-full"
            >
              <span className="sr-only">Stage {index}</span>
            </Button>
          ))}
        </div>
      </div>
      <CarouselContent className="w-full">
        {[1, 2, 3, 4].map((index) => (
          <CarouselItem key={index}>
            <p>This is stage {index}</p>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default function Page() {
  const [currentStep, setCurrentStep] = React.useState(1);

  function isMobileWidth() {
    if (typeof window === "undefined") {
      return
    }
    return window.innerWidth < 768;
  }

  return (
    <main className="w-screen h-screen md:p-4">
      {isMobileWidth() ? (
        <ResizablePanelGroup direction="vertical" className="w-max h-max">
          <ResizablePanel defaultSize={70} minSize={20}>
            <p>This should be a gmaps embed</p>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={30} minSize={20} collapsible>
            <h3>Title Here</h3>
          </ResizablePanel>
        </ResizablePanelGroup>
      ) : (
        <ResizablePanelGroup
          direction="horizontal"
          className="w-max h-max rounded-lg border"
        >
          <ResizablePanel defaultSize={70} minSize={50}>
            <div className="w-full h-full">
              <GoogleMap />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={30} minSize={20}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={60} minSize={20}>
                <StepCarousel />
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={40} minSize={25} collapsible>
                <div className="flex flex-col h-full w-full px-[20%] items-center justify-center text-center">
                  <p className="font-semibold">No location to show.</p>
                  <p className="text-sm">Select a location on the map and the relevant information will be shown here.</p>
                  <Button className="ghost mt-4">Use my current location</Button>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      )}
    </main>
  );
}
