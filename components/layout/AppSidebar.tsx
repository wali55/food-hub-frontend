"use client"

import * as React from "react"
import {Button} from "@/components/ui/button";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useAppDispatch, useAppSelector } from "@/hooks"
import Link from "next/link"
import { logout } from "@/actions/auth.action";
import { toast } from "sonner";
import { setLogout } from "@/features/auth/authSlice";
import { useRouter } from "next/navigation";

const data = {
  customerNav: [
    {
      title: "Food Hub",
      url: "#",
      items: [
        {
          title: "Cart",
          url: "/dashboard/cart",
        },
        {
          title: "Orders",
          url: "/dashboard/orders",
        },
        {
          title: "Profile",
          url: "/dashboard/profile",
        },
      ],
    },
  ],
  providerNav: [
    {
      title: "Food Hub (Provider)",
      url: "#",
      items: [
        {
          title: "Overview",
          url: "/provider-dashboard",
        },
        {
          title: "Meals",
          url: "/provider-dashboard/meals",
        },
        {
          title: "Orders",
          url: "/provider-dashboard/orders",
        },
        {
          title: "Profile",
          url: "/provider-dashboard/profile",
        },
      ],
    },
  ],
  adminNav: [
    {
      title: "Food Hub (Admin)",
      url: "#",
      items: [
        {
          title: "Overview",
          url: "/admin-dashboard",
        },
        {
          title: "Users",
          url: "/admin-dashboard/users",
        },
        {
          title: "Orders",
          url: "/admin-dashboard/orders",
        },
        {
          title: "Categories",
          url: "/admin-dashboard/categories",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {user} = useAppSelector((state) => state.auth);

  const navItems = user?.role === "ADMIN" ? data.adminNav : user?.role === "PROVIDER" ? data.providerNav : data.customerNav;

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
    <Sidebar {...props} className="text-[#FF5322]">
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {navItems.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel className="text-[#FF5322]">{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
        <Button variant="destructive" onClick={handleLogout}>Logout</Button>
      </SidebarFooter>
    </Sidebar>
  )
}
