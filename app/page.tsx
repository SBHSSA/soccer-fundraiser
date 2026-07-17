import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[100dvh] w-full overflow-hidden bg-[#163a63]">
      {/* Mobile homepage */}
      <div className="relative h-[100dvh] w-full md:hidden">
        <Image
          src="/images/homepage-hero-mobile.png"
          alt="Saddle Brook High School Girls Soccer Kickstart Our Season fundraiser"
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />

        {/* Mobile top Get Started */}
        <Link
          href="/players"
          aria-label="Get started and choose a player"
          className="absolute left-[64%] top-[2.5%] z-20 h-[7%] w-[31%]"
        />

        {/* Mobile large Get Started */}
        <Link
          href="/players"
          aria-label="Get started and choose a player"
          className="absolute left-[12%] top-[59%] z-20 h-[7%] w-[76%]"
        />

        {/* Mobile See How It Works */}
        <Link
          href="/players"
          aria-label="See how the fundraiser works"
          className="absolute left-[12%] top-[67%] z-20 h-[6%] w-[76%]"
        />
      </div>

      {/* Desktop and tablet homepage */}
      <div className="relative hidden h-[100dvh] w-full md:block">
        <Image
          src="/images/homepage-hero-final.png"
          alt="Saddle Brook High School Girls Soccer Kickstart Our Season fundraiser"
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />

        {/* Desktop Players */}
        <Link
          href="/players"
          aria-label="View players"
          className="absolute left-[43.5%] top-[3.5%] z-20 h-[7%] w-[8%]"
        />

        {/* Desktop top Get Started */}
        <Link
          href="/players"
          aria-label="Get started and choose a player"
          className="absolute left-[83%] top-[2.5%] z-20 h-[8%] w-[14%]"
        />

        {/* Desktop large Get Started */}
        <Link
          href="/players"
          aria-label="Get started and choose a player"
          className="absolute left-[8%] top-[66%] z-20 h-[10%] w-[21%]"
        />

        {/* Desktop See How It Works */}
        <Link
          href="/players"
          aria-label="See how the fundraiser works"
          className="absolute left-[30%] top-[66%] z-20 h-[10%] w-[23%]"
        />
      </div>
    </main>
  );
}