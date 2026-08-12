"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState, type ReactNode } from "react";

import {
  brandDefaults,
  desktopNavLinks,
  footerColumns,
  formatPrice,
  navLinks,
  products,
  services,
} from "@/lib/kds-data";
import { useSiteContext } from "@/components/site-provider";
import { BrandFooterBadge } from "@/components/brand-logos";

export function Icon({
  name,
  className = "h-5 w-5",
}: {
  name:
    | "menu"
    | "search"
    | "user"
    | "heart"
    | "bag"
    | "close"
    | "arrow"
    | "sparkle"
    | "calendar"
    | "play";
  className?: string;
}) {
  const paths = {
    menu: "M4 6h16M4 12h16M4 18h16",
    search:
      "m21 21-4.35-4.35M17 10.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0Z",
    user:
      "M20 21a8 8 0 0 0-16 0M12 11a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z",
    heart:
      "m12 20-1.1-1C5.14 13.76 2 10.86 2 7.3 2 4.4 4.4 2 7.3 2c1.64 0 3.22.76 4.2 1.95A5.61 5.61 0 0 1 15.7 2C18.6 2 21 4.4 21 7.3c0 3.56-3.14 6.46-8.9 11.7L12 20Z",
    bag:
      "M6 8h12l-1 12H7L6 8Zm3 0V6a3 3 0 1 1 6 0v2",
    close: "M6 6l12 12M18 6 6 18",
    arrow: "M5 12h14M13 5l7 7-7 7",
    sparkle:
      "M12 3l1.8 4.7L18.5 9l-4.7 1.8L12 15.5l-1.8-4.7L5.5 9l4.7-1.3L12 3ZM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15ZM5 14l1 2.8L8.8 18 6 19l-1 2.8L4 19l-2.8-1.2L4 16.8 5 14Z",
    calendar:
      "M7 2v4M17 2v4M3 9h18M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z",
    play: "m9 8 8 4-8 4V8Z",
  } as const;

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      <path d={paths[name]} />
    </svg>
  );
}

function NavLinkItem({
  href,
  label,
  onNavigate,
}: {
  href: string;
  label: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      className={`transition-colors duration-300 ${
        isActive ? "text-[var(--kds-ink)]" : "text-[var(--kds-muted)] hover:text-[var(--kds-ink)]"
      }`}
      href={href}
      onClick={onNavigate}
    >
      {label}
    </Link>
  );
}

function HeaderActions({
  openBag,
}: {
  openBag: () => void;
}) {
  const { cart, wishlist } = useSiteContext();

  return (
    <div className="hidden items-center gap-2 lg:flex">
      <Link
        aria-label="Search products"
        className="kds-icon-button"
        href="/shop-wigs"
      >
        <Icon name="search" />
      </Link>
      <Link aria-label="My KDS account" className="kds-icon-button" href="/my-kds">
        <Icon name="user" />
      </Link>
      <Link
        aria-label="Saved wigs"
        className="kds-icon-button relative"
        href="/my-kds"
      >
        <Icon name="heart" />
        {wishlist.length > 0 ? (
          <span className="kds-icon-count">{wishlist.length}</span>
        ) : null}
      </Link>
      <button
        aria-label="Open shopping bag"
        className="kds-icon-button relative"
        onClick={openBag}
        type="button"
      >
        <Icon name="bag" />
        {cart.length > 0 ? <span className="kds-icon-count">{cart.length}</span> : null}
      </button>
      <Link className="kds-button-primary" href="/book-appointment">
        Book Now
      </Link>
    </div>
  );
}

