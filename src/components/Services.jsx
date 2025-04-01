const Services = () => {
  const contents = [
    {
      title: "Serviço 01",
      text: <>Lorem ipsum dolor sit amet, consectetur adipi</>,
      icon: "servico-01.png",
    },
    {
      title: "Serviço 02",
      text: <>Lorem ipsum dolor sit amet, consectetur adipi</>,
      icon: "servico-02.png",
    },
    {
      title: "Serviço 03",
      text: <>Lorem ipsum dolor sit amet, consectetur adipi</>,
      icon: "servico-03.png",
    },
    {
      title: "Serviço 04",
      text: <>Lorem ipsum dolor sit amet, consectetur adipi</>,
      icon: "servico-04.png",
    },
  ];
  return (
    <section className="flex flex-row items-center justify-center bg-[#EBF1FC] w-screen min-h-screen">
      <div className="text-[#1D191A] w-3/4 rounded-2xl pb-10">
        <p className="text-7xl font-semibold">Serviços</p>
        <p className="my-8 text-xl my-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in.
        </p>
        <div className="flex gap-4">
          {contents.map((item, index) => (
            <div
              key={index}
              className="w-96 h-80 flex flex-col items-center justify-center text-lg font-bold  m-0 rounded-lg hover:scale-125 transition-transform duration-300"
            >
              <img
                src={`/${item.icon}`}
                alt="Ícone do serviço"
                className="w-32 h-32"
              />
              <h3 className=" font-semibold m-4 text-xl">{item.title}</h3>
              <p className="text-md font-normal">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
