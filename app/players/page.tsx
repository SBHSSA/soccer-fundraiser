"use client";

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
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-3xl border border-blue-200 bg-blue-50/80 p-8 shadow-sm">
          <p className="mb-2 inline-flex rounded-full bg-yellow-200 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-yellow-900">
            Saddle Brook HS Girls Soccer Fundraiser
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Choose Your Player
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-700">
            Select the player you&apos;d like to support.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {players.map((player) => (
            <div
              key={player.id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-200 text-xl font-semibold text-slate-600">
                  <span className="text-slate-500">photo</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm uppercase tracking-[0.24em] text-blue-700">Player</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">{player.name}</h2>
                <p className="mt-2 text-lg font-medium text-slate-600">Jersey {player.jersey}</p>
              </div>
              <div className="mt-8 flex justify-center">
                <button className="rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800">
                  Select Player
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
