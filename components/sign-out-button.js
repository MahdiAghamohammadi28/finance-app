"use client";

import { SignOut } from "@phosphor-icons/react/dist/ssr";
import SubmitButton from "./submit-button";
import { signOut } from "@/lib/actions";

export default function SignOutButton() {
  return (
    <form action={signOut}>
      <SubmitButton variant="ghost" size="sm">
        <SignOut className="w-6 h-6" />
      </SubmitButton>
    </form>
  );
}
