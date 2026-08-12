import { GalleryPage } from "@/components/site-pages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Gallery",
  "View KDS Hair & Beauty transformations, installs, styling work and premium wig looks.",
  "/gallery",
);

export default function Page() {
  return <GalleryPage />;
}