function MobileNav({
  isOpen,
  onClose,
  openBag,
}: {
  isOpen: boolean;
  onClose: () => void;
  openBag: () => void;
}) {
  const { wishlist, cart } = useSiteContext();

  return (
    <div
      className={`fixed inset-0 z-50 bg-[rgba(15,10,7,0.35)] transition-opacity duration-300 lg:hidden ${
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <button
        aria-label="Close navigation"
        className="absolute inset-0"
        onClick={onClose}
        type="button"
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-[var(--kds-cream)] px-6 py-6 shadow-[0_20px_60px_rgba(34,25,18,0.18)] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[var(--kds-border)] pb-5">
          <div>
            <p className="font-display text-2xl text-[var(--kds-ink)]">
              {brandDefaults.name}
            </p>
            <p className="mt-1 text-sm text-[var(--kds-muted)]">{brandDefaults.tagline}</p>
          </div>
          <button className="kds-icon-button" onClick={onClose} type="button">
            <Icon name="close" />
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-5 text-lg">
          {navLinks.map((link) => (
            <NavLinkItem
              key={link.href}
              href={link.href}
              label={link.label}
              onNavigate={onClose}
            />
          ))}
        </nav>

        <div className="mt-8 grid grid-cols-2 gap-3">
          <Link className="kds-subtle-card p-4 text-sm" href="/shop-wigs" onClick={onClose}>
            <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--kds-panel)]">
              <Icon name="search" />
            </span>
            Search
          </Link>
          <Link className="kds-subtle-card p-4 text-sm" href="/my-kds" onClick={onClose}>
            <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--kds-panel)]">
              <Icon name="user" />
            </span>
            My KDS
          </Link>
          <Link className="kds-subtle-card p-4 text-sm" href="/my-kds" onClick={onClose}>
            <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--kds-panel)]">
              <Icon name="heart" />
            </span>
            Wishlist ({wishlist.length})
          </Link>
          <button className="kds-subtle-card p-4 text-left text-sm" onClick={openBag} type="button">
            <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--kds-panel)]">
              <Icon name="bag" />
            </span>
            Bag ({cart.length})
          </button>
        </div>

        <div className="mt-auto flex flex-col gap-3 border-t border-[var(--kds-border)] pt-6">
          <Link className="kds-button-primary justify-center" href="/book-appointment" onClick={onClose}>
            Book Your Appointment
          </Link>
          <Link className="kds-button-secondary justify-center" href="/shop-wigs" onClick={onClose}>
            Shop KDS Wigs
          </Link>
        </div>
      </aside>
    </div>
  );
}

function CartDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { cart, removeFromCart, updateCartQuantity } = useSiteContext();

  const items = useMemo(
    () =>
      cart
        .map((item) => ({
          ...item,
          product: products.find((product) => product.slug === item.slug),
        }))
        .filter((item) => item.product),
    [cart],
  );
  const subtotal = items.reduce(
    (total, item) => total + (item.product?.price ?? 0) * item.quantity,
    0,
  );

  return (
    <div
      className={`fixed inset-0 z-50 bg-[rgba(15,10,7,0.35)] transition-opacity duration-300 ${
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <button
        aria-label="Close shopping bag"
        className="absolute inset-0"
        onClick={onClose}
        type="button"
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white px-5 py-5 shadow-[0_20px_60px_rgba(34,25,18,0.18)] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[var(--kds-border)] pb-4">
          <div>
            <p className="font-display text-2xl text-[var(--kds-ink)]">Shopping Bag</p>
            <p className="mt-1 text-sm text-[var(--kds-muted)]">
              Secure Checkout • UK Delivery • KDS Customer Support
            </p>
          </div>
          <button className="kds-icon-button" onClick={onClose} type="button">
            <Icon name="close" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-5">
          {items.length === 0 ? (
            <div className="kds-subtle-card flex h-full flex-col items-center justify-center p-8 text-center">
              <span className="mb-4 rounded-full bg-[var(--kds-panel)] p-4">
                <Icon className="h-7 w-7" name="bag" />
              </span>
              <h3 className="font-display text-2xl text-[var(--kds-ink)]">
                Your bag is waiting
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--kds-muted)]">
                Add your favourite wigs now. We keep your bag saved locally so clients returning from Instagram, TikTok or WhatsApp can continue where they left off.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link className="kds-button-primary" href="/shop-wigs" onClick={onClose}>
                  Shop Wigs
                </Link>
                <Link className="kds-button-secondary" href="/book-appointment" onClick={onClose}>
                  Book Appointment
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(({ slug, quantity, product }) => (
                <div
                  key={slug}
                  className="rounded-[28px] border border-[var(--kds-border)] bg-[var(--kds-soft-white)] p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-display text-xl text-[var(--kds-ink)]">
                        {product?.name}
                      </p>
                      <p className="mt-1 text-sm text-[var(--kds-muted)]">
                        {product?.length} • {product?.texture} • {product?.lace}
                      </p>
                      <p className="mt-2 text-sm font-medium text-[var(--kds-ink)]">
                        {product?.priceLabel}
                      </p>
                    </div>
                    <button
                      className="text-sm text-[var(--kds-muted)] transition-colors hover:text-[var(--kds-ink)]"
                      onClick={() => removeFromCart(slug)}
                      type="button"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="inline-flex items-center rounded-full border border-[var(--kds-border)] bg-white px-2 py-1">
                      <button
                        className="h-8 w-8 text-lg"
                        onClick={() => updateCartQuantity(slug, quantity - 1)}
                        type="button"
                      >
                        -
                      </button>
                      <span className="min-w-10 text-center text-sm font-medium">
                        {quantity}
                      </span>
                      <button
                        className="h-8 w-8 text-lg"
                        onClick={() => updateCartQuantity(slug, quantity + 1)}
                        type="button"
                      >
                        +
                      </button>
                    </div>
                    <Link
                      className="text-sm font-medium text-[var(--kds-ink)] underline decoration-[var(--kds-gold)] underline-offset-4"
                      href={`/shop-wigs/${slug}`}
                      onClick={onClose}
                    >
                      View Wig
                    </Link>
                  </div>
                </div>
              ))}

             
            </div>
          )}
        </div>

        <div className="border-t border-[var(--kds-border)] pt-4">
          <div className="mb-4 flex items-center justify-between text-sm text-[var(--kds-muted)]">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <p className="mb-4 text-sm text-[var(--kds-muted)]">
            Standard UK delivery from £4.95
          </p>
          <div className="flex flex-col gap-3">
            <Link className="kds-button-primary justify-center" href="/checkout" onClick={onClose}>
              Secure Checkout
            </Link>
          
          </div>
        </div>
      </aside>
    </div>
  );
}

function EmailPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const alreadyDismissed =
      window.localStorage.getItem("kds-email-popup-dismissed") === "true";

    if (alreadyDismissed) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setIsOpen(true);
    }, 5500);

    return () => window.clearTimeout(timeout);
  }, []);

  const closePopup = () => {
    window.localStorage.setItem("kds-email-popup-dismissed", "true");
    setIsOpen(false);
  };

  return (
    <div
      className={`fixed inset-0 z-40 bg-[rgba(17,12,9,0.42)] px-4 transition-opacity duration-300 ${
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <button className="absolute inset-0" onClick={closePopup} type="button" />
      <div
        className={`absolute inset-x-4 bottom-4 mx-auto max-w-xl rounded-[32px] bg-white p-6 shadow-[0_24px_80px_rgba(31,22,16,0.25)] transition-all duration-300 sm:bottom-8 ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--kds-muted)]">
              Join The KDS List
            </p>
            <h3 className="mt-2 font-display text-3xl text-[var(--kds-ink)]">
              Be first to hear what’s next
            </h3>
          </div>
          <button className="kds-icon-button" onClick={closePopup} type="button">
            <Icon name="close" />
          </button>
        </div>
        <p className="mt-3 max-w-lg text-sm leading-6 text-[var(--kds-muted)]">
          New wigs, restocks and appointment drops.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-1">
          <input className="kds-input" placeholder="First name" type="text" />
          <input className="kds-input" placeholder="Email" type="email" />
          <input className="kds-input" placeholder="Mobile (optional)" type="tel" />
          <button className="kds-button-primary justify-center" type="button">
            Join The List
          </button>
        </div>
      </div>
    </div>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const { brandSettings, cart } = useSiteContext();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileNavOpen || bagOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [bagOpen, mobileNavOpen]);

  return (
    <>
      <div className="sticky top-0 z-30 border-b border-[rgba(255,255,255,0.08)] bg-[var(--kds-ink)] px-4 py-2 text-center text-[11px] uppercase tracking-[0.28em] text-[var(--kds-soft-white)]">
        {brandSettings.announcement}
      </div>

      <header className="sticky top-[33px] z-30 border-b border-[rgba(120,91,61,0.12)] bg-[rgba(249,244,238,0.88)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              aria-label="Open navigation"
              className="kds-icon-button lg:hidden"
              onClick={() => setMobileNavOpen(true)}
              type="button"
            >
              <Icon name="menu" />
            </button>
            <Link href="/">
              <p className="font-display text-[1.6rem] tracking-[0.04em] text-[var(--kds-ink)]">
                KDS
              </p>
              <p className="text-[10px] uppercase tracking-[0.32em] text-[var(--kds-muted)]">
                Hair & Beauty
              </p>
            </Link>
          </div>

          <nav className="hidden items-center gap-8 text-[13px] font-medium tracking-[0.08em] lg:flex">
            {desktopNavLinks.map((link) => (
              <NavLinkItem key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          <HeaderActions openBag={() => setBagOpen(true)} />

          <div className="flex items-center gap-2 lg:hidden">
            <Link aria-label="Search products" className="kds-icon-button" href="/shop-wigs">
              <Icon name="search" />
            </Link>
            <button
              aria-label="Open shopping bag"
              className="kds-icon-button relative"
              onClick={() => setBagOpen(true)}
              type="button"
            >
              <Icon name="bag" />
              {cart.length > 0 ? <span className="kds-icon-count">{cart.length}</span> : null}
            </button>
          </div>
        </div>
      </header>

      <main className="min-h-[70vh]">{children}</main>

      <footer className="border-t border-[var(--kds-border)] bg-[var(--kds-soft-white)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
          <div>
            <p className="font-display text-3xl text-[var(--kds-ink)]">
              {brandDefaults.name}
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--kds-muted)]">
              {brandDefaults.footerStatement}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Instagram", "TikTok", "Email signup", "Visa", "Mastercard", "Apple Pay"].map(
                (item) => (
                  <BrandFooterBadge key={item} item={item} />
                ),
              )}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--kds-muted)]">
                {column.title}
              </p>
              <div className="mt-5 flex flex-col gap-3 text-sm text-[var(--kds-ink)]">
                {column.links.map((link) => (
                  <Link key={link.href} className="transition-colors hover:text-[var(--kds-accent)]" href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-[var(--kds-border)] px-4 py-5 text-center text-xs uppercase tracking-[0.2em] text-[var(--kds-muted)]">
          © 2026 {brandDefaults.name}. All rights reserved.
        </div>
      </footer>

      <WhatsAppFloatingButton />

      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        openBag={() => {
          setMobileNavOpen(false);
          setBagOpen(true);
        }}
      />
      <CartDrawer isOpen={bagOpen} onClose={() => setBagOpen(false)} />
      <EmailPopup />
    </>
  );
}

export function WhatsAppFloatingButton() {
  return (
    <a
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-full bg-[#25D366] p-2 text-white shadow-[0_10px_28px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a] hover:shadow-[0_14px_32px_rgba(37,211,102,0.5)] active:scale-95"
      href="https://wa.me/?text=Hello%20KDS%20Hair%20%26%20Beauty%2C%20I%20have%20an%20enquiry!"
      rel="noopener noreferrer"
      target="_blank"
    >
      <svg
        className="h-6 w-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    </a>
  );
}

export function InlineActionPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(120,91,61,0.16)] bg-[rgba(255,255,255,0.7)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--kds-muted)]">
      {children}
    </span>
  );
}

