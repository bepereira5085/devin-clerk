import { SignUp } from "@clerk/nextjs";
import { Suspense } from "react";

export default function SignUpPage() {
  return (
    <div className="flex justify-center px-6 py-12">
      <Suspense>
        <SignUp
          fallbackRedirectUrl="/dashboard"
          signInFallbackRedirectUrl="/dashboard"
        />
      </Suspense>
    </div>
  );
}
