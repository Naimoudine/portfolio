import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projects() {
  return (
    <div className="flex-grow mt-8 md:mt-24">
      <section className="pb-8">
        <h1 className="text-4xl font-bold text-zinc-200 md:text-5xl">
          Projects that I built or participated in.
        </h1>
        <p className="mt-8 text-zinc-400 sm:w-[60%]">
          Here some project that I built while learning how to code. Some of
          them are personnal and others were made during my different trainings.
        </p>
        <div className="flex flex-col mt-16 gap-x-8 gap-y-16 sm:flex-row sm:flex-wrap">
          <article className="shadow-xl rounded-3xl w-full sm:max-w-[30rem] px-6 py-8 overflow-hidden">
            <span className="flex items-center gap-2 px-4 py-2 text-xs font-semibold border w-fit border-zinc-600 rounded-3xl bg-zinc-800">
              <div className="w-2 h-2 bg-orange-600 rounded-full" />
              work
            </span>
            <h2 className="mt-4 text-xl font-semibold">Origins Digital</h2>
            <p className="mt-4">
              Last group project of the training. This is a OTT freenium
              website, I participated writting code frontend and backend
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
          <article className="shadow-xl rounded-3xl w-full sm:max-w-[30rem] px-6 py-8 overflow-hidden">
            <span className="flex items-center gap-2 px-4 py-2 text-xs font-semibold border w-fit border-zinc-600 rounded-3xl bg-zinc-800">
              <div className="w-2 h-2 bg-green-600 rounded-full" />
              personnal
            </span>
            <h2 className="mt-4 text-xl font-semibold">Todo list</h2>
            <p className="mt-4">
              Client app, the goal was to learn vite and how to use pinia.
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
          <article className="shadow-xl rounded-3xl w-full sm:max-w-[30rem] px-6 py-8 overflow-hidden">
            <span className="flex items-center gap-2 px-4 py-2 text-xs font-semibold border w-fit border-zinc-600 rounded-3xl bg-zinc-800">
              <div className="w-2 h-2 bg-green-600 rounded-full" />
              personnal
            </span>
            <h2 className="mt-4 text-xl font-semibold">Ip Tracker App</h2>
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
