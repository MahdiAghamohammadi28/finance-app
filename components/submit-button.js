"use client";

import Button from "./button";
import { useFormStatus } from "react-dom";
import { Spinner } from "@phosphor-icons/react/dist/ssr";

export default function SubmitButton(props) {
  const { pending } = useFormStatus();
  return (
    <Button
      {...props}
      className={`${props.className} flex items-center justify-center space-x-1`}
      disabled={pending}
    >
      {pending && <Spinner className="animate-spin w-4 h-4" />}
      <span>{props.children}</span>
    </Button>
  );
}
