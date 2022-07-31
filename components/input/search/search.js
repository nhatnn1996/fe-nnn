import SearchIcon from "@/components/icons/search";
const Search = () => {
  return (
    <div className="rounded relative wrap shadow-xl overflow-hidden">
      <input type="text" placeholder="Nhập nội dung tìm kiếm..." className="px-4 py-2 focus:outline-none w-full" />
      <div className="absolute icon mr-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <style jsx>{`
        .icon {
          top: 50%;
          right: 6px;
          transform: translateY(-50%);
          opacity: .7
        }
        svg:hover {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Search;
