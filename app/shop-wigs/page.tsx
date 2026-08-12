import { ShopWigsPage } from "@/components/site-pages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Shop Wigs",
  "Shop premium wigs online from KDS Hair & Beauty, including HD lace, glueless, curly and ready-to-wear styles.",
  "/shop-wigs",
);

export default function Page() {
  return <ShopWigsPage />;
}
