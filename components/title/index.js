const Title = ({ children, className }) => {
  return (
    <div>
      <div
        className={
          "text-xl uppercase rounded-[2px] bg-blue-50 font-semibold py-2 pr-1.5 pl-3 title text-stone-500 " +
          className
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Title;