export function SectionCta({
  href,
  label,
  variant = "primary",
}: {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <Link className={variant === "primary" ? "kds-button-primary" : "kds-button-secondary"} href={href}>
      {label}
      <Icon className="h-4 w-4" name="arrow" />
    </Link>
  );
}

export function ServicePromptCard() {
  return (
    <div className="kds-panel-card bg-[var(--kds-panel-strong)]">
      <div className="mb-4 inline-flex rounded-full bg-[rgba(99,73,48,0.08)] p-3 text-[var(--kds-accent)]">
        <Icon className="h-5 w-5" name="sparkle" />
      </div>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--kds-muted)]">
        Need A Wig For Your Appointment?
      </p>
      <h3 className="mt-3 font-display text-3xl text-[var(--kds-ink)]">
        Complete your transformation with a KDS wig.
      </h3>
      <p className="mt-3 text-sm leading-7 text-[var(--kds-muted)]">
        Booking an installation? Browse premium KDS units matched to service-ready finishes.
      </p>
      <div className="mt-6">
        <SectionCta href="/shop-wigs" label="Shop Wigs For My Appointment" />
      </div>
    </div>
  );
}

export function InstallationPromptCard() {
  return (
    <div className="kds-panel-card">
      <div className="mb-4 inline-flex rounded-full bg-[rgba(99,73,48,0.08)] p-3 text-[var(--kds-accent)]">
        <Icon className="h-5 w-5" name="calendar" />
      </div>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--kds-muted)]">
        Want The KDS Finish?
      </p>
      <h3 className="mt-3 font-display text-3xl text-[var(--kds-ink)]">
        Let us install and style your new wig professionally.
      </h3>
      <p className="mt-3 text-sm leading-7 text-[var(--kds-muted)]">
        Take your wig from beautiful to seamless with a professional melt, finish and styling appointment.
      </p>
      <div className="mt-6">
        <SectionCta href="/book-appointment" label="Book My Installation" />
      </div>
    </div>
  );
}

export function TopPicksStrip() {
  const featuredServices = services.slice(0, 3);

  return (
    <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
      {featuredServices.map((service) => (
        <div
          key={service.slug}
          className="rounded-[28px] border border-[var(--kds-border)] bg-[rgba(255,255,255,0.78)] p-5 backdrop-blur"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--kds-muted)]">
            {service.category}
          </p>
          <h3 className="mt-3 font-display text-2xl text-[var(--kds-ink)]">
            {service.name}
          </h3>
          <p className="mt-3 text-sm leading-7 text-[var(--kds-muted)]">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
}
