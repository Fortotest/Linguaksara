import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      <path d="M8 7h8" />
      <path d="M8 12h8" />
      <path d="M8 17h8" />
      <path d="M18 7c-2.5 1.5-2.5 4.5 0 6" />
      <path d="M6 17c2.5-1.5 2.5-4.5 0-6" />
    </svg>
  );
}
