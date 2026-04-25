import { redirect } from "next/navigation";

import { defaultLocale } from "@/shared/i18n";

export default function IndexPage() {
  redirect(`/${defaultLocale}`);
}
