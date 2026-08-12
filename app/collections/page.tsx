import { CollectionsPage } from "@/components/site-pages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Collections",
  "Browse KDS Hair & Beauty wig collections by texture, lace finish and style mood.",
  "/collections",
);

export default function Page() {
  return <CollectionsPage />;
}
