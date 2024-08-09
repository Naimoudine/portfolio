import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <>
      <section className="pb-8 mt-8 border-b border-zinc-800 md:mt-16">
        <h2 className="text-2xl font-semibold md:text-4xl">Projects</h2>
        <p className="mt-4">
          Here some of my projects that I build or that I took part in building.
        </p>
        <div className="flex flex-col w-full gap-x-8 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:max-w-[60rem] ">
          <div className="p-4 mt-8 border rounded-3xl border-zinc-800 h-fit w-full max-w-[25rem] max-h-[30rem] overflow-hidden md:row-span-2 md:self-center">
            <span className="flex items-center gap-2 px-4 py-2 text-xs font-semibold border w-fit border-zinc-600 rounded-3xl bg-zinc-800">
              <div className="w-2 h-2 bg-orange-600 rounded-full" />
              work
            </span>
            <div className="mt-4">
              <p className="text-sm">
                Harmonia, React, Tailwindcss, Express, SQL, MySQL
              </p>
              <h3 className="mt-2 text-xl font-semibold">Origins Digital</h3>
            </div>
            <p className="mt-4">
              Last group project of the training. This is a OTT freenium
              website, I participated writting code frontend and backend
            </p>
            <div className="relative w-full h-[14rem] mt-6 ">
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
            <div className="flex flex-row-reverse gap-4">
              <div className="mt-4">
                <p className="text-sm">Vite, Tailwindcss</p>
                <h3 className="mt-2 text-xl font-semibold">Todo list</h3>
                <p className="mt-4">
                  Client app, the goal was to learn vite and how to use pinia.
                </p>
              </div>
              <div
                className="relative w-full h-[14rem] mt-6 rounded-3xl border border-zinc-800"
                style={{
                  background:
                    "url('https://res.cloudinary.com/dcogxwg2t/image/upload/v1723161524/jskyrenbwm1lellzataf.png') left/cover",
                }}
              />
            </div>
          </div>
          <div className="p-4 mt-8 border rounded-3xl border-zinc-800 h-fit w-full max-w-[25rem] max-h-[30rem] overflow-hidden">
            <span className="flex items-center gap-2 px-4 py-2 text-xs font-semibold border w-fit border-zinc-600 rounded-3xl bg-zinc-800">
              <div className="w-2 h-2 bg-green-600 rounded-full" />
              personnal
            </span>
            <div className="flex flex-row-reverse gap-6">
              <div className="mt-4">
                <p className="text-sm">Vite, api</p>
                <h3 className="mt-2 text-xl font-semibold">Ip tracker</h3>
                <p className="mt-4">
                  Frontend mentor challenge, use of IP Geolocalisation to get ip
                  details.
                </p>
              </div>
              <div
                className="relative w-full h-[14rem] mt-6 rounded-3xl"
                style={{
                  background:
                    "url('https://res.cloudinary.com/dcogxwg2t/image/upload/v1723161965/ky5k6jwosvklsgyvzee2.png') center/cover",
                }}
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
