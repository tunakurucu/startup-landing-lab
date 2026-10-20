import { Button } from "@/components/Button";

// Placeholder until the real homepage is built.
export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-start justify-center gap-6 px-6">
      <p className="font-mono text-sm text-steel">grainline.example</p>
      <h1 className="text-4xl font-semibold tracking-tight">Grainline</h1>
      <p className="text-lg text-steel">Homepage coming soon.</p>
      <Button href="#" variant="primary">
        Request early access
      </Button>
    </main>
  );
}
