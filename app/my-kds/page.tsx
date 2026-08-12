import { MyKdsPage } from "@/components/site-pages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "My KDS",
  "Access your KDS Hair & Beauty orders, saved wigs and appointment history in the My KDS portal.",
  "/my-kds",
);

export default function Page() {
  return <MyKdsPage />;
}
