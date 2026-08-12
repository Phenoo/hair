import { BookAppointmentPage } from "@/components/site-pages";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Book Appointment",
  "Book a premium KDS Hair & Beauty appointment for installations, styling and specialist wig services.",
  "/book-appointment",
);

export default function Page() {
  return <BookAppointmentPage />;
}
