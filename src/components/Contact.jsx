const Contact = () => {
  return (
    <section className="flex flex-row items-center justify-center bg-[#3570AB] w-screen min-h-screen ">
      <div className="text-[#1D191A] w-3/4 rounded-2xl pb-10 ">
        <p className="text-7xl font-semibold text-white">Entre em Contato</p>
        <p className="my-8 text-xl text-white my-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in.
        </p>
        <div className="flex justify-center mt-10 hover:scale-125 transition-transform duration-300">
          <a href="https://wa.me/5511999999999" target="_blank">
            <img
              src="/whatsapp-icon.png"
              alt="WhatsApp"
              className="w-20 h-20 cursor-pointer"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Contact;
