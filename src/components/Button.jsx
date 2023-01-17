const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-transparent border-[1px] border-black rounded-full px-12 py-2 text-2xl"
    >
      {children}
    </button>
  );
};

export default Button;
