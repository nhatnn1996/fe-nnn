const Title = ({ children }) => {
  return (
    <div>
      <div className="text-xl uppercase rounded-[2px] font-semibold p-1.5 pl-3 title shadow text-white">
        {children}
      </div>
      <style jsx>{`
        .title {
          background: #018eb9;
        }
      `}</style>
    </div>
  );
};

export default Title;
