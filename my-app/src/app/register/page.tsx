"use client";
import { RegisterForm } from "../ui/components/RegisterForm/RegisterForm";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-blue-500">
      <div className="login_form_container">
        <RegisterForm />
      </div>
    </div>
  );
}
