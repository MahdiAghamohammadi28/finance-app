import PageHeader from "@/components/page-header";
import { Copyright } from "@phosphor-icons/react/dist/ssr";

export default function Layout({ children }) {
  return (
    <>
      <PageHeader className="my-8" />
      <main>{children}</main>
      <footer className="mt-auto text-center py-8 flex items-center justify-center text-gray-600 text-sm">
        <Copyright />
        <p>2024. This is a NextJs course project</p>
      </footer>
    </>
  );
}
