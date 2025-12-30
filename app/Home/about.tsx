import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="md:h-screen h-auto w-screen flex md:flex-row flex-col overflow-x-hidden">
      <div className="md:w-5/12 w-full flex flex-col justify-center p-40">
        <Image
          src="/nobbel.webp"
          alt="nobbel"
          width={403}
          height={716}
          sizes="(max-width:768px) 100vw, 33vw"
          quality={50}
          className="w-full h-auto ml-15 mt-15"
        />
      </div>
      <div className="md:w-7/12 w-full flex flex-col justify-center md:p-45 p-6">
        <h1 className="text-5xl mb-2.5">
          It&apos;s&nbsp;
          <span className="font-light hover:font-extrabold transition-all duration-450">
            Nobbel
          </span>
          .
        </h1>
        <h4 className="text-lg mb-8 italic text-neutral-400 font-light">
          &quot;I build digital experiences that look as good as they
          feel.&quot;
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae,
          esse doloribus aut rem eius quis illo deleniti nemo enim harum.
          Expedita nihil odio non iure voluptate saepe nobis adipisci eius, nam
          maxime ab eaque sit quam dolorum quo labore temporibus laudantium
          recusandae esse fugiat deserunt. Vel dignissimos nobis aperiam
          recusandae?
        </p>
        <p className="mt-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
          corporis voluptate sapiente.
        </p>
        <div className="flex flex-wrap relative mt-15 md:space-x-25 space-x-9 md:space-y-0 space-y-9">
          <Link
            href=""
            className="font-light hover:font-extrabold transition-all duration-450"
          >
            <Image
              src="/linkedin.webp"
              alt="Linkedin"
              width={56}
              height={56}
              className="w-14 h-14"
            />
            <div className="flex justify-center items-center mt-3">
              <p>Linkedin</p>
              <Image
                src="/arrow.webp"
                alt="Arrow"
                className="w-3 h-3 ml-3"
                width={12}
                height={12}
              />
            </div>
          </Link>
          <Link
            href=""
            className="font-light hover:font-extrabold transition-all duration-450"
          >
            <Image
              src="/instagram.webp"
              alt="Instagram"
              width={56}
              height={56}
              className="w-14 h-14"
            />
            <div className="flex justify-center items-center mt-3">
              <p>Instagram</p>
              <Image
                src="/arrow.webp"
                alt="Arrow"
                className="w-3 h-3 ml-3"
                width={12}
                height={12}
              />
            </div>
          </Link>
          <Link
            href=""
            className="font-light hover:font-extrabold transition-all duration-450"
          >
            <Image
              src="/github.webp"
              alt="GitHub"
              width={56}
              height={56}
              className="w-14 h-14"
            />
            <div className="flex justify-center items-center mt-3">
              <p>GitHub</p>
              <Image
                src="/arrow.webp"
                alt="Arrow"
                className="w-3 h-3 ml-3"
                width={12}
                height={12}
              />
            </div>
          </Link>
          <Link
            href=""
            className="font-light hover:font-extrabold transition-all duration-450"
          >
            <Image
              src="/whatsapp.webp"
              alt="WhatsApp"
              width={56}
              height={56}
              className="w-14 h-14"
            />
            <div className="flex justify-center items-center mt-3">
              <p>Whatsapp</p>
              <Image
                src="/arrow.webp"
                alt="Arrow"
                className="w-3 h-3 ml-3"
                width={12}
                height={12}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
