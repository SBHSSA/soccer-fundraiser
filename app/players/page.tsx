import Link from "next/link";

const players = Array.from({ length: 20 }, (_, index) => {
  const number = index + 1;
  return {
    id: number,
    name: `Player ${number}`,
    jersey: `#${number}`,
  };
});

export default function PlayersPage() {
  return (
    <main className="min-h-screen bg-[#163A63] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="rounded-full border border-[#f4b51f] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#f4b51f] hover:text-[#0b2545]"
          >
            Back to Home
          </Link>
          <p className="rounded-full bg-[#f4b51f]/20 px-3 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-[#f4b51f]">
            Saddle Brook HS Girls Soccer Fundraiser
          </p>
        </div>

        <div className="mb-8 rounded-[2rem] border border-white/20 bg-[#1d4b7a]/70 p-8 text-center shadow-2xl shadow-black/20">
          <h1 className="text-4xl font-bold tracking-tight text-[#f4b51f] sm:text-5xl">
            Choose Your Player
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Select the student athlete you would like to support.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {players.map((player) => (
            <Link
              key={player.id}
              href={`/players/${player.id}`}
              className="overflow-hidden rounded-[1.5rem] border border-white/20 bg-[#1d4b7a]/70 p-6 text-center shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:bg-[#255d9e]"
            >
              <div className="flex items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#f4b51f] bg-white/10 text-xl font-semibold text-[#f4b51f]">
                  <span className="text-4xl">⚽</span>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm uppercase tracking-[0.24em] text-[#f4b51f]">Player</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">{player.name}</h2>
                <p className="mt-2 text-lg font-medium text-white/80">Jersey {player.jersey}</p>
              </div>
              <div className="mt-8 flex justify-center">
                <span className="rounded-full bg-[#f4b51f] px-6 py-3 text-sm font-semibold text-[#0b2545] transition hover:brightness-105">
                  Select Player
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
