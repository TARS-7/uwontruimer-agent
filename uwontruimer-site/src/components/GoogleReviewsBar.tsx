const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?sa=X&sca_esv=d539714fd0df0db7&rlz=1C5CHFA_enNL1092NL1092&q=Uw+Ontruimer+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2MjG2tDQ0szQ0Nze3NDAzNzE13MDI-IpRJLRcwT-vpKg0Mze1SCEotSwztbx4EStWYQALjwNzSAAAAA&rldimm=2439916917779067451&tbm=lcl&hl=nl-NL&ved=2ahUKEwjO9c3so8qUAxWK9LsIHRHGJQMQ9fQKegQIRxAG&biw=1914&bih=961&dpr=2#lkt=LocalPoiReviews";

function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" className="flex-shrink-0">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function Stars() {
  return (
    <span className="flex gap-px" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" width="14" height="14" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

export default function GoogleReviewsBar() {
  return (
    <div className="bg-white border-b border-slate-100 py-4 px-6">
      <a
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-6 sm:gap-8 group"
        aria-label="Bekijk onze Google reviews"
      >
        {/* Links: Google logo + sterren + score */}
        <div className="flex items-center gap-2.5">
          <GoogleG />
          <div className="flex flex-col gap-0.5">
            <Stars />
            <span className="text-xs font-medium text-slate-700 group-hover:text-slate-900 transition-colors whitespace-nowrap">
              Gemiddeld 9.8 op Google
            </span>
          </div>
        </div>

        {/* Verticale scheidingslijn */}
        <div className="w-px h-8 bg-slate-200 flex-shrink-0" aria-hidden="true" />

        {/* Rechts: aantal families */}
        <div className="flex flex-col items-center">
          <span className="text-sm font-semibold text-slate-800 leading-none">2.500+</span>
          <span className="text-xs text-slate-500 mt-0.5 whitespace-nowrap">families geholpen</span>
        </div>
      </a>
    </div>
  );
}
