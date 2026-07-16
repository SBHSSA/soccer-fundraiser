import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#163A63] text-white">
      <section className="w-full">
        <Image
          src="/images/homepage-hero-final.png"
          alt="Saddle Brook High School Girls Soccer Kickstart Our Season fundraiser"
          width={1536}
          height={1024}
          priority
          className="h-auto w-full"
        />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 text-center">
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
            Choose a Player
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
    </main>
  );
}