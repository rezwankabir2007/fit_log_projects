'use client';

import Link from 'next/link';
type IconProps = { className?: string };

const ArrowLeft = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

const Home = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const Compass = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0F172A] px-6 text-white select-none">
      {/* Background Glowing Gradients */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-lime-500/10 blur-[120px] pointer-events-none" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-xl">
        {/* Animated Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#C2F800] uppercase backdrop-blur-md"
        >
          <Compass className="h-4 w-4 animate-spin-slow" />
          <span>Error 404 • Lost in Space</span>
        </div>

        {/* Glowing 404 Headline */}
        <h1
          className="mt-6 text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 sm:text-9xl"
        >
          404
        </h1>

        {/* Message */}
        <h2
          className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          Page not found
        </h2>

        <p
          className="mt-3 text-base text-slate-400 sm:text-lg"
        >
          Sorry, we couldn’t find the page you’re looking for. It might have been moved, deleted, or never existed.
        </p>

        {/* Action Buttons */}
        <div
          className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl bg-[#C2F800] px-6 py-3 text-sm font-bold text-black transition-all hover:bg-[#b0e000] hover:shadow-[0_0_20px_rgba(194,248,0,0.4)] active:scale-95"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl border border-slate-700 bg-slate-800/50 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all hover:bg-slate-800 hover:text-white active:scale-95"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}