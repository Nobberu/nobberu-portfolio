export default function About() {
  return (
    <div className="h-screen flex">
      <div className="w-5/12"></div>
      <div className="w-7/12 flex flex-col justify-center p-30">
        <h1 className="text-5xl mb-10">
          It's{" "}
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
          <a
            href=""
            className="absolute font-light hover:font-extrabold transition-all duration-450"
          >
            <img src="linkedin.webp" alt="" className="w-14" />
            <div className="flex justify-center items-center mt-3">
              <p>Linkedin</p>
              <img src="arrow.webp" alt="" className="w-3 h-3 ml-3" />
            </div>
          </a>
          <a
            href=""
            className="absolute left-50 font-light hover:font-extrabold transition-all duration-450"
          >
            <img src="instagram.webp" alt="" className="w-14" />
            <div className="flex justify-center items-center mt-3">
              <p>Instagram</p>
              <img src="arrow.webp" alt="" className="w-3 h-3 ml-3" />
            </div>
          </a>
          <a
            href=""
            className="absolute left-100 font-light hover:font-extrabold transition-all duration-450"
          >
            <img src="github.webp" alt="" className="w-14" />
            <div className="flex justify-center items-center mt-3">
              <p>GitHub</p>
              <img src="arrow.webp" alt="" className="w-3 h-3 ml-3" />
            </div>
          </a>
          <a
            href=""
            className="absolute left-150 font-light hover:font-extrabold transition-all duration-450"
          >
            <img src="whatsapp.webp" alt="" className="w-14" />
            <div className="flex justify-center items-center mt-3">
              <p>Whatsapp</p>
              <img src="arrow.webp" alt="" className="w-3 h-3 ml-3" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
