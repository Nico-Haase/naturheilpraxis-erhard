import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="section-space">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-border bg-white/75 p-10 text-center shadow-sm">
            <p className="mb-4 text-sm uppercase tracking-[0.24em] text-muted-foreground">
              404
            </p>
            <h1 className="text-4xl font-semibold md:text-5xl">
              Diese Seite konnte nicht gefunden werden.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Die angeforderte Seite existiert nicht oder wurde verschoben.
            </p>
            <div className="mt-8">
              <Button asChild className="rounded-full px-6">
                <Link href="/">Zur Startseite</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}