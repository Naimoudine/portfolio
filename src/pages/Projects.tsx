import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTitle } from "../components/hook/useTitle";

export default function Projects() {
  useTitle("Projects - Naïmoudine Saidi");

  return (
    <div className="flex-grow mt-16 md:mt-24">
      <section className="pb-8">
        <h1 className="text-4xl font-bold text-zinc-200 md:text-5xl">
          Projects that I built or participated in.
        </h1>
        <p className="mt-8 text-zinc-400">
          Here are some projects I built while learning to code. Some are
          personal, while others were created during my various training
          programs.
        </p>
        <div
          className="flex flex-col mt-16 gap-y-16 sm:grid sm:grid-cols-2"
          style={{ gap: "calc(16px + 1%)" }}
        >
          <article className="shadow-xl rounded-3xl w-full sm:max-w-[30rem] flex-1 px-6 py-8 overflow-hidden">
            <span className="flex items-center gap-2 px-4 py-2 text-xs font-semibold border w-fit border-zinc-600 rounded-3xl bg-zinc-800">
              <div className="w-2 h-2 bg-green-600 rounded-full" />
              personnal
            </span>
            <h2 className="mt-4 text-xl font-semibold">
              Subscription calendar [work in progress]
            </h2>
            <p className="mt-2 text-sm font-semibold">
              React, Tailwind, Framer-Motion
            </p>
            <p className="mt-4">
              This is a project I saw on X, and I decided to challenge myself by
              recreating it. It’s a calendar where you can input your
              subscriptions and see the cost per month.
            </p>
            <a
              className="flex items-center inline-block mt-4 font-semibold text-zinc-200"
              href="https://github.com/Naimoudine/subscription-calendar"
              target="_blank"
              rel="noopener noreferrer"
            >
              See more
              <FontAwesomeIcon className="ml-4 text-sm " icon={faArrowRight} />
            </a>
            <div className="relative w-full h-[14rem] mt-6 ">
              <div className="w-[14rem] h-[14rem] rounded-full bg-primary absolute -bottom-48 left-0 blur-[90px]" />
              <img
                className="absolute top-0 z-50 w-full h-full border rounded-3xl left-20 border-zinc-800"
                src="https://res.cloudinary.com/dcogxwg2t/image/upload/v1727644279/qa1vmeilubltbgvsdn0q.png"
                alt="screen shot project"
              />
            </div>
          </article>
          <article className="shadow-xl rounded-3xl w-full sm:max-w-[30rem] flex-1 px-6 py-8 overflow-hidden">
            <span className="flex items-center gap-2 px-4 py-2 text-xs font-semibold border w-fit border-zinc-600 rounded-3xl bg-zinc-800">
              <div className="w-2 h-2 bg-green-600 rounded-full" />
              personnal
            </span>
            <h2 className="mt-4 text-xl font-semibold">Portfolio</h2>
            <p className="mt-2 text-sm font-semibold">React, Tailwind</p>
            <p className="mt-4">Built to showcase my various projects.</p>
            <a
              className="flex items-center inline-block mt-4 font-semibold text-zinc-200"
              href="https://portfolio-19wi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              See more
              <FontAwesomeIcon className="ml-4 text-sm " icon={faArrowRight} />
            </a>
            <div className="relative w-full h-[14rem] mt-6 ">
              <div className="w-[14rem] h-[14rem] rounded-full bg-primary absolute -bottom-48 left-0 blur-[90px]" />
              <img
                className="absolute top-0 z-50 w-full h-full border rounded-3xl left-20 border-zinc-800"
                src="https://res.cloudinary.com/dcogxwg2t/image/upload/v1723231177/jsrwdwdmkvfzdxixlp1n.png"
                alt="screen shot project"
              />
            </div>
          </article>
          <article className="shadow-xl rounded-3xl w-full sm:max-w-[30rem] flex-1 px-6 py-8 overflow-hidden">
            <span className="flex items-center gap-2 px-4 py-2 text-xs font-semibold border w-fit border-zinc-600 rounded-3xl bg-zinc-800">
              <div className="w-2 h-2 bg-orange-600 rounded-full" />
              work
            </span>
            <h2 className="mt-4 text-xl font-semibold">Origins Digital</h2>
            <p className="mt-2 text-sm font-semibold">
              Harmonia, React, Tailwindcss, Express, SQL, MySQL
            </p>
            <p className="mt-4">
              Final group project of the training: This is a freemium OTT
              website where I contributed by writing both frontend and backend
              code.
            </p>
            <a
              className="flex items-center inline-block mt-4 font-semibold text-zinc-200"
              href="https://origins.valence.wilders.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              See more
              <FontAwesomeIcon className="ml-4 text-sm " icon={faArrowRight} />
            </a>
            <div className="relative w-full h-[14rem] mt-6 ">
              <div className="w-[14rem] h-[14rem] rounded-full bg-primary absolute -bottom-48 left-0 blur-[90px]" />
              <img
                className="absolute top-0 z-50 w-full h-full border rounded-3xl left-20 border-zinc-800"
                src="https://res.cloudinary.com/dcogxwg2t/image/upload/v1723160471/mjmqzewolbhhassurmky.png"
                alt="screen shot project"
              />
            </div>
          </article>
          <article className="shadow-xl rounded-3xl w-full sm:max-w-[30rem] flex-1 px-6 py-8 overflow-hidden">
            <span className="flex items-center gap-2 px-4 py-2 text-xs font-semibold border w-fit border-zinc-600 rounded-3xl bg-zinc-800">
              <div className="w-2 h-2 bg-green-600 rounded-full" />
              personnal
            </span>
            <h2 className="mt-4 text-xl font-semibold">Todo list</h2>
            <p className="mt-2 text-sm font-semibold">Vue, Tailwind</p>
            <p className="mt-4">
              Client-side project aimed at learning Vite and Pinia.
            </p>
            <a
              className="flex items-center inline-block mt-4 font-semibold text-zinc-200"
              href="https://todo-list-nine-xi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              See more
              <FontAwesomeIcon className="ml-4 text-sm " icon={faArrowRight} />
            </a>
            <div className="relative w-full h-[14rem] mt-6 ">
              <div className="w-[14rem] h-[14rem] rounded-full bg-primary absolute -bottom-48 left-0 blur-[90px]" />
              <img
                className="absolute top-0 z-50 w-full h-full border rounded-3xl left-20 border-zinc-800"
                src="https://res.cloudinary.com/dcogxwg2t/image/upload/v1723161524/jskyrenbwm1lellzataf.png"
                alt="screen shot project"
              />
            </div>
          </article>
          <article className="shadow-xl rounded-3xl w-full sm:max-w-[30rem] flex-1 px-6 py-8 overflow-hidden">
            <span className="flex items-center gap-2 px-4 py-2 text-xs font-semibold border w-fit border-zinc-600 rounded-3xl bg-zinc-800">
              <div className="w-2 h-2 bg-green-600 rounded-full" />
              personnal
            </span>
            <h2 className="mt-4 text-xl font-semibold">Ip Tracker App</h2>
            <p className="mt-2 text-sm font-semibold">Vue, API</p>
            <p className="mt-4">
              Frontend mentor challenge, use of IP Geolocalisation to get ip
              details.
            </p>
            <a
              className="flex items-center inline-block mt-4 font-semibold text-zinc-200"
              href="https://ip-tracker-app-omega.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              See more
              <FontAwesomeIcon className="ml-4 text-sm " icon={faArrowRight} />
            </a>
            <div className="relative w-full h-[14rem] mt-6 ">
              <div className="w-[14rem] h-[14rem] rounded-full bg-primary absolute -bottom-48 left-0 blur-[90px]" />
              <img
                className="absolute top-0 z-50 w-full h-full border rounded-3xl left-20 border-zinc-800"
                src="https://res.cloudinary.com/dcogxwg2t/image/upload/v1723161965/ky5k6jwosvklsgyvzee2.png"
                alt="screen shot project"
              />
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
