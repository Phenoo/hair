import { ContactPage } from "@/components/site-pages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Contact",
  "Contact KDS Hair & Beauty for appointments, wig enquiries, consultations and studio information.",
  "/contact",
);

export default function Page() {
  return <ContactPage />;
}
