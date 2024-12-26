import { Metadata } from "next"
import LoginForm from "./LoginForm"

export const metadata: Metadata = {
    title:"Login"
}

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
        <LoginForm />
    </div>
  );
}