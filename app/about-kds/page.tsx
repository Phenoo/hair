import { AboutPage } from "@/components/site-pages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "About KDS",
  "Discover the premium vision behind KDS Hair & Beauty and the confidence-first philosophy shaping every look.",
  "/about-kds",
);

export default function Page() {
  return <AboutPage />;
}
