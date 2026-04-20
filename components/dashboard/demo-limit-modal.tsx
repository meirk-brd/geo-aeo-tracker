"use client";

import { useEffect } from "react";

type DemoLimitModalProps = {
  onClose: () => void;
};

export function DemoLimitModal({ onClose }: DemoLimitModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal panel */}
      <div
        className="relative mx-4 w-full max-w-lg rounded-2xl border border-th-border bg-th-card p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-th-text-muted transition-colors hover:text-th-text"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Icon */}
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-th-border bg-th-card-alt">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-th-text-accent"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>

        {/* Heading */}
        <h2 className="mb-2 text-xl font-semibold text-th-text">
          It&apos;s Just a Demo
        </h2>

        {/* Body */}
        <p className="mb-6 text-sm leading-relaxed text-th-text-secondary">
          You&apos;ve reached the run limit for this preview. The real power
          comes when you deploy it yourself — full access, your data, your Bright
          Data API key.
        </p>

        {/* Divider */}
        <div className="mb-6 border-t border-th-border" />

        {/* CTA buttons */}
        <div className="flex flex-col gap-3">
          {/* Primary: Sign up */}
          <a
            href="https://brightdata.com/?hs_signup=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bd-btn-primary group flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold"
          >
            Get Started with Bright Data
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>

          {/* Secondary row */}
          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              href="https://github.com/brightdata/geo-aeo-tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-th-border bg-th-card-alt px-4 py-2.5 text-sm font-medium text-th-text-secondary transition-colors hover:border-th-text-accent hover:text-th-text"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              Clone Repo
            </a>

            <a
              href="https://docs.brightdata.com/datasets/scrapers/scrapers-library/ai-scrapers"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-th-border bg-th-card-alt px-4 py-2.5 text-sm font-medium text-th-text-secondary transition-colors hover:border-th-text-accent hover:text-th-text"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              Docs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
