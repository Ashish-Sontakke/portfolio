import Introduction from "@/components/introduction";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Introduction />
      <ModeToggle />
    </main>
  )
}
