import Link from "next/link";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

type PlayerPageProps = {
  params: Promise<{
    id: string;
  }>;
};

function getFirstName(name: string | null) {
  return name?.trim().split(/\s+/)[0] || "Player";
}

export default async function PlayerPage({ params }: PlayerPageProps) {
  const { id } = await params;

  if (!id || id === "undefined") {
    notFound();
  }

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: player, error } = await supabase
    .from("players")
    .select("id, name")
    .eq("id", id)
    .eq("active", true)
    .maybeSingle();

  if (error) {
    return (
      <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
        <div className="mx-auto max-w-3xl rounded-2xl border border-red-400/40 bg-red-950/30 p-6">
          <h1 className="text-2xl font-bold">Unable to load this player</h1>
          <p className="mt-3 text-red-100">{error.message}</p>
          <Link
            href="/players"
            className="mt-6 inline-block font-semibold text-amber-300"
          >
            ← Return to players
          </Link>
        </div>
      </main>
    );
  }

  if (!player) {
    notFound();
  }

  const firstName = getFirstName(player.name);

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-10 text-white">
      <div className="mx-auto max-w-4xl">
        <Link href="/players" className="font-semibold text-amber-300">
          ← Return to players
        </Link>

        <section className="mt-8 rounded-3xl border border-amber-300/30 bg-slate-900 p-8 text-center">
          <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border-4 border-amber-300 text-7xl">
            ⚽
          </div>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
            Support Our Player
          </p>

          <h1 className="mt-3 text-5xl font-bold">{firstName}</h1>

          <p className="mx-auto mt-5 max-w-xl text-slate-300">
            Help support {firstName} and the Saddle Brook High School Girls
            Soccer team.
          </p>

          <button
            type="button"
            disabled
            className="mt-8 rounded-full bg-amber-300 px-7 py-3 font-bold text-slate-950 opacity-70"
          >
            Donation and Message Form — Coming Next
          </button>

          <p className="mt-3 text-xs text-slate-400">
            No payment will be collected during testing.
          </p>
        </section>
      </div>
    </main>
  );
}
