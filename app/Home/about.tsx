import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="h-screen flex">
      <div className="w-5/12"></div>
      <div className="w-7/12 flex flex-col justify-center p-45">
        <h1 className="text-5xl mb-10">
          It's&nbsp;
          <span className="font-light hover:font-extrabold transition-all duration-450">
            Nobbel
          </span>
          .
        </h1>
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
        <div className="flex relative mt-25 gap-x-20">
          <Link
            href=""
            className="absolute font-light hover:font-extrabold transition-all duration-450"
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
            className="absolute left-50 font-light hover:font-extrabold transition-all duration-450"
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
            className="absolute left-100 font-light hover:font-extrabold transition-all duration-450"
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
            className="absolute left-150 font-light hover:font-extrabold transition-all duration-450"
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
