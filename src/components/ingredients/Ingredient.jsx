const Ingredient = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center hover:cursor-pointer space-y-5 p-5 border-[1px] hover:bg-[#FED777]/20 border-black rounded-2xl shadow-black drop-shadow-lg transition-all">
      <div className="flex items-center justify-between">
        <p className="font-bold text-xl md:text-3xl">
          {title.length > 12 ? title.slice(0, 12) + "..." : title}
        </p>
      </div>

      <img
        alt=""
        src={image}
        className="flex w-48 rounded-xl hover:opacity-90"
      />
    </div>
  );
};

export default Ingredient;
