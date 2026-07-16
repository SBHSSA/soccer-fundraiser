import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-[#163A63]">
      <div className="relative h-[100dvh] w-full">
        <Image
          src="/images/homepage-hero-final.png"
          alt="Saddle Brook High School Girls Soccer Kickstart Our Season fundraiser"
          width={1536}
          height={1024}
          priority
          className="h-[100dvh] w-full object-contain"
        />

        <Link
          href="/players"
          aria-label="Open the players page from the top navigation item"
          className="absolute left-[12.5%] top-[2.2%] block h-[4.5%] w-[8.5%] cursor-pointer border-0 bg-transparent opacity-0"
        />
        <Link
          href="/players"
          aria-label="Open the players page from the top right Get Started button"
          className="absolute right-[9%] top-[2.2%] block h-[4.7%] w-[13.5%] cursor-pointer border-0 bg-transparent opacity-0"
        />
        <Link
          href="/players"
          aria-label="Open the players page from the large Get Started button"
          className="absolute left-[12%] top-[53%] block h-[8%] w-[24%] cursor-pointer border-0 bg-transparent opacity-0"
        />
        <Link
          href="/players"
          aria-label="Open the players page from the large See How It Works button"
          className="absolute left-[39%] top-[53%] block h-[8%] w-[24%] cursor-pointer border-0 bg-transparent opacity-0"
        />
      </div>
    </main>
  );
}
