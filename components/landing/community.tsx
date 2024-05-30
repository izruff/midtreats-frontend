import Image from "next/image"

export default function Community() {
  return (
    <section id="community" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container flex flex-col">
        <h2 className="text-3xl md:text-4xl font-bold md:text-center">
          Discover{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            More Ways{" "}
          </span>
          With the Community
        </h2>
        <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          beatae. Ipsa tempore ipsum iste quibusdam illum ducimus eos. Quasi,
          sed!
        </p>
        <div className="hidden md:block max-w-3xl relative">
          <Image
            src="/placeholder.jpg"
            alt="Share with community"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="block md:hidden relative">
          <Image
            src="/placeholder.jpg"
            alt="Share with community"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  )
}
