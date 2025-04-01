const Menu = () => {
  return (
    <nav className="fixed top-0 left-0 w-full py-8 bg-[#EBF1FC] flex justify-between px-10">
      <div className="">
        <img src="/logo.png" alt="Logo" />
      </div>
      <ul
        className={`flex space-x-20 justify-center items-center flex-1 justify-center`}
      >
        <li>
          <a href="#presentation" className="text-[#101112]">
            Início
          </a>
        </li>
        <li>
          <a href="#aboutMe" className="hover:underline text-[#101112]">
            Sobre Mim
          </a>
        </li>
        <li>
          <a href="#services" className="hover:underline text-[#101112]">
            Serviços
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline text-[#101112]">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
