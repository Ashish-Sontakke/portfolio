import About from "@/components/about";
import Contact from "@/components/contact";
import Introduction from "@/components/introduction";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="grid items-start justify-start w-full gap-4 md:grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-8 lg:p-24">
      <Introduction />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
