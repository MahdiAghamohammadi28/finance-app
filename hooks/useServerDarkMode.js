import { cookies } from "next/headers";

export default function useServerDarkMode(defaultTheme = "light") {
  return cookies().get("theme")?.value ?? defaultTheme;
}
