const AboutMe = () => {
  return (
    <section className="flex flex-row items-center justify-center gap-10 bg-[#3570AB] w-screen min-h-screen">
      <div>
        <img
          src="/dentista-02.jpg"
          alt="Foto de perfil"
          className="rounded-4xl"
        />
      </div>
      <div className=" text-white p-10 w-1/2">
        <p className="text-6xl font-semibold">Sobre mim</p>
        <p className="my-8 mt-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
