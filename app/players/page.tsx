import Link from "next/link";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

type Player = {
  id: string;
  name: string | null;
};

function getFirstName(name: string | null) {
  return name?.trim().split(/\s+/)[0] || "Player";
}

export default async function PlayersPage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from("players")
    .select("id, name")
    .eq("active", true)
    .order("name", { ascending: true });

  const players = ((data ?? []) as Player[]).filter(
    (player) => player.id && player.id !== "undefined"
  );

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="inline-block rounded-full border border-amber-300/60 px-4 py-2 text-sm font-semibold text-amber-300"
        >
          ← Back to Home
        </Link>

        <header className="mt-8 rounded-3xl border border-amber-300/20 bg-slate-900 p-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
            Saddle Brook High School
          </p>
          <h1 className="mt-3 text-4xl font-bold">Support Our Players</h1>
          <p className="mt-3 text-slate-300">
            Choose a player to visit her fundraising page.
          </p>
        </header>

        {error ? (
          <div className="mt-8 rounded-2xl border border-red-400/40 bg-red-950/30 p-6">
            Unable to load players: {error.message}
          </div>
        ) : players.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            No active players are available yet.
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {players.map((player) => (
              <Link
                key={player.id}
                href={`/players/${player.id}`}
                className="rounded-3xl border border-amber-300/40 bg-slate-900 p-7 text-center transition hover:-translate-y-1 hover:border-amber-300"
              >
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-4 border-amber-300 text-5xl">
                  ⚽
                </div>

                <h2 className="mt-6 text-2xl font-bold">
                  {getFirstName(player.name)}
                </h2>

                <p className="mt-5 font-semibold text-amber-300">
                  View fundraising page →
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
