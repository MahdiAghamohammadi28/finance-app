import DarkModeToggle from "@/components/dark-mode-toggle";
import SignOutButton from "@/components/sign-out-button";
import useServerDarkMode from "@/hooks/useServerDarkMode";
import { signOut } from "@/lib/actions";
import { createClient } from "@/lib/supabase/server";
import { sizes, variants } from "@/lib/variants";
import Link from "next/link";

export default async function Home() {
  const theme = useServerDarkMode();
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="w-full h-svh flex items-center justify-center relative">
      <div className="absolute top-6 right-2">
        <DarkModeToggle defaultMode={theme} />
      </div>
      {user ? (
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="text-xl lg:text-2xl font-bold">{`Welcome back, ${user?.user_metadata?.fullName}`}</h2>
          <div className="flex items-center justify-center space-x-2 lg:space-x-2">
            <Link
              href="/dashboard"
              className={`${variants["default"]} ${sizes["sm"]}`}
            >
              Go to Dashboard
            </Link>
            <SignOutButton
              className={`${variants["default"]} ${sizes["xs"]}`}
              onClick={signOut}
            >
              Sign Out
            </SignOutButton>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold mb-1">Welcome to the Finance App</h2>
          <div className=" flex flex-col items-center">
            <p className="text-sm mb-6">Please sign up to access the app.</p>
            <Link
              href="/dashboard"
              className={`${variants["default"]} ${sizes["sm"]}`}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
