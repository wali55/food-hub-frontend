import { LoginForm } from "@/components/modules/auth/LoginForm"

const LoginPage = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm">
            <h1 className="mb-4 text-2xl font-bold text-center">Food Hub</h1>
            <LoginForm />
          </div>
        </div>
  )
}

export default LoginPage