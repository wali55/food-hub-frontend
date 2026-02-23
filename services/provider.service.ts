import { cookies } from "next/headers";

export type CreateProviderProfile = {
  restaurantName: string;
  address: string;
};

export const providerService = {
  getProviders: async () => {
    try {
      const res = await fetch(`${process.env.BACKEND_URL}/provider-profile`, {
        next: {
          tags: ["providers"],
        },
      });
      const result = await res.json();
      if (!result.success) {
        return {
          data: null,
          error: result.message || "Could not fetch providers",
        };
      }
      return { data: result.data, error: null };
    } catch (error: any) {
      return {
        data: null,
        error: error.message || "Could not fetch providers",
      };
    }
  },
  getProviderDetails: async (id: string) => {
    try {
      const res = await fetch(
        `${process.env.BACKEND_URL}/provider-profile/${id}`,
      );
      const result = await res.json();
      if (!result.success) {
        return {
          data: null,
          error: result.message || "Could not fetch provider details",
        };
      }
      return { data: result.data, error: null };
    } catch (error: any) {
      return {
        data: null,
        error: error.message || "Could not fetch provider details",
      };
    }
  },
  getProviderStats: async () => {
    try {
      const cookieStore = await cookies();
      const res = await fetch(
        `${process.env.BACKEND_URL}/provider-profile/stats`,
        {
          next: {
            tags: ["provider-stats"],
          },
          headers: {
            "Content-Type": "application/json",
            Cookie: cookieStore.toString(),
          },
          credentials: "include",
        },
      );
      const result = await res.json();
      if (!result.success) {
        return {
          data: null,
          error: result.message || "Could not fetch provider stats",
        };
      }
      return { data: result.data, error: null };
    } catch (error: any) {
      return {
        data: null,
        error: error.message || "Could not fetch provider stats",
      };
    }
  },
  getCurrentProvider: async () => {
    try {
      const cookieStore = await cookies();
      const res = await fetch(
        `${process.env.BACKEND_URL}/provider-profile/me`,
        {
          next: {
            tags: ["current-provider"],
          },
          headers: {
            "Content-Type": "application/json",
            Cookie: cookieStore.toString(),
          },
          credentials: "include",
        },
      );
      const result = await res.json();
      if (!result.success) {
        return {
          data: null,
          error: result.message || "Could not fetch provider",
        };
      }
      return { data: result.data, error: null };
    } catch (error: any) {
      return {
        data: null,
        error: error.message || "Could not fetch provider",
      };
    }
  },
  createProviderProfile: async (profile: CreateProviderProfile) => {
    try {
      const cookieStore = await cookies();
      const res = await fetch(
        `${process.env.BACKEND_URL}/provider-profile`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Cookie: cookieStore.toString(),
          },
          credentials: "include",
          body: JSON.stringify(profile)
        },
      );
      const result = await res.json();
      if (!result.success) {
        return {
          data: null,
          error: result.message || "Could not create provider profile",
        };
      }
      return { data: result.data, error: null };
    } catch (error: any) {
      return {
        data: null,
        error: error.message || "Could not create provider profile",
      };
    }
  },
};
