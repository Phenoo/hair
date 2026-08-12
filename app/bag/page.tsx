import { BagPage } from "@/components/site-pages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Shopping Bag",
  "Review your selected KDS Hair & Beauty wigs, add-ons and checkout journey.",
  "/bag",
);

export default function Page() {
  return <BagPage />;
}
