import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex min-h-[55vh] items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-5">
        <Image
          src="/logos/solar-trade-hub-logo-dark.svg"
          alt="Solar Trade Hub"
          width={150}
          height={46}
          className="h-auto w-[145px]"
          priority
        />

        <div className="relative h-10 w-10">
          <div className="absolute inset-0 rounded-full border-[3px] border-slate-200" />

          <div className="absolute inset-0 animate-spin rounded-full border-[3px] border-transparent border-t-[#ED2436]" />
        </div>

        <p className="text-xs font-medium tracking-wide text-slate-500">
          Loading Solar Trade Hub...
        </p>
      </div>
    </div>
  );
}