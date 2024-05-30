import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

interface NavItem {
  href: string;
  label: string;
}

const navList: NavItem[] = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/community",
    label: "Community",
  },
  {
    href: "/explore",
    label: "Explore",
  },
];

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="sticky border-b-[1px] top-0 z-40 w-full">
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
            <NavigationMenuItem className="font-bold flex">
              <Link href="/" className="ml-2 font-bold text-xl flex">
                Midtreats
              </Link>
            </NavigationMenuItem>

            {/* mobile */}
            <span className="flex md:hidden">
              <ModeToggle />

              <Sheet>
                <SheetTrigger className="px-2">
                  <Menu className="flex md:hidden h-5 w-5">
                    <span className="sr-only">Menu Icon</span>
                  </Menu>
                </SheetTrigger>

                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle className="font-bold text-xl">
                      Midtreats
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                    {navList.map(({ href, label }) => (
                      <Button key={label} variant="ghost" asChild>
                        <Link href={href}>{label}</Link>
                      </Button>
                    ))}
                    <Button variant="secondary" asChild>
                      <Link
                        href="https://github.com/izruff/midtreats-web.git"
                        target="_blank"
                      >
                        <GitHubLogoIcon className="mr-2 w-5 h-5" />
                        Github
                      </Link>
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </span>

            {/* desktop */}
            <nav className="hidden md:flex gap-2">
              {navList.map(({ href, label }) => (
                <Button key={label} variant="ghost" asChild>
                  <Link href={href}>{label}</Link>
                </Button>
              ))}
            </nav>

            <div className="hidden md:flex gap-2">
              <Button variant="secondary" asChild>
                <Link
                  href="https://github.com/izruff/midtreats-web.git"
                  target="_blank"
                >
                  <GitHubLogoIcon className="mr-2 w-5 h-5" />
                  Github
                </Link>
              </Button>

              <ModeToggle />
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </header>

      <main className="container flex flex-col">{children}</main>
    </>
  );
}
