const SearchField = ({ onChanging }) => {
  return (
    <div className="pt-5">
      <input
        placeholder="search reciep"
        className="flex items-center w-full bg-transparent border-2 border-black rounded-full md:pl-10 pl-5 py-5 text-xl sm:tex-2xl md:text-4xl font-extralight mb-5"
        onChange={onChanging}
      />
      <hr className="border-[1px] border-black" />
    </div>
  );
};

export default SearchField;
