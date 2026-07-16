import Link from "next/link";
import { notFound } from "next/navigation";

const players = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  name: `Player ${index + 1}`,
  jersey: `#${index + 1}`,
}));

type PlayerDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function PlayerDetailPage({ params }: PlayerDetailPageProps) {
  const { id } = await params;
  const playerId = Number(id);
  const player = players.find((item) => item.id === playerId);

  if (!player) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#163A63] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-3xl font-bold text-[#f4b51f]">{player.name}</h1>
          <Link
            href="/players"
            className="rounded-full border border-[#f4b51f] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#f4b51f] hover:text-[#0b2545]"
          >
            Back to Players
          </Link>
        </div>

        <section className="rounded-[2rem] border border-white/20 bg-[#1d4b7a]/70 p-8 shadow-2xl shadow-black/20">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="flex justify-center">
              <div className="flex h-56 w-56 items-center justify-center rounded-full border-4 border-[#f4b51f] bg-white/10 text-center shadow-inner">
                <div className="text-4xl font-bold text-[#f4b51f]">⚽</div>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f4b51f]">
                  Player Number
                </p>
                <p className="mt-2 text-3xl font-semibold">{player.id}</p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f4b51f]">
                  Jersey Number
                </p>
                <p className="mt-2 text-3xl font-semibold">{player.jersey}</p>
              </div>

              <h2 className="text-2xl font-semibold text-white">
                Personalize This Player’s Ball
              </h2>

              <button
                type="button"
                disabled
                className="w-full rounded-full border border-[#f4b51f] bg-[#f4b51f]/20 px-6 py-4 text-left text-base font-semibold text-white/70"
              >
                Message and Donation Form — Coming Next
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
