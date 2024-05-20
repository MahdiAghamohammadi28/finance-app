import { sizes, variants } from "@/lib/variants";
import { CaretLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <main>
      <div className="absolute left-8 top-8">
        <Link
          href="/"
          className={`${variants["ghost"]} ${sizes["base"]} flex items-center space-x-2 text-sm`}
        >
          <CaretLeft />
          <span>Back</span>
        </Link>
      </div>
      <div className="mt-8">{children}</div>
    </main>
  );
}
