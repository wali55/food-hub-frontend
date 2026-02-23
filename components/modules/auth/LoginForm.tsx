"use client"

import { login } from "@/actions/auth.action";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/hooks";
import { setLogin } from "@/features/auth/authSlice";

const loginSchema = z.object({
  email: z.email("Email is required"),
  password: z.string().min(6, "Password must be at lease 6 characters."),
});

export function LoginForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Logging in...");
      try {
        const { data, error } = await login(value);
        if (error) {
          toast.error(error || "Unauthenticated or inactive user", { id: toastId });
          return;
        }
        
        dispatch(setLogin(data?.result));
        if (data?.result?.role === "CUSTOMER") {
          router.push(`/dashboard`);
        } else if (data?.result?.role === "PROVIDER") {
          router.push(`/provider-dashboard`);
        } else if (data?.result?.role === "ADMIN") {
          router.push(`/admin-dashboard`);
        }

        toast.success("Logged in successfully.", { id: toastId });
      } catch (error: any) {
        toast.error(error || "Unauthenticated or inactive user", { id: toastId });
      }
    },
  });

  return (
    <Card className="text-[#FF5322]">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription className="text-[#FF5322]">
          Enter your information login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <form.Field
              name="email"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <Input
                      type="email"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
            <form.Field
              name="password"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                    <Input
                      type="password"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button form="login-form" type="submit" className="w-full bg-[#FF5322] hover:bg-orange-500">
          Login
        </Button>
        <p>Don't have an account? <span className="text-blue-500 underline cursor-pointer" onClick={() => router.push(`/auth/register`)}>Register</span></p>
      </CardFooter>
    </Card>
  );
}
