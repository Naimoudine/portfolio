import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <>
      <section className="pb-8 mt-8 border-b border-zinc-800 md:mt-16">
        <h2 className="text-2xl font-semibold md:text-4xl">Projects</h2>
        <p className="mt-4">
          Here are some of the projects I've built or contributed to.
        </p>
        <div className="flex flex-col w-full gap-x-8 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:max-w-[60rem]">
          <div className="p-4 mt-8 border rounded-3xl border-zinc-800 h-fit w-full max-w-[25rem] max-h-[30rem] overflow-hidden md:row-span-2 md:self-center cusor-pointer">
            <span className="flex items-center gap-2 px-4 py-2 text-xs font-semibold border w-fit border-zinc-600 rounded-3xl bg-zinc-800">
              <div className="w-2 h-2 bg-orange-600 rounded-full" />
              work
            </span>
            <div className="mt-4">
              <p className="text-sm font-semibold">
                Harmonia, React, Tailwindcss, Express, SQL, MySQL
              </p>
              <h3 className="mt-2 text-xl font-semibold">Origins Digital</h3>
            </div>
            <p className="mt-4">
              Final group project of the training: This is a freemium OTT
              website where I contributed by writing both frontend and backend
              code.
            </p>
            <div className="relative w-full h-[14rem] mt-6 ">
              <div className="w-[14rem] h-[14rem] rounded-full bg-primary absolute -bottom-48 left-0 blur-[90px]" />
              <img
                className="absolute top-0 z-50 w-full h-full border rounded-3xl left-20 border-zinc-800"
                src="https://res.cloudinary.com/dcogxwg2t/image/upload/v1723160471/mjmqzewolbhhassurmky.png"
                alt="screen shot project"
              />
            </div>
          </div>
          <div className="p-4 mt-8 border rounded-3xl border-zinc-800 h-fit w-full max-w-[25rem] max-h-[30rem] overflow-hidden">
            <span className="flex items-center gap-2 px-4 py-2 text-xs font-semibold border w-fit border-zinc-600 rounded-3xl bg-zinc-800">
              <div className="w-2 h-2 bg-green-600 rounded-full" />
              personnal
            </span>
            <div className="mt-4">
              <p className="text-sm font-semibold">
                Typescript, React, Tailwindcss
              </p>
              <h3 className="mt-2 text-xl font-semibold">Portofolio</h3>
            </div>
            <p className="mt-4">Built to showcase my various projects.</p>
            <div className="relative w-full h-[14rem] mt-6 ">
              <div className="w-[14rem] h-[14rem] rounded-full bg-primary absolute -bottom-48 left-0 blur-[90px]" />
              <img
                className="absolute top-0 z-50 w-full h-full border rounded-3xl left-20 border-zinc-800"
                src="https://res.cloudinary.com/dcogxwg2t/image/upload/v1723231177/jsrwdwdmkvfzdxixlp1n.png"
                alt="screen shot project"
              />
            </div>
          </div>
          <div className="p-4 mt-8 border rounded-3xl border-zinc-800 h-fit w-full max-w-[25rem] max-h-[30rem] overflow-hidden">
            <span className="flex items-center gap-2 px-4 py-2 text-xs font-semibold border w-fit border-zinc-600 rounded-3xl bg-zinc-800">
              <div className="w-2 h-2 bg-green-600 rounded-full" />
              personnal
            </span>
            <div className="mt-4">
              <p className="text-sm font-semibold">Vite, API</p>
              <h3 className="mt-2 text-xl font-semibold">Ip Tracker App</h3>
            </div>
            <p className="mt-4">
              Frontend mentor challenge, use of IP Geolocalisation to get ip
              details.
            </p>
            <div className="relative w-full h-[14rem] mt-6 ">
              <div className="w-[14rem] h-[14rem] rounded-full bg-primary absolute -bottom-48 left-0 blur-[90px]" />
              <img
                className="absolute top-0 z-50 w-full h-full border rounded-3xl left-20 border-zinc-800"
                src="https://res.cloudinary.com/dcogxwg2t/image/upload/v1723161965/ky5k6jwosvklsgyvzee2.png"
                alt="screen shot project"
              />
            </div>
          </div>
        </div>
      </section>
      <Link
        className="inline-block mt-8 font-semibold text-zinc-300 hover:text-zinc-100"
        to="/projects"
      >
        See all projects{" "}
        <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
      </Link>
    </>
  );
}
