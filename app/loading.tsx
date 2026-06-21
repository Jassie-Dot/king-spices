export default function Loading() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#111111] px-6 text-[#FAFAFA]">
      <div className="w-full max-w-sm text-center">
        <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 shadow-[0_0_60px_rgba(212,175,55,0.18)]">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#D4AF37] border-t-transparent" />
        </div>
        <p className="font-display text-2xl font-semibold">
          Preparing the experience
        </p>
        <p className="mt-3 text-sm leading-6 text-[#FAFAFA]/62">
          King Of Spices is loading fresh visuals and menu highlights.
        </p>
      </div>
    </main>
  );
}
