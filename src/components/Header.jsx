import Logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <div>
      <div>
        <img src={Logo} alt="" className="mb-5" />
        <hr className="border-[1px] border-black" />
      </div>
      <p className="font-light text-5xl sm:text-7xl py-12 px-5 md:9xl">
        Recipes for different dishes with different projects
      </p>
      <hr className="border-[1px] border-black" />
    </div>
  );
};

export default Header;
