"use client";

import { Menu, ShoppingCart } from "lucide-react";

import { cn } from "@/lib/utils";

import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { logout } from "@/actions/auth.action";
import { setLogout } from "@/features/auth/authSlice";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavbarProps {
  className?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
    className?: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
  };
}

const Navbar = ({
  logo = {
    url: "/",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Food Hub",
  },
  menu = [
    { title: "Home", url: "/" },
    {
      title: "Meals",
      url: "/meals",
    },
    {
      title: "Providers",
      url: "/providers",
    },
    {
      title: "Reviews",
      url: "/reviews",
    },
  ],
  auth = {
    login: { title: "Login", url: "/auth/login" },
  },
  className,
}: NavbarProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { count } = useAppSelector((state) => state.cart);
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const handleLogout = async () => {
    const toastId = toast.loading("Logging out...");
    const result = await logout();
    if (!result.data) {
      toast.error("Count not logout", { id: toastId });
      return;
    }
    dispatch(setLogout());
    toast.success("Logged out successfully", { id: toastId });
    router.push("/auth/login");
  }
  
  return (
    <section className={cn("p-4", className)}>
      <div className="w-full">
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-6">
            <Link href={logo.url} className="flex items-center gap-2">
              <span className="text-lg font-semibold tracking-tighter">
                {logo.title}
              </span>
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div
              className="relative cursor-pointer"
              onClick={() => router.push(`/dashboard/cart`)}
            >
              <ShoppingCart />
              {count !== 0 && (
                <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300 size-5 text-[10px] absolute top-[-10] right-[-10]">
                  {count}
                </Badge>
              )}
            </div>
            {isAuthenticated ? (
              <Button onClick={handleLogout} asChild variant="destructive" size="sm">
                <Link href={auth.login.url}>Logout</Link>
              </Button>
            ) : (
              <Button asChild variant="outline" size="sm">
                <Link href={auth.login.url}>{auth.login.title}</Link>
              </Button>
            )}
          </div>
        </nav>

        <div className="block lg:hidden">
          <div className="flex items-center justify-end">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle className="text-[#FF5322]">Food Hub</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <div
                      className="relative cursor-pointer"
                      onClick={() => router.push(`/dashboard/cart`)}
                    >
                      <ShoppingCart />
                      {count !== 0 && (
                        <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300 size-5 text-[10px] absolute top-[-10] left-[12]">
                          {count}
                        </Badge>
                      )}
                    </div>
                    {isAuthenticated ? (
                      <Button onClick={handleLogout} asChild variant="destructive">
                        <Link href={auth.login.url}>Logout</Link>
                      </Button>
                    ) : (
                      <Button asChild variant="outline" size="sm">
                        <Link href={auth.login.url}>{auth.login.title}</Link>
                      </Button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        asChild
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        <Link href={item.url}>{item.title}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  return (
    <Link key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </Link>
  );
};

export { Navbar };
