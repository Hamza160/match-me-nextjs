import { Metadata } from "next"
import RegisterForm from "./RegisterForm";

export const metadata: Metadata = {
  title:"Register"
}

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
        <RegisterForm />
    </div>
  );
}
