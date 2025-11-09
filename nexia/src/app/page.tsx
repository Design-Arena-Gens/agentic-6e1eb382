"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const services = [
  {
    title: "AI Automations",
    description:
      "Map and automate end-to-end processes with intelligent workflows, assistants, and integrations that operate 24/7.",
    icon: "⚙️",
  },
  {
    title: "Machine Learning Enhancements",
    description:
      "Deploy custom predictive models, recommendations, and scoring systems trained on your private data.",
    icon: "🧠",
  },
  {
    title: "Website Creation & Redesign",
    description:
      "Launch conversion-first websites with modern UX, performance tuning, and CMS flexibility.",
    icon: "🪄",
  },
  {
    title: "AI Callers & Messaging",
    description:
      "Human-like voice and chat agents that qualify leads, handle support, and keep pipelines warm automatically.",
    icon: "📞",
  },
  {
    title: "Dashboards & Intelligent Ops",
    description:
      "Unified analytics, KPI tracking, and AI copilots that surface the insights decision-makers need instantly.",
    icon: "📊",
  },
  {
    title: "Social & Market Management",
    description:
      "Always-on content engines, paid campaign optimization, and real-time sentiment monitoring.",
    icon: "🚀",
  },
];

const process = [
  {
    step: "01",
    title: "Discover & Align",
    description:
      "We map your current operations, data landscape, and impact goals to architect what success looks like.",
  },
  {
    step: "02",
    title: "Design & Prototype",
    description:
      "Rapidly iterate on flows, training data, and UX with working prototypes so stakeholders can interact early.",
  },
  {
    step: "03",
    title: "Build & Integrate",
    description:
      "Launch production-ready automations, ML models, and experiences wired into your existing tools and teams.",
  },
  {
    step: "04",
    title: "Scale & Evolve",
    description:
      "Measure adoption, optimize outputs, and continuously expand coverage as your business evolves.",
  },
];

