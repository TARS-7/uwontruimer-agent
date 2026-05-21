"use client";
import { useState, useEffect } from "react";

const REVIEWS = [
  {
    text: "Jurriën en zijn team hebben onze moederswoning na haar overlijden volledig ontruimd. Discreet, snel en met veel respect.",
    author: "Familie De Vries",
  },
  {
    text: "Binnen 24 uur ter plaatse en de woning bezemschoon opgeleverd. Absolute aanrader.",
    author: "Notariskantoor Van Dam",
  },
  {
    text: "De AI-wizard gaf binnen 2 minuten een duidelijke prijsindicatie. Geen verrassingen achteraf.",
    author: "M. Janssen, Amsterdam",
  },
];

function Stars() {
  return (
    <span className="flex gap-px justify-center mb-2" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" width="14" height="14" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

export default function ReviewBanner() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % REVIEWS.length);
        setVisible(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const review = REVIEWS[index];

  return (
    <div className="bg-slate-50 border-b border-slate-100 py-5 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <Stars />
        <div className="min-h-[56px] flex items-center justify-center">
          <blockquote
            className="text-sm text-slate-600 italic transition-opacity duration-500"
            style={{ opacity: visible ? 1 : 0 }}
          >
            &ldquo;{review.text}&rdquo;
            <span className="not-italic font-medium text-slate-700 ml-2">— {review.author}</span>
          </blockquote>
        </div>
        <div className="flex justify-center gap-1.5 mt-3">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setVisible(false);
                setTimeout(() => { setIndex(i); setVisible(true); }, 300);
              }}
              className="w-1.5 h-1.5 rounded-full transition-colors"
              style={{ backgroundColor: i === index ? "#f59e0b" : "#e2e8f0" }}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
