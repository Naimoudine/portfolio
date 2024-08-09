import Experience from "../components/Home/Experience";
import Projects from "../components/Home/Projects";
export default function Home() {
  return (
    <div className="mt-8 md:mt-24">
      <section className="pb-8 border-b border-zinc-800">
        <h1 className="text-4xl font-bold text-zinc-200 md:text-6xl">
          Fullstack Web Developer.
        </h1>
        <p className="mt-8 text-zinc-400 sm:w-[60%]">
          Hey, I am{" "}
          <span className="text-zinc-200 text-semibold">Naïmoudine Saidi</span>,
          a fullstack developer who's aspiring on building functional website
          that are modern and easy to use based in Valence 🇫🇷.
        </p>
      </section>
      <Projects />
      <Experience />
    </div>
  );
}
