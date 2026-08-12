import { FaqPage } from "@/components/site-pages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "FAQ",
  "Read KDS Hair & Beauty FAQs for appointments, wigs, delivery, care and booking expectations.",
  "/faq",
);

export default function Page() {
  return <FaqPage />;
}
