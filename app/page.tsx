import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-[#163a63]">
      <div className="relative aspect-[3/2] w-[min(100vw,150dvh)]">
        <Image
          src="/images/homepage-hero-mobile.png"
          alt="Saddle Brook High School Girls Soccer Kickstart Our Season fundraiser"
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />

        {/* Players in top navigation */}
        <Link
          href="/players"
          aria-label="View players"
          className="absolute left-[43.5%] top-[3.5%] z-20 h-[7%] w-[8%] cursor-pointer"
        />

        {/* Top-right Get Started */}
        <Link
          href="/players"
          aria-label="Get started and choose a player"
          className="absolute left-[83%] top-[2.5%] z-20 h-[8%] w-[14%] cursor-pointer"
        />

        {/* Large Get Started button */}
        <Link
          href="/players"
          aria-label="Get started and choose a player"
          className="absolute left-[15.5%] top-[68%] z-20 h-[10%] w-[21%] cursor-pointer"
        />

        {/* Large See How It Works button */}
        <Link
          href="/players"
          aria-label="See how the fundraiser works"
          className="absolute left-[38%] top-[68%] z-20 h-[10%] w-[23%] cursor-pointer"
        />
      </div>
    </main>
  );
}