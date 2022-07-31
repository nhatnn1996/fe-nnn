const Folder = ({ temps }) => {
  return (
    <div className="mr-6">
      <div className="title font-bold text-lg ">
        QĐ công bố Bộ chỉ số theo dõi, đánh giá nước sạch nông thôn năm 2020 và nhiệm vụ năm 2021
      </div>
      <div className="text-xs font-base mt-2"> 10.10.2020 </div>
      <div className="title font-bold text-lg py-2">File</div>
      <div className="flex flex-wrap">
        {temps.map((element) => (
          <Item key={element.id} value={element} />
        ))}
      </div>
    </div>
  );
};

export default Folder;
const Item = ({ value }) => (
  <div className="lg:w-1/2 x pr-2 flex">
    <div className="shadow-xl p-4 rounded-md flex-initial w-full flex items-align transform duration-500 transition hover:bg-blue-300 hover:scale-95 pointer">
      <div className="box icon p-2 flex items-center">
        <div className="bg-gray-100 rounded-md text-white h-10 w-10 flex items-center justify-center">
          <img src="/icons/folder.svg" alt="" width={30} height={30} />
        </div>
      </div>
      <div className="font-bold mx-3">
        <div className="text-sm">{value.name}</div>
        <div className="text-xs font-light">10.20.2020</div>
      </div>
      <div className="ml-auto flex items-center">
        <div className="box icon bg-blue-300 rounded-full shadow-xl text-white p-2 h-10 w-10">
          <img src="/icons/cloud-computing.svg" alt="" width={50} height={50} />
        </div>
      </div>
    </div>
  </div>
);
