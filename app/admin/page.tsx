import { AdminPage } from "@/components/site-pages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Admin Dashboard",
  "Manage homepage settings, appointments, store content and marketing areas for KDS Hair & Beauty.",
  "/admin",
);

export default function Page() {
  return <AdminPage />;
}
