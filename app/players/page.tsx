import Link from "next/link";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

type PlayerPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PlayerPage({ params }: PlayerPageProps) {
  const { id } = await params;

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

  const firstName =
    player.name?.trim().split(/\s+/)[0] || "Player";

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-8 text-white sm:py-12">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/players"
          className="mb-8 inline-flex items-center font-semibold text-amber-300 hover:text-amber-200"
        >
          ← Back to all players
        </Link>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl sm:p-10">
          <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
            Saddle Brook Girls Soccer
          </p>

          <h1 className="mt-4 text-center text-4xl font-bold sm:text-5xl">
            Support {firstName}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-center leading-7 text-slate-300">
            Help {firstName} and the Saddle Brook High School Girls Soccer
            team kickstart a successful season.
          </p>

          <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-amber-300/30 bg-amber-300/5 p-7">
            <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
              Personalized Digital Soccer Ball
            </p>

            <div className="mt-6 flex justify-center">
              <div
                className="flex h-36 w-36 items-center justify-center rounded-full border-4 border-amber-300 bg-white text-7xl shadow-lg"
                aria-hidden="true"
              >
                ⚽
              </div>
            </div>

            <p className="mt-6 text-center text-sm leading-6 text-slate-300">
              Supporters will be able to add a personalized message to
              {` ${firstName}'s`} digital soccer ball.
            </p>
          </div>

          <button
            type="button"
            disabled
            className="mt-8 w-full cursor-not-allowed rounded-xl bg-amber-300 px-6 py-4 text-lg font-bold text-slate-950 opacity-70"
          >
            Donation and Message Form — Coming Next
          </button>

          <p className="mt-3 text-center text-xs text-slate-400">
            No payment will be collected during testing.
          </p>
        </section>
      </div>
    </main>
  );
}