import { redirect } from "next/navigation";

type LegacyAgentTrackingPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function LegacyAgentTrackingPage({
  params,
}: LegacyAgentTrackingPageProps) {
  const { lang } = await params;

  redirect(`/${lang}/agent-tracking`);
}
