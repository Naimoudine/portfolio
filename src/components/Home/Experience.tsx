import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cv from "../../assets/saidi-naimoudine-cv.pdf";

export default function Experience() {
  return (
    <section className="pb-8 mt-8 md:mt-16">
      <h2 className="text-2xl font-semibold md:text-4xl">
        Experiences & formation
      </h2>
      <div className=" px-4 sm:px-8 py-4 mt-8 flex flex-col gap-4 border border-zinc-800 rounded-xl max-w-[45rem]">
        <article className="flex items-start justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              className="w-8 h-8 rounded-full"
              src="https://res.cloudinary.com/dcogxwg2t/image/upload/v1723164708/lycpd8lcn22yrkxmfqla.png"
              alt="logo wildcodeshcool"
            />
            <div>
              <h3 className="text-sm sm:text-base">
                Développeur web & web mobile
              </h3>
              <span className="text-xs text-zinc-400">Training</span>
            </div>
          </div>
          <span className="self-center text-xs sm:self-start">
            26/02/2022 - 06/12/2024
          </span>
        </article>
        <article className="flex items-start justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              className="w-8 h-8 rounded-full"
              src="https://res.cloudinary.com/dcogxwg2t/image/upload/v1723164714/k0jyjk1fpl46osnmfajp.png"
              alt="logo 3wAcademy"
            />
            <div>
              <h3 className="text-sm sm:text-base">Integrateur Développeur</h3>
              <span className="text-xs text-zinc-400">Training</span>
            </div>
          </div>
          <span className="self-center text-xs sm:self-start">
            09/2022 - 01/2023
          </span>
        </article>
        <article className="flex items-start justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              className="w-8 h-8 rounded-full"
              src="https://res.cloudinary.com/dcogxwg2t/image/upload/v1723164703/vfeop658umy1bmg3bu8d.png"
              alt="logo Université grenoble alpes"
            />
            <div>
              <h3 className="text-sm sm:text-base">
                Langues Etrangeres Appliquées
              </h3>
              <span className="text-xs text-zinc-400">Licence</span>
            </div>
          </div>
          <span className="self-center text-xs sm:self-start">2018 - 2021</span>
        </article>
        <article className="flex items-start justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              className="w-8 h-8 rounded-full"
              src="https://res.cloudinary.com/dcogxwg2t/image/upload/v1723165687/kx4slfv39phwa32x8roj.png"
              alt="logo lycée l'oiselet"
            />
            <div>
              <h3 className="text-sm sm:text-base">
                Baccalaureat Scientifique Science de l'Ingénieur
              </h3>
              <span className="text-xs text-zinc-400">Baccalaureat</span>
            </div>
          </div>
          <span className="self-center text-xs sm:self-start">2018</span>
        </article>
        <a
          className="px-4 py-2 text-center rounded-xl bg-zinc-800 text-zinc-200 hover:bg-zinc-600"
          href={cv}
          download
        >
          Download cv
          <FontAwesomeIcon className="ml-4" icon={faDownload} />
        </a>
      </div>
    </section>
  );
}
