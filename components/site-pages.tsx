"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState, type ReactNode } from "react";

import { useSiteContext } from "@/components/site-provider";
import { PaymentBadge } from "@/components/brand-logos";
import {
  Icon,
  InlineActionPill,
  InstallationPromptCard,
  SectionCta,
  ServicePromptCard,
} from "@/components/site-shell";
import {
  accountAppointments,
  accountOrders,
  adminSections,
  allProductCollections,
  bookingExtras,
  bookingTimeSlots,
  brandDefaults,
  collections,
  faqCategories,
  formatPrice,
  getPolicyBySlug,
  getRelatedProducts,
  policies,
  products,
  reviews,
  services,
  transformations,
  type FAQCategory,
  type Policy,
  type Product,
  type Service,
} from "@/lib/kds-data";

function SectionHeading({
  eyebrow,
  title,
  copy,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--kds-muted)]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl leading-tight text-[var(--kds-ink)] sm:text-5xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-4 text-base leading-8 text-[var(--kds-muted)]">{copy}</p>
      ) : null}
    </div>
  );
}

function PageHero({
  eyebrow,
  title,
  copy,
  actions,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  actions?: ReactNode;
}) {
  return (
    <section className="kds-page-hero">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--kds-muted)]">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-5xl leading-none text-[var(--kds-ink)] sm:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--kds-muted)]">
            {copy}
          </p>
          {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="tracking-[0.18em] text-[var(--kds-accent)]">
      {"★".repeat(Math.round(rating))}
    </span>
  );
}

function ProductCard({
  product,
  compact = false,
}: {
  product: Product;
  compact?: boolean;
}) {
  const { addToCart, toggleWishlist, wishlist } = useSiteContext();
  const isSaved = wishlist.includes(product.slug);

  return (
    <article className="group overflow-hidden rounded-[32px] border border-[var(--kds-border)] bg-white shadow-[0_18px_45px_rgba(39,28,20,0.06)] transition-transform duration-500 hover:-translate-y-1">
      <div className="relative aspect-[0.86] overflow-hidden bg-[var(--kds-panel)]">
        <Link href={`/shop-wigs/${product.slug}`}>
          <Image
            alt={product.imageAlt}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            src={product.image}
          />
          <Image
            alt={`${product.imageAlt} alternate view`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            src={product.hoverImage}
          />
        </Link>
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {product.badge ? (
            <span className="rounded-full bg-[rgba(22,16,12,0.74)] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[var(--kds-soft-white)]">
              {product.badge}
            </span>
          ) : null}
        </div>
        <button
          aria-label={isSaved ? "Remove from wishlist" : "Save to wishlist"}
          className={`absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full backdrop-blur ${
            isSaved
              ? "bg-[var(--kds-ink)] text-white"
              : "bg-[rgba(255,255,255,0.78)] text-[var(--kds-ink)]"
          }`}
          onClick={() => toggleWishlist(product.slug)}
          type="button"
        >
          <Icon className="h-4 w-4" name="heart" />
        </button>
        <div className="absolute inset-x-4 bottom-4 flex gap-2 opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
          <button
            className="kds-button-primary flex-1 justify-center"
            onClick={() => addToCart(product.slug)}
            type="button"
          >
            Quick Add
          </button>
          <Link className="kds-button-secondary" href={`/shop-wigs/${product.slug}`}>
            View Wig
          </Link>
        </div>
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-display text-2xl text-[var(--kds-ink)]">{product.name}</p>
            <div className="mt-2 flex items-center gap-2 text-sm text-[var(--kds-muted)]">
              <Stars rating={product.rating} />
              <span>
                {product.rating.toFixed(1)} ({product.reviewCount})
              </span>
            </div>
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--kds-ink)]">
            {product.priceLabel}
          </p>
        </div>
        {!compact ? (
          <div className="grid grid-cols-2 gap-3 text-sm text-[var(--kds-muted)]">
            <div>
              <span className="block text-xs uppercase tracking-[0.24em]">Length</span>
              {product.length}
            </div>
            <div>
              <span className="block text-xs uppercase tracking-[0.24em]">Texture</span>
              {product.texture}
            </div>
            <div>
              <span className="block text-xs uppercase tracking-[0.24em]">Lace</span>
              {product.lace}
            </div>
            <div>
              <span className="block text-xs uppercase tracking-[0.24em]">Colour</span>
              {product.color}
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="kds-panel-card">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--kds-muted)]">
        {service.category}
      </p>
      <h3 className="mt-4 font-display text-3xl text-[var(--kds-ink)]">{service.name}</h3>
      <p className="mt-4 text-sm leading-7 text-[var(--kds-muted)]">
        {service.description}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[var(--kds-muted)]">
        <InlineActionPill>{service.priceLabel}</InlineActionPill>
        <InlineActionPill>{service.duration}</InlineActionPill>
      </div>
      <div className="mt-7">
        <SectionCta href="/book-appointment" label="Book This Service" />
      </div>
    </article>
  );
}

function CollectionCard({
  title,
  description,
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <article className="group relative overflow-hidden rounded-[32px] bg-[var(--kds-panel)]">
      <div className="relative aspect-[0.85]">
        <Image
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          src={image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(23,17,13,0.78)] via-[rgba(23,17,13,0.18)] to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6 text-[var(--kds-soft-white)]">
        <h3 className="font-display text-3xl">{title}</h3>
        <p className="mt-2 max-w-sm text-sm leading-6 text-[rgba(250,245,239,0.8)]">
          {description}
        </p>
        <div className="mt-4">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em]">
            Explore
            <Icon className="h-4 w-4" name="arrow" />
          </span>
        </div>
      </div>
    </article>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <article className="kds-panel-card">
      <div className="flex items-center gap-4">
        <div className="relative h-14 w-14 overflow-hidden rounded-full">
          <Image
            alt={review.imageAlt}
            className="h-full w-full object-cover"
            fill
            sizes="56px"
            src={review.image}
          />
        </div>
        <div>
          <p className="font-display text-2xl text-[var(--kds-ink)]">{review.name}</p>
          <p className="mt-1 text-sm text-[var(--kds-muted)]">{review.context}</p>
        </div>
      </div>
      <div className="mt-5 text-lg">
        <Stars rating={review.rating} />
      </div>
      <p className="mt-5 text-sm leading-7 text-[var(--kds-muted)]">{review.body}</p>
    </article>
  );
}

