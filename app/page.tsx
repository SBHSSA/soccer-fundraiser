import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#163A63] text-white">
      <section className="relative w-full">
        <Image
          src="/images/homepage-hero-final.png"
          alt="Saddle Brook High School Girls Soccer Kickstart Our Season fundraiser"
          width={1536}
          height={1024}
          priority
          className="h-auto w-full"
        />

        <div className="absolute inset-x-0 top-0 z-10 flex justify-center px-4 pt-4 sm:px-6">
          <nav className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/25 bg-[#163A63]/80 px-4 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur-sm">
            <Link href="/" className="rounded-full px-3 py-2 transition hover:bg-white/10">
              Home
            </Link>
            <Link href="/players" className="rounded-full px-3 py-2 transition hover:bg-white/10">
              Players
            </Link>
            <a href="#about" className="rounded-full px-3 py-2 transition hover:bg-white/10">
              About
            </a>
            <a href="#how-it-works" className="rounded-full px-3 py-2 transition hover:bg-white/10">
              How It Works
            </a>
            <a href="#faq" className="rounded-full px-3 py-2 transition hover:bg-white/10">
              FAQ
            </a>
            <a href="#donate" className="rounded-full px-3 py-2 transition hover:bg-white/10">
              Donate
            </a>
            <Link
              href="/players"
              className="rounded-full bg-[#f4b51f] px-4 py-2 font-bold text-[#0b2545] transition hover:scale-105"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-10 text-center">
        <h1 className="text-3xl font-bold text-[#f4b51f]">
          Support Saddle Brook Girls Soccer
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/90">
          Choose a player, leave a personalized message, and support our student
          athletes through the Kickstart Our Season fundraiser.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <Link
            href="/players"
            className="rounded-full bg-[#f4b51f] px-8 py-4 text-lg font-bold text-[#0b2545] shadow-lg transition hover:scale-105"
          >
            Get Started
          </Link>

          <a
            href="#how-it-works"
            className="rounded-full border border-[#f4b51f] px-8 py-4 text-lg font-bold text-white transition hover:bg-[#f4b51f] hover:text-[#0b2545]"
          >
            See How It Works
          </a>
        </div>
      </section>

      <section
        id="how-it-works"
        className="mx-auto grid max-w-6xl gap-6 px-6 pb-14 md:grid-cols-3"
      >
        <article className="rounded-2xl bg-white/10 p-6 text-center shadow-lg">
          <div className="text-4xl">⚽</div>
          <h2 className="mt-3 text-xl font-bold text-[#f4b51f]">
            Choose a Player
          </h2>
          <p className="mt-2 text-white/85">
            Select the student athlete you would like to support.
          </p>
        </article>

        <article className="rounded-2xl bg-white/10 p-6 text-center shadow-lg">
          <div className="text-4xl">💬</div>
          <h2 className="mt-3 text-xl font-bold text-[#f4b51f]">
            Leave a Message
          </h2>
          <p className="mt-2 text-white/85">
            Add a personal note that will appear on the player&apos;s digital
            soccer ball.
          </p>
        </article>

        <article className="rounded-2xl bg-white/10 p-6 text-center shadow-lg">
          <div className="text-4xl">💛</div>
          <h2 className="mt-3 text-xl font-bold text-[#f4b51f]">
            Make Your Donation
          </h2>
          <p className="mt-2 text-white/85">
            Follow the Zelle instructions and use the provided reference code.
          </p>
        </article>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 pb-8">
        <div className="rounded-2xl bg-white/10 p-6 text-center shadow-lg">
          <h2 className="text-xl font-bold text-[#f4b51f]">FAQ</h2>
          <p className="mt-2 text-white/85">
            More information will be shared here as the fundraiser progresses.
          </p>
        </div>
      </section>

      <section id="donate" className="mx-auto max-w-6xl px-6 pb-14">
        <div className="rounded-2xl bg-white/10 p-6 text-center shadow-lg">
          <h2 className="text-xl font-bold text-[#f4b51f]">Donate</h2>
          <p className="mt-2 text-white/85">
            Choose a player, leave a message, and follow the donation instructions to support the team.
          </p>
        </div>
      </section>
    </main>
  );
}