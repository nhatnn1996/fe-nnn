const Title = ({ children, className }) => {
  return (
    <div>
      <div
        className={
          "text-xl uppercase rounded-[2px] bg-secondary font-semibold py-2 pr-1.5 pl-3 title shadow text-stone-700 " +
          className
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Title;
