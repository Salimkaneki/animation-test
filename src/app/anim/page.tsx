"use client"

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-2xl font-semibold">Mes animations</h1>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/hide-n-show"
            className="rounded-full border border-transparent bg-foreground text-background 
                       hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors duration-300 
                       font-medium text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8 
                       flex items-center justify-center shadow-md"
          >
            Cacher
          </Link>

          <Link
            href="/p-test"
            className="rounded-full border border-foreground text-foreground 
                       hover:bg-foreground hover:text-background 
                       dark:hover:bg-[#ccc] dark:hover:text-black 
                       transition-colors duration-300 font-medium text-sm sm:text-base 
                       h-10 sm:h-12 px-6 sm:px-8 flex items-center justify-center shadow-md"
          >
            Parallax
          </Link>

          <Link
            href="/loader"
            className="rounded-full border border-blue-500 text-blue-500 
                       hover:bg-blue-500 hover:text-white 
                       transition-colors duration-300 font-medium text-sm sm:text-base 
                       h-10 sm:h-12 px-6 sm:px-8 flex items-center justify-center shadow-md"
          >
            Loader
          </Link>

          <Link
            href="/pointer"
            className="rounded-full border border-pink-500 text-pink-500 
                       hover:bg-pink-500 hover:text-white 
                       transition-colors duration-300 font-medium text-sm sm:text-base 
                       h-10 sm:h-12 px-6 sm:px-8 flex items-center justify-center shadow-md"
          >
            Pointer
          </Link>
        </div>
      </main>
    </div>
  );
}
