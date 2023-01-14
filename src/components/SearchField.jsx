const SearchField = ({ onChanging }) => {
  return (
    <div className="pt-5">
      <input
        placeholder="search reciep"
        className="flex items-center w-full bg-transparent border-2 border-black rounded-full pl-10 py-5 text-4xl font-extralight mb-5"
        onChange={onChanging}
      />
      <hr className="border-[1px] border-black" />
    </div>
  );
};

export default SearchField;