const industries = [
  "Professional Services",
  "E-commerce & Retail",
  "Healthcare & Wellness",
  "Real Estate & Property",
  "SaaS & Startups",
  "Hospitality & Travel",
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-200px] right-0 h-[500px] w-[900px] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/5 backdrop-blur-md bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="text-lg font-semibold tracking-tight text-white">
            Nexia
          </span>
          <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#approach" className="transition hover:text-white">
              Approach
            </a>
            <a href="#industries" className="transition hover:text-white">
              Industries
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
          <Link
            href="#contact"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
          >
            Book a discovery call
          </Link>
        </div>
      </header>

      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-6 py-24 text-white md:gap-32 md:py-32">
        <section className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="space-y-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-200">
              Intelligent solutions from strategy to scale
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Custom AI agency delivering results from first workflow to full
              transformation.
            </h1>
            <p className="max-w-xl text-lg text-slate-200 md:text-xl">
              Nexia embeds with your team to architect bespoke automations,
              machine learning systems, and digital experiences that are wired
              to your KPIs. From lead capture to retention, we help you move
              faster, smarter, and with measurable impact.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#services"
                className="w-full rounded-full bg-cyan-500 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 sm:w-auto"
              >
                Explore our capabilities
              </Link>
              <Link
                href="#contact"
                className="w-full rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 sm:w-auto"
              >
                Build your roadmap
              </Link>
            </div>
            <div className="flex flex-col gap-4 text-sm text-slate-300 sm:flex-row sm:items-center sm:gap-8">
              <div>
                <span className="text-2xl font-semibold text-white md:text-3xl">
                  50+
                </span>{" "}
                automation playbooks deployed worldwide.
              </div>
              <div className="h-px w-full bg-white/10 sm:h-10 sm:w-px" />
              <div>
                <span className="text-2xl font-semibold text-white md:text-3xl">
                  6x
                </span>{" "}
                average ROI within the first 90 days.
              </div>
            </div>
          </div>
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-white">
                Launch your AI roadmap
              </h2>
              <p className="text-sm text-slate-200">
                We orchestrate every layer: strategy, design, engineering, and
                go-to-market. Engage a single partner that delivers the entire
                journey.
              </p>
            </div>
            <dl className="mt-8 space-y-6 text-sm">
              <div className="flex items-start gap-3">
                <dt className="mt-1 h-8 w-8 rounded-full bg-cyan-500/20 text-center text-base font-semibold text-cyan-400">
                  A
                </dt>
                <dd className="text-slate-100">
                  Automation audits revealing highest-impact opportunities in
                  days, not months.
                </dd>
              </div>
              <div className="flex items-start gap-3">
                <dt className="mt-1 h-8 w-8 rounded-full bg-cyan-500/20 text-center text-base font-semibold text-cyan-400">
                  M
                </dt>
                <dd className="text-slate-100">
                  Machine learning models tailored to your data to predict,
                  personalize, and protect revenue.
                </dd>
              </div>
              <div className="flex items-start gap-3">
                <dt className="mt-1 h-8 w-8 rounded-full bg-cyan-500/20 text-center text-base font-semibold text-cyan-400">
                  X
                </dt>
                <dd className="text-slate-100">
                  Experience design that keeps customers engaged across web,
                  voice, and messaging channels.
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="services" className="space-y-12">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Services
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Full stack delivery from ideation to market impact.
            </h2>
            <p className="max-w-3xl text-lg text-slate-200">
              Every engagement is tailored. We combine automation, data science,
              and human-centered design to launch experiences that feel personal
              and perform under pressure.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-400/60 hover:bg-white/10"
              >
                <div className="text-3xl">{service.icon}</div>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-200">
                  {service.description}
                </p>
                <div className="pointer-events-none absolute bottom-0 right-0 h-28 w-28 translate-x-14 translate-y-12 rounded-full bg-cyan-400/10 blur-2xl transition-all group-hover:translate-x-4 group-hover:translate-y-6" />
              </div>
            ))}
          </div>
        </section>

        <section
          id="approach"
          className="grid gap-10 rounded-3xl border border-white/10 bg-slate-950/40 p-10 md:grid-cols-[1fr_1.2fr]"
        >
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Our approach
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              A proven blueprint that keeps momentum high.
            </h2>
            <p className="text-lg text-slate-200">
              Nexia blends strategic consulting with hands-on execution. We work
              as an extension of your team, ensuring everyone is aligned on
              outcomes and velocity from day one.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {process.map((item) => (
              <div
                key={item.step}
                className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-200">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="industries" className="space-y-12">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Industries
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Built to flex for any business model.
            </h2>
            <p className="max-w-3xl text-lg text-slate-200">
              From emerging startups to enterprise teams, we adapt our toolkit
              to your pace, compliance requirements, and growth targets.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-sm font-medium text-slate-100 transition hover:border-cyan-300/70 hover:bg-white/10"
              >
                {industry}
              </div>
            ))}
          </div>
          <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 md:grid-cols-3">
            <div>
              <h3 className="text-2xl font-semibold text-white">90 Day Wins</h3>
              <p className="mt-2 text-sm text-slate-200">
                Launch tangible automation outcomes in under 12 weeks so
                executive teams stay invested.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">Trusted Ops</h3>
              <p className="mt-2 text-sm text-slate-200">
                Privacy-first buildouts with clear governance, auditing, and
                human-in-the-loop controls.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Ongoing Enablement
              </h3>
              <p className="mt-2 text-sm text-slate-200">
                Adoption playbooks, live trainings, and knowledge bases to keep
                your teams empowered long-term.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl border border-white/10 bg-slate-950/40 p-10 md:grid-cols-[1.1fr_1fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Proof
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Outcomes our partners rely on.
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-4xl font-semibold text-white">3.5x</p>
                <p className="mt-2 text-sm text-slate-200">
                  Faster sales cycles with AI-powered callers and automated
                  follow-up cadences.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-4xl font-semibold text-white">70%</p>
                <p className="mt-2 text-sm text-slate-200">
                  Reduction in manual data entry by deploying integrated
                  dashboards and workflow bots.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-4xl font-semibold text-white">+52%</p>
                <p className="mt-2 text-sm text-slate-200">
                  Increase in marketing-qualified leads within the first month
                  of automation launch.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-4xl font-semibold text-white">24/7</p>
                <p className="mt-2 text-sm text-slate-200">
                  Coverage across voice, chat, and email channels, ensuring no
                  customer waiting in queue.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <blockquote className="space-y-6">
              <p className="text-lg text-slate-200">
                “Nexia rebuilt our entire customer journey with AI copilots.
                Within weeks we had intelligent routing, live dashboards, and
                proactive outreach that added six figures in pipeline.”
              </p>
              <footer>
                <p className="text-sm font-semibold text-white">
                  Maya Chen · COO, Horizon Ventures
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                  Verified Client
                </p>
              </footer>
            </blockquote>
          </div>
        </section>

        <section
          id="contact"
          className="grid gap-12 rounded-3xl border border-white/10 bg-white/5 p-10 md:grid-cols-[1fr_1fr]"
        >
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Let’s build together
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Tell us about your goals and we’ll draft the first sprint plan.
            </h2>
            <p className="text-lg text-slate-200">
              Share your current challenges, desired outcomes, and timeline. A
              Nexia strategist will respond within one business day with tailored
              next steps.
            </p>
            <div className="space-y-4 text-sm text-slate-200">
              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                <a
                  href="mailto:hello@nexia.ai"
                  className="text-cyan-300 transition hover:text-cyan-200"
                >
                  hello@nexia.ai
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">Phone:</span>{" "}
                <a
                  href="tel:+13125550123"
                  className="text-cyan-300 transition hover:text-cyan-200"
                >
                  +1 (312) 555-0123
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">HQ:</span> Remote-first
                with teams in Chicago · Lisbon · Singapore
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <p className="text-2xl font-semibold text-white">
                  Thanks for reaching out!
                </p>
                <p className="mt-3 text-sm text-slate-200">
                  Our team will schedule a strategy call shortly.
                </p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="text-xs uppercase tracking-[0.25em] text-slate-300"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jane Doe"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                  />
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="text-xs uppercase tracking-[0.25em] text-slate-300"
                  >
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                  />
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="needs"
                    className="text-xs uppercase tracking-[0.25em] text-slate-300"
                  >
                    What should we build?
                  </label>
                  <textarea
                    id="needs"
                    name="needs"
                    placeholder="Share your priorities, challenges, and timeline."
                    rows={4}
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Schedule my strategy call
                </button>
                <p className="text-[11px] text-slate-400">
                  By submitting this form, you agree to receive updates about
                  Nexia solutions. We respect your inbox and only send what
                  matters.
                </p>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-xs text-slate-300 md:flex-row">
          <p>© {new Date().getFullYear()} Nexia. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#services" className="transition hover:text-white">
              Capabilities
            </Link>
            <Link href="#approach" className="transition hover:text-white">
              Methodology
            </Link>
            <Link href="#contact" className="transition hover:text-white">
              Start a project
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
