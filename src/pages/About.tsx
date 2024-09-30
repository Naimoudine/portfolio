import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import moi from "../assets/images/moi.jpg";
import { useTitle } from "../components/hook/useTitle";

export default function About() {
  useTitle("About - Naïmoudine Saidi");

  return (
    <div className="flex flex-col mt-16 mb-16 lg:gap-24 lg:flex-row md:mb-24 md:mt-24">
      <section className="w-full pb-8 lg:w-2/3">
        <h1 className="text-4xl font-bold w-fit text-zinc-200 lg:text-4xl 2xl:text-5xl">
          Hello, I’m Naïmoudine Saidi, Full-Stack Developer
        </h1>
        <div className="flex flex-col gap-4 mt-8 text-zinc-400 sm:max-w-[80%] 2xl:text-lg ">
          <p>
            Hello, My name is Naïmoudine SAIDI, I am 24 years old, and I am
            currently training to become a fullstack developer.
          </p>
          <p>
            Since I discovered web development, it has become an integral part
            of my life, much more than just a passion. I love seeing the
            tangible results of my creations and finding innovative solutions to
            complex problems. My goal is to become a reliable developer, capable
            of delivering modern and functional websites.
          </p>
          <p>
            I am determined to hone my skills to meet expectations and bring
            real added value to every project I work on. Welcome to my
            portfolio!
          </p>
        </div>
      </section>
      <div className="flex flex-col ">
        <img
          className="hidden lg:block max-h-[18rem] w-fit rounded-3xl "
          src={moi}
          alt=""
        />
        <div className="flex items-center gap-4 py-4 mt-4">
          <a
            href="https://www.linkedin.com/in/naimoudine-saidi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="text-xl text-zinc-400 hover:text-primary"
              icon={faLinkedinIn}
            />
          </a>
          <a
            href="https://github.com/Naimoudine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="text-xl text-zinc-400 hover:text-primary"
              icon={faGithub}
            />
          </a>
          <a href="mailto:naimoudinesaidi@gmail.com" className="btn">
            <FontAwesomeIcon className="mr-4 text-zinc-400" icon={faEnvelope} />
            naimoudinesaidi@mail.com
          </a>
        </div>
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-zinc-200">Hard-skills</h2>
          <div className="flex flex-wrap gap-4 mt-6 max-w-[80%]">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
              title="Javascript"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
                width="40"
                height="40"
                alt="JavaScript"
              />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/TypeScript"
              target="_blank"
              rel="noreferrer"
              title="Typescript"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
                width="40"
                height="40"
                alt="TypeScript"
              />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
              target="_blank"
              rel="noreferrer"
              title="HTML5"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                width="40"
                height="40"
                alt="HTML5"
              />
            </a>
            <a
              href="https://www.w3.org/TR/CSS/#css"
              target="_blank"
              rel="noreferrer"
              title="CSS3"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                width="40"
                height="40"
                alt="CSS3"
              />
            </a>
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noreferrer"
              title="Bootstrap"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
                width="40"
                height="40"
                alt="Bootstrap"
              />
            </a>
            <a
              href="https://sass-lang.com/"
              target="_blank"
              rel="noreferrer"
              title="Sass"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
                width="40"
                height="40"
                alt="Sass"
              />
            </a>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noreferrer"
              title="Tailwindcss"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
                width="36"
                height="36"
                alt="TailwindCSS"
              />
            </a>
            <a
              href="https://vitejs.dev/"
              target="_blank"
              rel="noreferrer"
              title="Vitejs"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg"
                width="36"
                height="36"
                alt="Vite"
              />
            </a>
            <a
              href="https://vuejs.org/"
              target="_blank"
              rel="noreferrer"
              title="Vuejs"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg"
                width="36"
                height="36"
                alt="Vue"
              />
            </a>
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noreferrer"
              title="Reactjs"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                width="36"
                height="36"
                alt="React"
              />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
