"use client";

import type { ReactNode } from "react";

export function VisaLogo({ className = "h-4 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 12" fill="currentColor" aria-label="Visa">
      <path d="M14.07 0.17L9.22 11.83H6.17L3.73 2.58C3.59 2 3.42 1.8 2.92 1.53C2.12 1.09 0.99 0.7 0L0.48 0.17H5.08C5.74 0.17 6.3 0.6 6.44 1.34L7.67 7.91L10.74 0.17H14.07ZM26.39 8.44C26.4 5.21 21.92 5.04 21.94 3.6C21.95 3.16 22.38 2.69 23.33 2.57C23.8 2.51 25.1 2.45 26.44 3.07L27 0.49C26.24 0.22 25.26 0 24.03 0C21.1 0 19.03 1.56 19.01 3.78C18.99 5.43 20.48 6.35 21.6 6.9C22.75 7.46 23.14 7.82 23.13 8.32C23.12 9.09 22.2 9.43 21.36 9.44C19.86 9.46 19 9.03 18.3 8.71L17.72 11.41C18.5 11.77 19.94 12 21.43 12C24.54 12 26.39 10.46 26.39 8.44ZM34.2 11.83H36.9L34.54 0.17H32.06C31.47 0.17 30.97 0.51 30.75 1.05L26.27 11.83H29.54L30.2 10.02H34.21L34.2 11.83ZM31.09 7.57L32.74 3.03L33.68 7.57H31.09ZM18.52 0.17L15.93 11.83H12.8L15.39 0.17H18.52Z" />
    </svg>
  );
}

export function MastercardLogo({ className = "h-4 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 38 24" fill="none" aria-label="Mastercard">
      <circle cx="14" cy="12" r="10" fill="#EB001B" />
      <circle cx="24" cy="12" r="10" fill="#F79E1B" fillOpacity="0.9" />
      <path d="M19 4.76a9.96 9.96 0 0 0-3.6 7.24A9.96 9.96 0 0 0 19 19.24a9.96 9.96 0 0 0 3.6-7.24A9.96 9.96 0 0 0 19 4.76z" fill="#FF5F00" />
    </svg>
  );
}

export function ApplePayLogo({ className = "h-4 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 54 22" fill="currentColor" aria-label="Apple Pay">
      <path d="M9.54 10.07c0-2.38 1.94-3.55 2.03-3.61-1.11-1.62-2.83-1.84-3.44-1.87-1.46-.15-2.86.86-3.6.86-.75 0-1.89-.84-3.1-.82-1.59.02-3.06.93-3.88 2.36-1.66 2.88-.42 7.12 1.19 9.45.79 1.14 1.73 2.42 2.97 2.37 1.19-.05 1.64-.77 3.08-.77 1.44 0 1.85.77 3.09.74 1.27-.02 2.07-1.15 2.85-2.29.9-1.32 1.27-2.6 1.3-2.67-.03-.01-2.49-.95-2.49-3.8zM7.34 3.71c.65-.79 1.09-1.88.97-2.97-.94.04-2.08.63-2.75 1.41-.6.69-1.12 1.81-.98 2.87 1.05.08 2.12-.52 2.76-1.31z" />
      <text x="17" y="16" fontSize="14" fontWeight="600" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">Pay</text>
    </svg>
  );
}

export function GooglePayLogo({ className = "h-4 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 22" aria-label="Google Pay">
      <path d="M7.4 9.1v2.8h4.4c-.2 1.1-.8 2.1-1.8 2.8l2.9 2.2c1.7-1.6 2.7-3.9 2.7-6.7 0-.7-.1-1.3-.2-1.9H7.4z" fill="#4285F4" />
      <path d="M7.4 17.5c2.4 0 4.5-.8 6-2.2l-2.9-2.2c-.8.5-1.9.9-3.1.9-2.4 0-4.4-1.6-5.1-3.8H.6v2.3c1.5 3 4.6 5 8.3 5z" fill="#34A853" />
      <path d="M2.3 10.2c-.2-.5-.3-1.1-.3-1.7s.1-1.2.3-1.7V4.5H.6C0 5.7-.3 7-.3 8.5s.3 2.8.9 4l1.7-2.3z" fill="#FBBC05" />
      <path d="M7.4 3.5c1.3 0 2.5.5 3.4 1.3l2.6-2.6C11.9.8 9.8 0 7.4 0 3.7 0 .6 2 0 5l2.9 2.3c.7-2.2 2.7-3.8 5.1-3.8z" fill="#EA4335" />
      <text x="19" y="16" fontSize="14" fontWeight="600" fontFamily="Google Sans, Roboto, sans-serif" fill="currentColor">Pay</text>
    </svg>
  );
}

export function CreditCardIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
      <line x1="6" y1="15" x2="10" y2="15" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function TikTokIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.84V7.64a6.34 6.34 0 0 0-5.07 6.18A6.34 6.34 0 0 0 10.75 20a6.34 6.34 0 0 0 6.34-6.34V9a8.16 8.16 0 0 0 4.79 1.52V7.08a4.85 4.85 0 0 1-2.29-.39z" />
    </svg>
  );
}

export function EmailIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export function BrandFooterBadge({ item }: { item: string }) {
  const renderContent = () => {
    switch (item) {
      case "Instagram":
        return (
          <>
            <InstagramIcon className="h-4 w-4 text-[var(--kds-muted)]" />
            <span>Instagram</span>
          </>
        );
      case "TikTok":
        return (
          <>
            <TikTokIcon className="h-4 w-4 text-[var(--kds-muted)]" />
            <span>TikTok</span>
          </>
        );
      case "Email signup":
        return (
          <>
            <EmailIcon className="h-4 w-4 text-[var(--kds-muted)]" />
            <span>Email signup</span>
          </>
        );
      case "Visa":
        return <VisaLogo className="h-3.5 w-auto text-[var(--kds-muted)]" />;
      case "Mastercard":
        return <MastercardLogo className="h-4.5 w-auto" />;
      case "Apple Pay":
        return <ApplePayLogo className="h-3.5 w-auto text-[var(--kds-muted)]" />;
      default:
        return <span>{item}</span>;
    }
  };

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--kds-border)] bg-[rgba(255,255,255,0.6)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--kds-muted)] transition-colors hover:border-[var(--kds-accent)] hover:text-[var(--kds-ink)]">
      {renderContent()}
    </span>
  );
}

export function PaymentBadge({ method }: { method: string }) {
  switch (method) {
    case "Debit / Credit Card":
      return (
        <span className="inline-flex items-center gap-2">
          <CreditCardIcon className="h-4 w-4 text-[var(--kds-muted)]" />
          <span>Debit / Credit Card</span>
        </span>
      );
    case "Apple Pay":
      return (
        <span className="inline-flex items-center gap-2">
          <ApplePayLogo className="h-4 w-auto text-[var(--kds-muted)]" />
        </span>
      );
    case "Google Pay":
      return (
        <span className="inline-flex items-center gap-2">
          <GooglePayLogo className="h-4 w-auto text-[var(--kds-muted)]" />
        </span>
      );
    default:
      return <span>{method}</span>;
  }
}
