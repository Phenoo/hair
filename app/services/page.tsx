import { ServicesPage } from "@/components/site-pages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Services",
  "Explore KDS Hair & Beauty services including wig installation, customisation, styling and consultations.",
  "/services",
);

export default function Page() {
  return <ServicesPage />;
}
