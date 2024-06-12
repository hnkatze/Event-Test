import Link from "next/link";
import { SVGProps } from "react";
import { ThemeButton } from "../ui/ThemeButton";

export function Navbar() {
  return (
    <nav className="flex justify-between md:justify-start md:gap-8 lg:gap-8 pt-10 pb-10">
      <Link
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
        href="/"
      >
        <CalendarIcon className="h-6 w-6" />
        <span className="sr-only">Event App</span>
      </Link>
      <Link
        className=" rounded-2xl inline-flex h-9 w-max items-center justify-center  bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        href="/create"
      >
        Create Event
      </Link>
      <Link
        className="rounded-2xl inline-flex h-9 w-max items-center justify-center  border border-gray-200  bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
        href="/"
      >
        See All Events
      </Link>
      <ThemeButton />
    </nav>
  );
}

function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}
