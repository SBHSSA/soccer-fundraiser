import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-[#163A63]">
      <Image
        src="/images/homepage-hero-final.png"
        alt="Saddle Brook High School Girls Soccer Kickstart Our Season fundraiser"
        width={1536}
        height={1024}
        priority
        className="h-[100dvh] w-full object-contain"
      />
    </main>
  );
}
