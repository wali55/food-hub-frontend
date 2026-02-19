import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./actions/auth.action";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const { data: user } = await getCurrentUser();
  console.log("***user", user)
  let isAuthenticated = false;
  let isAdmin = false;
  let isProvider = false;
  let isCustomer = false;

  if (user && user?.role) {
    isAuthenticated = true;
    isAdmin = user?.role === "ADMIN";
    isProvider = user?.role === "PROVIDER";
    isCustomer = user?.role === "CUSTOMER";
  }

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  const isCustomerPath = pathname.startsWith("/dashboard");
  const isAdminPath = pathname.startsWith("/admin-dashboard");
  const isProviderPath = pathname.startsWith("/provider-dashboard");

  if (isCustomer && (isAdminPath || isProviderPath)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  if (isProvider && (isAdminPath || isCustomerPath)) {
    return NextResponse.redirect(new URL("/provider-dashboard", request.url));
  }

  if (isAdmin && (isCustomerPath || isProviderPath)) {
    return NextResponse.redirect(new URL("/admin-dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/admin-dashboard",
    "/admin-dashboard/:path*",
    "/provider-dashboard",
    "/provider-dashboard/:path*",
  ],
};
