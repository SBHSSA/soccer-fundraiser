import Link from "next/link";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

type Player = {
  id: string;
  name: string | null;
};

export default async function PlayersPage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from("players")
    .select("id, name")
    .eq("active", true)
    .order("name", { ascending: true });

  const players = (data ?? []) as Player[];

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Saddle Brook High School
          </p>

          <h1 className="text-4xl font-bold sm:text-5xl">
            Support Our Players
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Choose a player to visit her fundraising page and help kickstart
            the season.
          </p>
        </div>

        {error ? (
          <div className="rounded-xl border border-red-400/40 bg-red-950/40 p-5 text-red-100">
            Database error: {error.message}
          </div>
        ) : players.length === 0 ? (
          <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center">
            No active players are available yet.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {players.map((player) => {
              const firstName =
                player.name?.trim().split(/\s+/)[0] || "Player";

              return (
                <Link
                  key={player.id}
                  href={`/players/${player.id}`}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:-translate-y-1 hover:border-amber-300/70 hover:bg-white/10"
                >
                  <div className="flex h-40 items-center justify-center rounded-xl bg-slate-900 text-7xl">
                    ⚽
                  </div>

                  <h2 className="mt-5 text-center text-2xl font-bold group-hover:text-amber-300">
                    {firstName}
                  </h2>

                  <p className="mt-4 text-center font-semibold text-amber-300">
                    View fundraising page →
                  </p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}