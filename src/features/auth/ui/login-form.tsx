"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { Button, Icon, Input } from "@/shared/ui";
import type { Locale } from "@/shared/i18n";

type LoginFormProps = {
  locale: Locale;
  welcome: string;
  subtitle: string;
  loginTab: string;
  signupTab: string;
  google: string;
  github: string;
  orContinue: string;
  emailLabel: string;
  emailPlaceholder: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  forgotPassword: string;
  submitLabel: string;
  agreementPrefix: string;
  termsLabel: string;
  agreementJoiner: string;
  privacyLabel: string;
};

export function LoginForm({
  locale,
  welcome,
  subtitle,
  loginTab,
  signupTab,
  google,
  github,
  orContinue,
  emailLabel,
  emailPlaceholder,
  passwordLabel,
  passwordPlaceholder,
  forgotPassword,
  submitLabel,
  agreementPrefix,
  termsLabel,
  agreementJoiner,
  privacyLabel,
}: LoginFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    startTransition(() => {
      router.push(`/${locale}/dashboard`);
    });
  }

  return (
    <div className="mx-auto w-full max-w-[420px] space-y-8">
      <div className="space-y-2 text-center lg:text-left">
        <h3 className="text-[2rem] font-semibold tracking-[-0.03em] text-primary">
          {welcome}
        </h3>
        <p className="text-sm text-on-surface-variant">{subtitle}</p>
      </div>

      <div className="flex rounded-xl bg-surface-container-low p-1">
        <button
          type="button"
          className="flex-1 rounded-lg bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm"
        >
          {loginTab}
        </button>
        <button
          type="button"
          className="flex-1 rounded-lg px-4 py-2 text-sm font-medium text-on-surface-variant transition-colors hover:text-primary"
        >
          {signupTab}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button type="button" variant="outline" className="h-12 justify-center rounded-lg">
          <span className="text-base font-semibold text-[#4285F4]">G</span>
          <span>{google}</span>
        </Button>
        <Button type="button" variant="outline" className="h-12 justify-center rounded-lg">
          <Icon name="branch" className="size-4" />
          <span>{github}</span>
        </Button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-outline-variant" />
        </div>
        <div className="relative flex justify-center text-xs uppercase tracking-[0.14em]">
          <span className="bg-white px-3 text-on-surface-variant">{orContinue}</span>
        </div>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-sm font-medium text-primary">
            {emailLabel}
          </label>
          <Input id="email" type="email" placeholder={emailPlaceholder} />
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-4">
            <label htmlFor="password" className="block text-sm font-medium text-primary">
              {passwordLabel}
            </label>
            <a href="#forgot" className="text-xs text-on-surface-variant underline hover:text-primary">
              {forgotPassword}
            </a>
          </div>
          <Input id="password" type="password" placeholder={passwordPlaceholder} />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isPending}
          className="h-12 w-full rounded-lg text-sm font-semibold"
        >
          {submitLabel}
        </Button>
      </form>

      <p className="px-4 text-center text-xs leading-6 text-on-surface-variant">
        {agreementPrefix}{" "}
        <a href="#terms" className="underline">
          {termsLabel}
        </a>{" "}
        {agreementJoiner}{" "}
        <a href="#privacy" className="underline">
          {privacyLabel}
        </a>
        .
      </p>
    </div>
  );
}
