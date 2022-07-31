const Title = ({ children }) => {
  return (
    <div>
      <div className="text-xl font-bold p-1 pl-4 title  shadow-md text-white">{children}</div>
      <style jsx>{`
        .title{
            background: #018EB9;
        }
      `}</style>
    </div>
  );
};

export default Title;