function FaqAccordion({ categories }: { categories: FAQCategory[] }) {
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

  return (
    <div className="space-y-8">
      {categories.map((category, categoryIndex) => (
        <div key={category.title}>
          <h3 className="font-display text-3xl text-[var(--kds-ink)]">{category.title}</h3>
          <div className="mt-4 space-y-3">
            {category.items.map((item, itemIndex) => {
              const currentIndex = `${categoryIndex}-${itemIndex}`;
              const isOpen = currentIndex === openIndex;

              return (
                <div
                  key={item.question}
                  className="rounded-[24px] border border-[var(--kds-border)] bg-white"
                >
                  <button
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : currentIndex)}
                    type="button"
                  >
                    <span className="font-medium text-[var(--kds-ink)]">{item.question}</span>
                    <span className="text-xl text-[var(--kds-muted)]">{isOpen ? "−" : "+"}</span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-7 text-[var(--kds-muted)]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function WigFinderQuiz() {
  const questions = [
    {
      id: "length",
      question: "What length do you prefer?",
      answers: ["short", "medium", "long"],
    },
    {
      id: "texture",
      question: "What texture do you love?",
      answers: ["straight", "body-wave", "curly"],
    },
    {
      id: "install",
      question: "Glueless or professional installation?",
      answers: ["glueless", "professional", "either"],
    },
    {
      id: "lace",
      question: "What lace finish do you prefer?",
      answers: ["closure", "transparent", "hd", "frontal"],
    },
    {
      id: "budget",
      question: "What’s your budget comfort level?",
      answers: ["accessible", "mid", "premium"],
    },
  ] as const;

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const matches = useMemo(() => {
    return [...products]
      .map((product) => {
        const score = Object.entries(answers).reduce((total, [key, value]) => {
          return product.quizTags[key as keyof Product["quizTags"]] === value
            ? total + 1
            : total;
        }, 0);

        return { product, score };
      })
      .sort((first, second) => second.score - first.score)
      .slice(0, 3);
  }, [answers]);

  const currentQuestion = questions[questionIndex];
  const bestMatch = matches[0];
  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === questions.length;
  const progress = Math.round((answeredCount / questions.length) * 100);
  const matchScore = Math.max(72, Math.round((bestMatch.score / questions.length) * 100));

  const resetQuiz = () => {
    setAnswers({});
    setQuestionIndex(0);
    setShowResults(false);
  };

  return (
    <div className="relative overflow-hidden rounded-[40px] bg-[var(--kds-ink)] p-3 shadow-[0_24px_70px_rgba(39,28,20,0.14)] sm:p-5">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[rgba(181,150,111,0.22)] blur-3xl" />
      <div className="relative grid gap-3 lg:grid-cols-[0.94fr_1.06fr]">
        <div className="rounded-[30px] bg-[var(--kds-panel-strong)] p-6 sm:p-9">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--kds-muted)]">
                KDS Style Match
              </p>
              <h2 className="mt-4 max-w-md font-display text-4xl leading-tight text-[var(--kds-ink)] sm:text-5xl">
                Find the wig that feels like you.
              </h2>
            </div>
            <Icon className="h-7 w-7 shrink-0 text-[var(--kds-accent)]" name="sparkle" />
          </div>

          <div className="mt-9">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.24em] text-[var(--kds-muted)]">
              <span>Step {questionIndex + 1} of {questions.length}</span>
              <span>{progress}%</span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[rgba(110,83,58,0.16)]">
              <div
                className="h-full rounded-full bg-[var(--kds-accent)] transition-[width] duration-500"
                style={{ width: `${Math.max(progress, 10)}%` }}
              />
            </div>
          </div>

          <div className="mt-12 min-h-[270px]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--kds-muted)]">
              Tell us your preference
            </p>
            <h3 className="mt-4 font-display text-3xl leading-tight text-[var(--kds-ink)] sm:text-4xl">
              {currentQuestion.question}
            </h3>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {currentQuestion.answers.map((answer) => {
                const isActive = answers[currentQuestion.id] === answer;

                return (
                  <button
                    key={answer}
                    aria-pressed={isActive}
                    className={`flex items-center justify-between rounded-[20px] border px-4 py-4 text-left text-sm font-medium capitalize transition-all ${
                      isActive
                        ? "border-[var(--kds-ink)] bg-[var(--kds-ink)] text-white shadow-lg"
                        : "border-[rgba(110,83,58,0.18)] bg-[rgba(255,255,255,0.62)] text-[var(--kds-ink)] hover:-translate-y-0.5 hover:bg-white"
                    }`}
                    onClick={() =>
                      setAnswers((currentAnswers) => ({
                        ...currentAnswers,
                        [currentQuestion.id]: answer,
                      }))
                    }
                    type="button"
                  >
                    {answer.replace("-", " ")}
                    <Icon className="h-4 w-4" name="arrow" />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[rgba(110,83,58,0.14)] pt-6">
            <button
              className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--kds-muted)] disabled:cursor-not-allowed disabled:opacity-40"
              disabled={questionIndex === 0}
              onClick={() => setQuestionIndex((currentIndex) => Math.max(0, currentIndex - 1))}
              type="button"
            >
              Back
            </button>
            {isComplete ? (
              <button
                className="kds-button-primary"
                onClick={() => setShowResults(true)}
                type="button"
              >
                Reveal My Match
                <Icon className="h-4 w-4" name="arrow" />
              </button>
            ) : (
              <button
                className="kds-button-primary disabled:cursor-not-allowed disabled:opacity-40"
                disabled={!answers[currentQuestion.id]}
                onClick={() => setQuestionIndex((currentIndex) => Math.min(questions.length - 1, currentIndex + 1))}
                type="button"
              >
                Next
                <Icon className="h-4 w-4" name="arrow" />
              </button>
            )}
          </div>
        </div>

        <div className="rounded-[30px] bg-[var(--kds-soft-white)] p-3 sm:p-5">
          <div className="flex items-center justify-between px-3 pb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--kds-muted)]">
            <span>Live preview</span>
            <span className="flex items-center gap-2 text-[var(--kds-accent)]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--kds-accent)]" />
              {showResults ? "Match found" : "Updating"}
            </span>
          </div>
          <div className="relative aspect-[0.88] overflow-hidden rounded-[24px] bg-[var(--kds-panel)]">
            <Image
              alt={bestMatch.product.imageAlt}
              className="h-full w-full object-cover transition-all duration-700"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              src={bestMatch.product.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(19,13,9,0.84)] via-transparent to-transparent" />
            <div className="absolute inset-x-5 bottom-5 text-white sm:inset-x-7 sm:bottom-7">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(250,245,239,0.7)]">
                Your strongest match
              </p>
              <h3 className="mt-2 max-w-sm font-display text-3xl leading-tight sm:text-4xl">
                {bestMatch.product.name}
              </h3>
              <p className="mt-2 text-sm text-[rgba(250,245,239,0.78)]">
                {bestMatch.product.priceLabel} · {bestMatch.product.length} · {bestMatch.product.texture}
              </p>
            </div>
          </div>

          <div aria-live="polite" className="mt-4 rounded-[24px] border border-[var(--kds-border)] bg-white p-5">
            {showResults ? (
              <>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--kds-muted)]">
                      Style compatibility
                    </p>
                    <p className="mt-1 font-display text-4xl text-[var(--kds-ink)]">{matchScore}%</p>
                  </div>
                  <button
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--kds-muted)] underline underline-offset-4"
                    onClick={resetQuiz}
                    type="button"
                  >
                    Start again
                  </button>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link className="kds-button-primary" href={`/shop-wigs/${bestMatch.product.slug}`}>
                    View My Match
                    <Icon className="h-4 w-4" name="arrow" />
                  </Link>
                  <Link className="kds-button-secondary" href="/book-appointment">
                    Book Installation
                  </Link>
                </div>
              </>
            ) : (
              <>
                <p className="font-display text-2xl text-[var(--kds-ink)]">
                  Your match updates as you answer.
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--kds-muted)]">
                  Five quick choices. Real KDS products.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function BookingFlow() {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    service: services[0].name,
    date: "Thu 13 Aug",
    time: bookingTimeSlots[1],
    extras: [] as string[],
    fullName: "",
    email: "",
    mobile: "",
    notes: "",
    bringOwnWig: "Yes",
    buyFromKds: "Yes",
    requiresCustomisation: "No",
    needsStyling: "Yes",
    payment: "Deposit",
    reminders: "SMS + Email",
    agreed: false,
  });

  const toggleExtra = (extra: string) => {
    setValues((currentValues) => ({
      ...currentValues,
      extras: currentValues.extras.includes(extra)
        ? currentValues.extras.filter((item) => item !== extra)
        : [...currentValues.extras, extra],
    }));
  };

  const serviceOptions = services.map((service) => service.name);
  const dates = ["Thu 13 Aug", "Fri 14 Aug", "Sat 15 Aug", "Tue 18 Aug", "Thu 20 Aug", "Sat 22 Aug"];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="kds-panel-card">
        <div className="mb-8 flex flex-wrap gap-3">
          {Array.from({ length: 8 }, (_, index) => index + 1).map((currentStep) => (
            <div
              key={currentStep}
              className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ${
                step >= currentStep
                  ? "bg-[var(--kds-accent)] text-white"
                  : "bg-[var(--kds-panel)] text-[var(--kds-muted)]"
              }`}
            >
              {currentStep}
            </div>
          ))}
        </div>

        {step === 1 ? (
          <div>
            <SectionHeading
              eyebrow="Step 1"
              title="Select service"
              copy="Choose the service that matches the finish you want."
            />
            <div className="mt-6 grid gap-3">
              {serviceOptions.map((serviceName) => (
                <button
                  key={serviceName}
                  className={`rounded-[22px] border px-5 py-4 text-left ${
                    values.service === serviceName
                      ? "border-[var(--kds-accent)] bg-[var(--kds-panel-strong)]"
                      : "border-[var(--kds-border)] bg-white"
                  }`}
                  onClick={() =>
                    setValues((currentValues) => ({
                      ...currentValues,
                      service: serviceName,
                    }))
                  }
                  type="button"
                >
                  <span className="font-medium text-[var(--kds-ink)]">{serviceName}</span>
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {step === 2 ? (
          <div>
            <SectionHeading
              eyebrow="Step 2"
              title="Choose date"
              copy="Availability can be managed from the admin area."
            />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {dates.map((date) => (
                <button
                  key={date}
                  className={`rounded-[22px] border px-5 py-4 text-left ${
                    values.date === date
                      ? "border-[var(--kds-accent)] bg-[var(--kds-panel-strong)]"
                      : "border-[var(--kds-border)] bg-white"
                  }`}
                  onClick={() =>
                    setValues((currentValues) => ({
                      ...currentValues,
                      date,
                    }))
                  }
                  type="button"
                >
                  {date}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {step === 3 ? (
          <div>
            <SectionHeading eyebrow="Step 3" title="Choose time" copy="Select a studio time that works for you." />
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {bookingTimeSlots.map((time) => (
                <button
                  key={time}
                  className={`rounded-[22px] border px-4 py-4 ${
                    values.time === time
                      ? "border-[var(--kds-accent)] bg-[var(--kds-panel-strong)]"
                      : "border-[var(--kds-border)] bg-white"
                  }`}
                  onClick={() =>
                    setValues((currentValues) => ({
                      ...currentValues,
                      time,
                    }))
                  }
                  type="button"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {step === 4 ? (
          <div>
            <SectionHeading eyebrow="Step 4" title="Select extras" copy="Add the finishing touches you want handled in-studio." />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {bookingExtras.map((extra) => (
                <button
                  key={extra}
                  className={`rounded-[22px] border px-5 py-4 text-left ${
                    values.extras.includes(extra)
                      ? "border-[var(--kds-accent)] bg-[var(--kds-panel-strong)]"
                      : "border-[var(--kds-border)] bg-white"
                  }`}
                  onClick={() => toggleExtra(extra)}
                  type="button"
                >
                  {extra}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {step === 5 ? (
          <div>
            <SectionHeading eyebrow="Step 5" title="Your details" copy="Enter the information KDS needs to confirm and prepare for your appointment." />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input
                className="kds-input"
                onChange={(event) =>
                  setValues((currentValues) => ({
                    ...currentValues,
                    fullName: event.target.value,
                  }))
                }
                placeholder="Full name"
                type="text"
                value={values.fullName}
              />
              <input
                className="kds-input"
                onChange={(event) =>
                  setValues((currentValues) => ({
                    ...currentValues,
                    email: event.target.value,
                  }))
                }
                placeholder="Email"
                type="email"
                value={values.email}
              />
              <input
                className="kds-input"
                onChange={(event) =>
                  setValues((currentValues) => ({
                    ...currentValues,
                    mobile: event.target.value,
                  }))
                }
                placeholder="Mobile number"
                type="tel"
                value={values.mobile}
              />
              <select className="kds-input" defaultValue={values.reminders}>
                <option>SMS + Email</option>
                <option>Email only</option>
                <option>SMS only</option>
              </select>
            </div>
            <textarea
              className="kds-input mt-4 min-h-28"
              onChange={(event) =>
                setValues((currentValues) => ({
                  ...currentValues,
                  notes: event.target.value,
                }))
              }
              placeholder="Notes or special requests"
              value={values.notes}
            />
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                {
                  label: "Are you bringing your own wig?",
                  key: "bringOwnWig" as const,
                  options: ["Yes", "No"],
                },
                {
                  label: "Would you like to purchase your wig from KDS Hair & Beauty?",
                  key: "buyFromKds" as const,
                  options: ["Yes", "No"],
                },
                {
                  label: "Does your wig require customisation?",
                  key: "requiresCustomisation" as const,
                  options: ["Yes", "No"],
                },
                {
                  label: "Would you like styling added?",
                  key: "needsStyling" as const,
                  options: ["Yes", "No"],
                },
              ].map((question) => (
                <div key={question.key} className="rounded-[22px] border border-[var(--kds-border)] bg-[var(--kds-soft-white)] p-4">
                  <p className="text-sm font-medium text-[var(--kds-ink)]">{question.label}</p>
                  <div className="mt-3 flex gap-3">
                    {question.options.map((option) => (
                      <button
                        key={option}
                        className={`rounded-full px-4 py-2 text-sm ${
                          values[question.key] === option
                            ? "bg-[var(--kds-accent)] text-white"
                            : "bg-white text-[var(--kds-muted)]"
                        }`}
                        onClick={() =>
                          setValues((currentValues) => ({
                            ...currentValues,
                            [question.key]: option,
                          }))
                        }
                        type="button"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {step === 6 ? (
          <div>
            <SectionHeading eyebrow="Step 6" title="Pay deposit or full amount" copy="Only connected payment methods should be shown on the live site." />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {["Deposit", "Full amount"].map((option) => (
                <button
                  key={option}
                  className={`rounded-[22px] border px-5 py-5 text-left ${
                    values.payment === option
                      ? "border-[var(--kds-accent)] bg-[var(--kds-panel-strong)]"
                      : "border-[var(--kds-border)] bg-white"
                  }`}
                  onClick={() =>
                    setValues((currentValues) => ({
                      ...currentValues,
                      payment: option,
                    }))
                  }
                  type="button"
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Debit / Credit Card", "Apple Pay", "Google Pay"].map((method) => (
                <InlineActionPill key={method}>
                  <PaymentBadge method={method} />
                </InlineActionPill>
              ))}
            </div>
          </div>
        ) : null}

        {step === 7 ? (
          <div>
            <SectionHeading eyebrow="Step 7" title="Agree to policy" copy="Use the legal placeholders below until the final booking policy is approved." />
            <div className="mt-6 rounded-[24px] border border-[var(--kds-border)] bg-[var(--kds-soft-white)] p-5 text-sm leading-7 text-[var(--kds-muted)]">
              Deposits, cancellation terms, late arrival rules and studio preparation guidance should be published from the editable policy pages before launch.
            </div>
            <label className="mt-5 flex items-start gap-3 text-sm text-[var(--kds-ink)]">
              <input
                checked={values.agreed}
                className="mt-1 h-4 w-4 accent-[var(--kds-accent)]"
                onChange={(event) =>
                  setValues((currentValues) => ({
                    ...currentValues,
                    agreed: event.target.checked,
                  }))
                }
                type="checkbox"
              />
              I agree to the booking, cancellation and appointment preparation policies.
            </label>
          </div>
        ) : null}

        {step === 8 ? (
          <div>
            <SectionHeading eyebrow="Step 8" title="Confirmation" copy="Your premium KDS journey is ready to be confirmed." />
            <div className="mt-6 rounded-[24px] border border-[var(--kds-border)] bg-[var(--kds-panel-strong)] p-6">
              <p className="font-display text-3xl text-[var(--kds-ink)]">{values.service}</p>
              <div className="mt-4 grid gap-3 text-sm text-[var(--kds-muted)] sm:grid-cols-2">
                <p>Date: {values.date}</p>
                <p>Time: {values.time}</p>
                <p>Guest: {values.fullName || "Add your name"}</p>
                <p>Payment: {values.payment}</p>
              </div>
              <p className="mt-5 text-sm leading-7 text-[var(--kds-muted)]">
                Confirmation email and appointment reminder flows are ready for live connection once booking and payment tools are configured.
              </p>
            </div>
          </div>
        ) : null}

        <div className="mt-8 flex flex-wrap justify-between gap-3">
          <button
            className="kds-button-secondary"
            disabled={step === 1}
            onClick={() => setStep((currentStep) => Math.max(1, currentStep - 1))}
            type="button"
          >
            Previous
          </button>
          <button
            className="kds-button-primary"
            disabled={step === 7 && !values.agreed}
            onClick={() => setStep((currentStep) => Math.min(8, currentStep + 1))}
            type="button"
          >
            {step === 8 ? "Booked" : "Continue"}
            <Icon className="h-4 w-4" name="arrow" />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <ServicePromptCard />
        <div className="kds-panel-card">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--kds-muted)]">
            Booking Summary
          </p>
          <h3 className="mt-3 font-display text-3xl text-[var(--kds-ink)]">
            Fast checkout flow.
          </h3>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--kds-muted)]">
            <li>1. Select service</li>
            <li>2. Choose date and time</li>
            <li>3. Add extras</li>
            <li>4. Enter details</li>
            <li>5. Pay deposit or full amount</li>
            <li>6. Review policy and confirm</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function HomeHero() {
  const { brandSettings } = useSiteContext();

  return (
    <section className="relative overflow-hidden bg-[var(--kds-ink)] text-[var(--kds-soft-white)]">
      <div className="absolute inset-0">
        <Image
          alt="Luxury hair model in editorial studio lighting"
          className="h-full w-full object-cover"
          fill
          priority
          sizes="100vw"
          src="https://images.pexels.com/photos/35334311/pexels-photo-35334311.jpeg?auto=compress&cs=tinysrgb&w=1800"
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(18,12,9,0.82),rgba(18,12,9,0.48),rgba(18,12,9,0.72))]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-3xl">
          <InlineActionPill>Luxury wigs • Professional studio services</InlineActionPill>
          <h1 className="mt-8 max-w-3xl font-display text-6xl leading-none sm:text-7xl">
            {brandDefaults.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[rgba(250,245,239,0.82)]">
            {brandDefaults.heroCopy}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <SectionCta href="/book-appointment" label="Book An Appointment" />
            <SectionCta href="/shop-wigs" label="Shop Wigs" variant="secondary" />
          </div>
          <p className="mt-8 text-sm uppercase tracking-[0.22em] text-[rgba(250,245,239,0.75)]">
            Based in {brandSettings.location} • UK Delivery Available
          </p>
        </div>
      </div>
    </section>
  );
}

function HomePathways() {
  return (
    <section className="kds-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          centered
          eyebrow="Choose Your KDS Experience"
          title="Book in. Shop out."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {[
            {
              title: "Ready For Your KDS Transformation?",
              copy: "Book professional installations, styling and specialist hair services.",
              cta: "Book Your Appointment",
              href: "/book-appointment",
              image:
                "/kds-products/lori-1.jpg",
            },
            {
              title: "Meet Your Next Favourite Wig",
              copy: "Discover premium wigs designed for effortless confidence and beautiful everyday wear.",
              cta: "Shop KDS Wigs",
              href: "/shop-wigs",
              image:
                "/kds-products/janelle-1.jpg",
            },
          ].map((pathway) => (
            <article
              key={pathway.title}
              className="group relative overflow-hidden rounded-[36px] bg-[var(--kds-panel)]"
            >
              <div className="relative aspect-[1.08]">
                <Image
                  alt={pathway.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src={pathway.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(19,13,9,0.82)] via-[rgba(19,13,9,0.2)] to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgba(250,245,239,0.74)]">
                  {pathway.href === "/book-appointment" ? "Get Your Hair Done" : "Find Your Perfect Wig"}
                </p>
                <h3 className="mt-3 font-display text-4xl leading-tight">{pathway.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-[rgba(250,245,239,0.78)]">
                  {pathway.copy}
                </p>
                <div className="mt-6">
                  <SectionCta href={pathway.href} label={pathway.cta} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageContent() {
  return (
    <>
      <HomeHero />
      <HomePathways />

      <section className="kds-section bg-[var(--kds-soft-white)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="The KDS Edit"
              title="Best-selling wigs, ready to shop."
            />
            <SectionCta href="/shop-wigs" label="Shop All Wigs" variant="secondary" />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="kds-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Services"
              title="Appointments that finish clean."
            />
            <SectionCta href="/services" label="View Services" variant="secondary" />
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

   

      <section className="kds-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Find Your KDS Look"
              title="Shop by collection, mood and finish."
            />
            <SectionCta href="/collections" label="View Collections" variant="secondary" />
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {collections.slice(0, 6).map((collection) => (
              <Link href="/collections" key={collection.slug}>
                <CollectionCard {...collection} />
              </Link>
            ))}
          </div>
        </div>
      </section>



      <section className="kds-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="KDS Best Sellers" title="Scroll the styles clients keep coming back for." />
            <SectionCta href="/shop-wigs" label="Shop Best Sellers" variant="secondary" />
          </div>
          <div className="mt-10 flex snap-x gap-6 overflow-x-auto pb-4">
            {products.slice(0, 6).map((product) => (
              <div className="min-w-[285px] snap-start sm:min-w-[340px]" key={product.slug}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="kds-section bg-[var(--kds-soft-white)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Client Reviews"
              title="What clients say."
            />
            <SectionCta href="/contact" label="Join Our Happy Clients" />
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
        </div>
      </section>

      <section className="kds-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <WigFinderQuiz />
        </div>
      </section>


      <section className="kds-section">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[40px] bg-[var(--kds-ink)] px-6 py-12 text-center text-[var(--kds-soft-white)] sm:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[rgba(250,245,239,0.66)]">
              Join The KDS List
            </p>
            <h2 className="mt-4 font-display text-5xl leading-none">
              Restocks, new wigs and appointment drops.
            </h2>
            <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-[1fr_1fr_auto]">
              <input className="kds-input bg-white text-[var(--kds-ink)]" placeholder="First name" type="text" />
              <input className="kds-input bg-white text-[var(--kds-ink)]" placeholder="Email" type="email" />
              <button className="kds-button-primary justify-center" type="button">
                Join The List
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function HomePage() {
  return <HomepageContent />;
}

export function BookAppointmentPage() {
  return (
    <>
      <PageHero
        actions={
          <>
            <SectionCta href="/shop-wigs" label="Shop Wigs For My Appointment" variant="secondary" />
            <SectionCta href="/services" label="View Services" />
          </>
        }
        copy="Move from booking to confirmation in a clean, mobile-first flow that naturally recommends the right wig and styling extras."
        eyebrow="Book Appointment"
        title="Your transformation starts with a seamless booking journey."
      />
      <section className="kds-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BookingFlow />
        </div>
      </section>
    </>
  );
}

export function ServicesPage() {
  return (
    <>
      <PageHero
        actions={<SectionCta href="/book-appointment" label="Book Your Transformation" />}
        copy="Premium services built around polished installs, beautiful styling and the KDS finish."
        eyebrow="Services"
        title="Professional hair appointments, designed to feel elevated."
      />
      <section className="kds-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
      <section className="kds-section bg-[var(--kds-soft-white)]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <ServicePromptCard />
          <div className="kds-panel-card">
            <SectionHeading
              eyebrow="Custom Wig Service"
              title="From consultation to finished look."
              copy="Ideal for clients who want help choosing, customising and installing the complete KDS look."
            />
            <div className="mt-6">
              <SectionCta href="/contact" label="Contact KDS" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function ShopWigsPage() {
  const { recentlyViewed } = useSiteContext();
  const [collectionFilter, setCollectionFilter] = useState("All");
  const [textureFilter, setTextureFilter] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const collectionMatch =
        collectionFilter === "All" || product.collection === collectionFilter;
      const textureMatch =
        textureFilter === "All" || product.texture.toLowerCase().includes(textureFilter.toLowerCase());

      return collectionMatch && textureMatch;
    });
  }, [collectionFilter, textureFilter]);

  const recentlyViewedProducts = recentlyViewed
    .map((slug) => products.find((product) => product.slug === slug))
    .filter(Boolean) as Product[];

  return (
    <>
      <PageHero
        actions={
          <>
            <SectionCta href="/collections" label="Shop Collections" variant="secondary" />
            <SectionCta href="/book-appointment" label="Book Installation" />
          </>
        }
        copy="Luxury wigs with fast filters and easy install booking."
        eyebrow="Shop Wigs"
        title="Meet your next favourite wig."
      />
      <section className="kds-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr]">
            <div className="kds-panel-card h-fit">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--kds-muted)]">
                Filter
              </p>
              <div className="mt-5">
                <p className="text-sm font-medium text-[var(--kds-ink)]">Collection</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {["All", ...allProductCollections].map((option) => (
                    <button
                      key={option}
                      className={`rounded-full px-4 py-2 text-sm ${
                        collectionFilter === option
                          ? "bg-[var(--kds-accent)] text-white"
                          : "bg-[var(--kds-panel)] text-[var(--kds-muted)]"
                      }`}
                      onClick={() => setCollectionFilter(option)}
                      type="button"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm font-medium text-[var(--kds-ink)]">Texture</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {["All", "Straight", "Body", "Curly"].map((option) => (
                    <button
                      key={option}
                      className={`rounded-full px-4 py-2 text-sm ${
                        textureFilter === option
                          ? "bg-[var(--kds-accent)] text-white"
                          : "bg-[var(--kds-panel)] text-[var(--kds-muted)]"
                      }`}
                      onClick={() => setTextureFilter(option)}
                      type="button"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <InstallationPromptCard />
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between rounded-[28px] border border-[var(--kds-border)] bg-white px-5 py-4 text-sm text-[var(--kds-muted)]">
                <span>{filteredProducts.length} styles shown</span>
                <span>Book an install from any wig page</span>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {recentlyViewedProducts.length > 0 ? (
        <section className="kds-section bg-[var(--kds-soft-white)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Recently Viewed" title="Pick up where you left off." />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {recentlyViewedProducts.slice(0, 3).map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

export function ProductPage({ product }: { product: Product }) {
  const { addToCart, trackViewed } = useSiteContext();
  const [activeImage, setActiveImage] = useState(product.gallery[0]);
  const relatedProducts = getRelatedProducts(product);

  useEffect(() => {
    trackViewed(product.slug);
  }, [product.slug, trackViewed]);

  return (
    <>
      <section className="kds-section pt-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="space-y-4">
            <div className="relative aspect-[0.92] overflow-hidden rounded-[38px] bg-[var(--kds-panel)]">
              <Image
                alt={product.imageAlt}
                className="h-full w-full object-cover"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                src={activeImage}
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.gallery.map((image) => (
                <button
                  key={image}
                  className={`relative aspect-square overflow-hidden rounded-[24px] border ${
                    activeImage === image
                      ? "border-[var(--kds-accent)]"
                      : "border-[var(--kds-border)]"
                  }`}
                  onClick={() => setActiveImage(image)}
                  type="button"
                >
                  <Image
                    alt={`${product.name} gallery image`}
                    className="h-full w-full object-cover"
                    fill
                    sizes="25vw"
                    src={image}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-40 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--kds-muted)]">
              {product.collection}
            </p>
            <h1 className="mt-4 font-display text-5xl leading-none text-[var(--kds-ink)]">
              {product.name}
            </h1>
            <div className="mt-4 flex items-center gap-3 text-sm text-[var(--kds-muted)]">
              <Stars rating={product.rating} />
              <span>
                {product.reviewCount} reviews
              </span>
            </div>
            <p className="mt-5 text-xl font-semibold text-[var(--kds-ink)]">{product.priceLabel}</p>
            <p className="mt-5 text-base leading-8 text-[var(--kds-muted)]">{product.description}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Length", product.length],
                ["Density", product.density],
                ["Lace", product.lace],
                ["Colour", product.color],
                ["Cap Size", product.cap],
              ].map(([label, value]) => (
                <div key={String(label)} className="rounded-[22px] border border-[var(--kds-border)] bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--kds-muted)]">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-[var(--kds-ink)]">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <button
                className="kds-button-primary justify-center"
                onClick={() => addToCart(product.slug)}
                type="button"
              >
                Add To Bag
              </button>
              <Link className="kds-button-secondary justify-center" href="/book-appointment">
                Book An Installation
              </Link>
              <button className="rounded-full border border-[var(--kds-border)] px-6 py-4 text-sm text-[var(--kds-muted)] transition-colors hover:text-[var(--kds-ink)]" type="button">
                Get restock alerts
              </button>
            </div>

            <div className="mt-8 grid gap-4">
              {[
                ["About This Wig", product.bestFor],
                ["Hair Details", product.details.join(" • ")],
                ["Lace & Cap Information", `${product.lace} • ${product.cap}`],
                ["What’s Included", product.included.join(" • ")],
                ["Wig Care", product.care.join(" • ")],
                ["Delivery", product.delivery],
                ["Returns", product.returns],
              ].map(([label, content]) => (
                <div key={String(label)} className="rounded-[22px] border border-[var(--kds-border)] bg-[var(--kds-soft-white)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--kds-muted)]">
                    {label}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--kds-muted)]">{content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="kds-section bg-[var(--kds-soft-white)]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <InstallationPromptCard />
          <div className="kds-panel-card">
            <SectionHeading
              eyebrow="Complete Your KDS Look"
              title="Add the install."
            />
            <div className="mt-6 space-y-3 text-sm leading-7 text-[var(--kds-muted)]">
              <p>Wig customisation</p>
              <p>Installation appointment</p>
              <p>Styling finish</p>
              <p>Wig cap and care products</p>
            </div>
          </div>
        </div>
      </section>

      <section className="kds-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="You May Also Love" title="More premium wigs matched to this finish." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.slug} product={relatedProduct} />
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

export function CollectionsPage() {
  return (
    <>
      <PageHero
        actions={<SectionCta href="/shop-wigs" label="Shop All Wigs" />}
        copy="Collection-led browsing helps clients move from inspiration to purchase quickly."
        eyebrow="Collections"
        title="Find your KDS look by texture, finish and mood."
      />
      <section className="kds-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {collections.map((collection) => (
              <CollectionCard key={collection.slug} {...collection} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function GalleryPage() {
  const filters = ["All", "Wig Installations", "Custom Wigs", "Straight", "Curly", "Colour", "Client Transformations"];
  const [activeFilter, setActiveFilter] = useState("All");

  const galleryItems = [
    ...transformations.map((item) => ({
      title: item.name,
      category: item.category,
      image: item.after,
      imageAlt: item.afterAlt,
    })),
    ...collections.slice(0, 4).map((collection) => ({
      title: collection.title,
      category: collection.title.includes("Curly")
        ? "Curly"
        : collection.title.includes("Coloured")
          ? "Colour"
          : "Straight",
      image: collection.image,
      imageAlt: collection.imageAlt,
    })),
  ];

  const visibleItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category.includes(activeFilter));

  return (
    <>
      <PageHero
        actions={<SectionCta href="/book-appointment" label="Book This Look" />}
        copy="A visual portfolio built for reels, installs, custom wigs and premium transformations."
        eyebrow="KDS Looks"
        title="A gallery designed to inspire the next appointment or purchase."
      />
      <section className="kds-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`rounded-full px-4 py-2 text-sm ${
                  activeFilter === filter
                    ? "bg-[var(--kds-accent)] text-white"
                    : "bg-white text-[var(--kds-muted)]"
                }`}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleItems.map((item) => (
              <article key={`${item.title}-${item.category}`} className="overflow-hidden rounded-[32px] bg-white">
                <div className="relative aspect-[0.95]">
                  <Image
                    alt={item.imageAlt}
                    className="h-full w-full object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    src={item.image}
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--kds-muted)]">
                    {item.category}
                  </p>
                  <h3 className="mt-2 font-display text-3xl text-[var(--kds-ink)]">{item.title}</h3>
                  <div className="mt-5">
                    <SectionCta href="/book-appointment" label="Book This Look" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <PageHero
        actions={<SectionCta href="/contact" label="Contact KDS" />}
        copy="This editorial page is ready for the real founder story, expertise and philosophy once KDS supplies the final brand narrative."
        eyebrow="About KDS"
        title="More than hair. It’s the confidence that comes with it."
      />
      <section className="kds-section">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="kds-panel-card">
            <SectionHeading
              eyebrow="Founder Story"
              title="Tell the real KDS journey here."
              copy="Use this space for the founder story, why KDS was created and the emotional reason the brand exists. Leave as a placeholder until the authentic narrative is supplied."
            />
          </div>
          <div className="kds-panel-card bg-[var(--kds-panel-strong)]">
            <SectionHeading
              eyebrow="Brand Philosophy"
              title="Luxury hair with warmth, professionalism and confidence at the centre."
              copy="This section is ready for expertise, client experience, commitment to quality and the long-term vision for KDS Hair & Beauty."
            />
          </div>
        </div>
      </section>
      <section className="kds-section bg-[var(--kds-soft-white)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Founder story placeholder",
              "Why KDS was created",
              "Client experience and expertise",
              "Vision for the brand",
            ].map((item) => (
              <div key={item} className="kds-panel-card bg-white">
                <h3 className="font-display text-3xl text-[var(--kds-ink)]">{item}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--kds-muted)]">
                  Replace this premium placeholder copy with authentic KDS storytelling before launch.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function FaqPage() {
  return (
    <>
      <PageHero
        actions={<SectionCta href="/contact" label="Contact KDS" />}
        copy="Elegant, conversion-friendly FAQs close friction near booking and checkout."
        eyebrow="FAQ"
        title="Clear answers for appointments, wigs and what to expect."
      />
      <section className="kds-section">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FaqAccordion categories={faqCategories} />
        </div>
      </section>
    </>
  );
}

export function ContactPage() {
  const { brandSettings } = useSiteContext();

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk hair."
        copy="Contact flow, social touchpoints and studio information designed for enquiries from Google, Instagram, TikTok and WhatsApp."
      />
      <section className="kds-section">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="space-y-5">
            <div className="kds-panel-card">
              <h2 className="font-display text-3xl text-[var(--kds-ink)]">Contact details</h2>
              <div className="mt-5 space-y-3 text-sm leading-7 text-[var(--kds-muted)]">
                <p>Email: [INSERT EMAIL]</p>
                <p>Phone: [INSERT PHONE]</p>
                <p>WhatsApp: [ADD IF OFFERED]</p>
                <p>Instagram: [CONNECT HANDLE]</p>
                <p>TikTok: [CONNECT HANDLE]</p>
                <p>Opening hours: [INSERT HOURS]</p>
                <p>Studio location: {brandSettings.location}</p>
              </div>
            </div>
            <div className="kds-panel-card bg-[var(--kds-panel-strong)]">
              <h2 className="font-display text-3xl text-[var(--kds-ink)]">Studio map</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--kds-muted)]">
                Add the real map embed or location link once the final studio address is confirmed.
              </p>
              <div className="mt-5 rounded-[28px] border border-dashed border-[var(--kds-border)] bg-white p-10 text-center text-sm text-[var(--kds-muted)]">
                Interactive map placeholder
              </div>
            </div>
          </div>
          <div className="kds-panel-card">
            <h2 className="font-display text-4xl text-[var(--kds-ink)]">Send KDS a message</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input className="kds-input" placeholder="Name" type="text" />
              <input className="kds-input" placeholder="Email" type="email" />
              <input className="kds-input" placeholder="Phone" type="tel" />
              <input className="kds-input" placeholder="What can we help with?" type="text" />
            </div>
            <textarea className="kds-input mt-4 min-h-40" placeholder="Message" />
            <div className="mt-6">
              <button className="kds-button-primary" type="button">
                Contact KDS
                <Icon className="h-4 w-4" name="arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function MyKdsPage() {
  const { wishlist } = useSiteContext();
  const savedProducts = products.filter((product) => wishlist.includes(product.slug));

  return (
    <>
      <PageHero
        eyebrow="My KDS"
        title="Orders, appointments and saved favourites in one place."
        copy="A luxury customer portal for rebooking, reordering and keeping favourite wigs close."
      />
      <section className="kds-section">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="space-y-6">
            <div className="kds-panel-card">
              <h2 className="font-display text-3xl text-[var(--kds-ink)]">Upcoming appointments</h2>
              <div className="mt-5 space-y-4">
                {accountAppointments.map((appointment) => (
                  <div key={appointment.id} className="rounded-[22px] border border-[var(--kds-border)] bg-white p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--kds-muted)]">
                      {appointment.id}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-[var(--kds-ink)]">
                      {appointment.item}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--kds-muted)]">{appointment.status}</p>
                    <div className="mt-4">
                      <SectionCta href="/book-appointment" label={appointment.action} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="kds-panel-card">
              <h2 className="font-display text-3xl text-[var(--kds-ink)]">Orders</h2>
              <div className="mt-5 space-y-4">
                {accountOrders.map((order) => (
                  <div key={order.id} className="rounded-[22px] border border-[var(--kds-border)] bg-white p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--kds-muted)]">
                      {order.id}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-[var(--kds-ink)]">{order.item}</h3>
                    <p className="mt-2 text-sm text-[var(--kds-muted)]">{order.status}</p>
                    <div className="mt-4">
                      <SectionCta href="/shop-wigs" label={order.action} variant="secondary" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="kds-panel-card">
              <h2 className="font-display text-3xl text-[var(--kds-ink)]">Saved wigs</h2>
              {savedProducts.length > 0 ? (
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  {savedProducts.map((product) => (
                    <ProductCard compact key={product.slug} product={product} />
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-sm leading-7 text-[var(--kds-muted)]">
                  Wishlist items appear here after a client saves them from the shop.
                </p>
              )}
            </div>
            <div className="kds-panel-card bg-[var(--kds-panel-strong)]">
              <h2 className="font-display text-3xl text-[var(--kds-ink)]">Addresses & account details</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--kds-muted)]">
                Add editable account details, saved addresses and future loyalty or membership features here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function BagPage() {
  const { cart, removeFromCart, updateCartQuantity } = useSiteContext();
  const cartItems = cart
    .map((item) => ({
      ...item,
      product: products.find((product) => product.slug === item.slug),
    }))
    .filter((item) => item.product) as { slug: string; quantity: number; product: Product }[];
  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  return (
    <>
      <PageHero
        eyebrow="Shopping Bag"
        title="Everything you need for the KDS finish."
        copy="Slide-out bag and full cart experience are both ready for upsells, secure checkout and client reassurance."
      />
      <section className="kds-section">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.38fr] lg:px-8">
          <div className="space-y-4">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.slug} className="kds-panel-card">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-3xl text-[var(--kds-ink)]">
                        {item.product.name}
                      </p>
                      <p className="mt-2 text-sm text-[var(--kds-muted)]">
                        {item.product.length} • {item.product.texture} • {item.product.lace}
                      </p>
                      <p className="mt-2 text-sm font-medium text-[var(--kds-ink)]">
                        {item.product.priceLabel}
                      </p>
                    </div>
                    <button
                      className="text-sm text-[var(--kds-muted)] hover:text-[var(--kds-ink)]"
                      onClick={() => removeFromCart(item.slug)}
                      type="button"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-5 inline-flex items-center rounded-full border border-[var(--kds-border)] px-2 py-1">
                    <button
                      className="h-8 w-8 text-lg"
                      onClick={() => updateCartQuantity(item.slug, item.quantity - 1)}
                      type="button"
                    >
                      -
                    </button>
                    <span className="min-w-10 text-center">{item.quantity}</span>
                    <button
                      className="h-8 w-8 text-lg"
                      onClick={() => updateCartQuantity(item.slug, item.quantity + 1)}
                      type="button"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="kds-panel-card">
                <p className="font-display text-3xl text-[var(--kds-ink)]">Your bag is empty.</p>
                <p className="mt-4 text-sm leading-7 text-[var(--kds-muted)]">
                  Start with the KDS Edit or browse collections to build your look.
                </p>
              </div>
            )}
          </div>
          <div className="space-y-5 lg:sticky lg:top-40 lg:self-start">
            <div className="kds-panel-card">
              <h2 className="font-display text-3xl text-[var(--kds-ink)]">Summary</h2>
              <div className="mt-5 space-y-3 text-sm text-[var(--kds-muted)]">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Delivery</span>
                  <span>From £4.95</span>
                </div>
              </div>
              <div className="mt-6">
                <SectionCta href="/checkout" label="Secure Checkout" />
              </div>
            </div>
            <div className="kds-panel-card bg-[var(--kds-panel-strong)]">
              <h2 className="font-display text-3xl text-[var(--kds-ink)]">Recommended add-ons</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--kds-muted)]">
                Wig customisation, installation, styling and hair-care products can be recommended here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function CheckoutPage() {
  const { cart } = useSiteContext();
  const cartItems = cart
    .map((item) => ({
      ...item,
      product: products.find((product) => product.slug === item.slug),
    }))
    .filter((item) => item.product) as { slug: string; quantity: number; product: Product }[];
  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );
  const delivery = subtotal >= 250 ? 0 : 4.95;
  const total = subtotal + delivery;

  return (
    <>
      <PageHero
        eyebrow="Checkout"
        title="Simple, polished and built for conversion."
        copy="Fast guest checkout in GBP."
      />
      <section className="kds-section">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.38fr] lg:px-8">
          <div className="kds-panel-card">
            <div className="flex flex-wrap gap-3">
              {["Guest Checkout", "My KDS Account"].map((option, index) => (
                <button
                  className={`rounded-full px-4 py-2 text-sm ${
                    index === 0
                      ? "bg-[var(--kds-accent)] text-white"
                      : "bg-[var(--kds-panel)] text-[var(--kds-muted)]"
                  }`}
                  key={option}
                  type="button"
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input className="kds-input" placeholder="First name" type="text" />
              <input className="kds-input" placeholder="Last name" type="text" />
              <input className="kds-input" placeholder="Email" type="email" />
              <input className="kds-input" placeholder="Mobile number" type="tel" />
              <input className="kds-input sm:col-span-2" placeholder="Address line 1" type="text" />
              <input className="kds-input" placeholder="Town / City" type="text" />
              <input className="kds-input" placeholder="County" type="text" />
              <input className="kds-input" placeholder="Postcode" type="text" />
              <input className="kds-input" placeholder="Country" type="text" value="United Kingdom" readOnly />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Debit / Credit Card", "Apple Pay", "Google Pay"].map((method) => (
                <InlineActionPill key={method}>
                  <PaymentBadge method={method} />
                </InlineActionPill>
              ))}
            </div>
          </div>
          <div className="space-y-5 lg:sticky lg:top-40 lg:self-start">
            <div className="kds-panel-card">
              <h2 className="font-display text-3xl text-[var(--kds-ink)]">Order summary</h2>
              <div className="mt-5 space-y-3 text-sm text-[var(--kds-muted)]">
                <div className="flex items-center justify-between">
                  <span>Items</span>
                  <span>{cartItems.reduce((count, item) => count + item.quantity, 0)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Delivery</span>
                  <span>{delivery === 0 ? "Free" : formatPrice(delivery)}</span>
                </div>
                <div className="flex items-center justify-between border-t border-[var(--kds-border)] pt-3 font-medium text-[var(--kds-ink)]">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </div>
            <div className="kds-panel-card bg-[var(--kds-panel-strong)]">
              <h2 className="font-display text-3xl text-[var(--kds-ink)]">Secure checkout</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--kds-muted)]">
                Use live card, Apple Pay and Google Pay integrations here when payment providers are connected.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function AdminPage() {
  const { brandSettings, updateBrandSettings } = useSiteContext();
  const [announcementDraft, setAnnouncementDraft] = useState(brandSettings.announcement);
  const [locationDraft, setLocationDraft] = useState(brandSettings.location);

  return (
    <>
      <PageHero
        eyebrow="Admin Dashboard"
        title="A friendly place to manage the KDS brand."
        copy="This lightweight dashboard includes editable brand settings plus clear sections for appointments, store, website and marketing management."
      />
      <section className="kds-section">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="space-y-6">
            <div className="kds-panel-card">
              <h2 className="font-display text-3xl text-[var(--kds-ink)]">Live homepage settings</h2>
              <div className="mt-6 space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--kds-ink)]">
                    Announcement bar
                  </label>
                  <input
                    className="kds-input"
                    onChange={(event) => setAnnouncementDraft(event.target.value)}
                    type="text"
                    value={announcementDraft}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--kds-ink)]">
                    Studio location
                  </label>
                  <input
                    className="kds-input"
                    onChange={(event) => setLocationDraft(event.target.value)}
                    type="text"
                    value={locationDraft}
                  />
                </div>
                <button
                  className="kds-button-primary"
                  onClick={() =>
                    updateBrandSettings({
                      announcement: announcementDraft,
                      location: locationDraft,
                    })
                  }
                  type="button"
                >
                  Save Brand Settings
                </button>
              </div>
            </div>
            <div className="kds-panel-card bg-[var(--kds-panel-strong)]">
              <h2 className="font-display text-3xl text-[var(--kds-ink)]">Launch note</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--kds-muted)]">
                Swap stock imagery, seed review copy, placeholder policies, location, contact details and pricing with approved KDS content before publishing live.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {adminSections.map((section) => (
              <div key={section.title} className="kds-panel-card">
                <h2 className="font-display text-3xl text-[var(--kds-ink)]">{section.title}</h2>
                <div className="mt-5 flex flex-wrap gap-3">
                  {section.items.map((item) => (
                    <InlineActionPill key={item}>{item}</InlineActionPill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function PolicyPage({ policy }: { policy: Policy }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={policy.title} copy={policy.intro} />
      <section className="kds-section">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {policy.sections.map((section) => (
              <article key={section.heading} className="kds-panel-card">
                <h2 className="font-display text-3xl text-[var(--kds-ink)]">{section.heading}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--kds-muted)]">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function FallbackPolicyPage({ slug }: { slug: string }) {
  const policy = getPolicyBySlug(slug) ?? policies[0];
  return <PolicyPage policy={policy} />;
}
