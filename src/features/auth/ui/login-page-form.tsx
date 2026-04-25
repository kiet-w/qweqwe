"use client";

import Link from "next/link";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { CircleDashed } from "lucide-react";

type LoginPageFormProps = {
  locale: string;
  heading: string;
  description: string;
  google: string;
  github: string;
  divider: string;
  emailLabel: string;
  emailPlaceholder: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  rememberSession: string;
  forgotPassword: string;
  submitLabel: string;
  signupPrompt: string;
  signupCta: string;
};

export function LoginPageForm({
  locale,
  heading,
  description,
  google,
  github,
  divider,
  emailLabel,
  emailPlaceholder,
  passwordLabel,
  passwordPlaceholder,
  rememberSession,
  forgotPassword,
  submitLabel,
  signupPrompt,
  signupCta,
}: LoginPageFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    startTransition(() => {
      router.push(`/${locale}/dashboard`);
    });
  }

  return (
    <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-10 shadow-sm">
      <h2 className="mb-2 text-2xl font-semibold text-primary">{heading}</h2>
      <p className="mb-8 text-sm font-medium text-on-surface-variant">{description}</p>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-1">
          <label
            htmlFor="login-email"
            className="block text-xs font-medium uppercase tracking-[0.16em] text-on-surface-variant"
          >
            {emailLabel}
          </label>
          <input
            id="login-email"
            type="email"
            placeholder={emailPlaceholder}
            className="w-full border-0 border-b border-outline-variant bg-transparent px-0 py-2 text-sm text-on-surface outline-none transition-colors placeholder:text-on-surface-variant/75 focus:border-primary"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="login-password"
            className="block text-xs font-medium uppercase tracking-[0.16em] text-on-surface-variant"
          >
            {passwordLabel}
          </label>
          <input
            id="login-password"
            type="password"
            placeholder={passwordPlaceholder}
            className="w-full border-0 border-b border-outline-variant bg-transparent px-0 py-2 text-sm text-on-surface outline-none transition-colors placeholder:text-on-surface-variant/75 focus:border-primary"
          />
        </div>

        <div className="flex items-center justify-between gap-4 pt-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="size-4 rounded-sm border border-outline-variant accent-black"
            />
            <span className="text-xs text-on-surface-variant">{rememberSession}</span>
          </label>
          <Link href={`/${locale}/login`} className="text-xs text-primary hover:underline">
            {forgotPassword}
          </Link>
        </div>

        <button
          type="submit"
          disabled={isPending}
          aria-busy={isPending}
          className="w-full rounded-sm bg-primary py-4 text-sm font-medium text-on-primary transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitLabel}
        </button>

        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-outline-variant" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-surface-container-lowest px-2 text-outline">{divider}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-sm border border-outline-variant py-3 text-sm font-medium transition-colors hover:bg-surface-container-low"
          >
            <CircleDashed className="size-4" strokeWidth={1.8} />
            {google}
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-sm border border-outline-variant py-3 text-sm font-medium transition-colors hover:bg-surface-container-low"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-4 fill-current"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.72-4.03-1.42-4.03-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 5.8c1.02.01 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
            </svg>
            {github}
          </button>
        </div>
      </form>

      <p className="mt-8 text-center text-xs text-on-surface-variant">
        {signupPrompt}{" "}
        <Link href={`/${locale}/login`} className="font-semibold text-primary hover:underline">
          {signupCta}
        </Link>
      </p>
    </div>
  );
}
