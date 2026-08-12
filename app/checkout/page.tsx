import { CheckoutPage } from "@/components/site-pages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Checkout",
  "Complete your KDS Hair & Beauty wig purchase with a simple, premium checkout experience.",
  "/checkout",
);

export default function Page() {
  return <CheckoutPage />;
}
