type P = { className?: string };

export const WhatsAppIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.24 9.43-9.44 9.43zm8.03-17.46A11.27 11.27 0 0 0 12.05.72C5.8.72.7 5.8.7 12.06c0 2 .52 3.95 1.52 5.67L.6 23.28l5.68-1.49a11.3 11.3 0 0 0 5.76 1.47h.01c6.26 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.32-8.02z" />
  </svg>
);

export const InstagramIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

/**
 * Brand mark redrawn from the official Instagram avatar (bun + lightning bolt).
 * Replace with the official vector file when the brand provides one.
 */
export const BoltBun = ({ className, cut = "var(--color-tok)" }: P & { cut?: string }) => (
  <svg viewBox="0 0 120 80" className={className} aria-hidden="true">
    <path d="M10 46C10 20 32 4 60 4s50 16 50 42z" fill="currentColor" />
    <path d="M66 14 38 36h22l-8 22 30-26H60z" fill={cut} />
    <rect x="10" y="54" width="100" height="20" rx="10" fill="currentColor" />
  </svg>
);

export const Logo = ({ className }: P) => (
  <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
    <BoltBun className="h-8 w-auto" />
    <span className="font-display leading-none">
      <span className="block text-[1.35rem] font-black tracking-tight">TOK</span>
      <span className="block text-[0.7rem] font-semibold tracking-wide">burger</span>
    </span>
  </span>
);
