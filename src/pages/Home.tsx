import { useTitle } from "../components/hook/useTitle";
import Experience from "../components/Home/Experience";
import Projects from "../components/Home/Projects";

export default function Home() {
  useTitle("Naïmoudine Saidi");

  return (
    <div className="mt-16 md:mt-24">
      <section className="pb-8 border-b border-zinc-800">
        <h1 className="text-4xl font-bold lg:w-[80%] 2xl:w-full text-zinc-200 md:text-6xl">
          Fullsatck Developer & Web Lover.
        </h1>
        <p className="mt-8 text-zinc-400 xl:w-[80%]">
          Hey, I’m <span className="text-zinc-100">Naïmoudine Saidi</span>, a
          full-stack developer based in Valence, France 🇫🇷. I aspire to build
          modern, functional websites that are easy to use.
        </p>
      </section>
      <Projects />
      <Experience />
    </div>
  );
}
