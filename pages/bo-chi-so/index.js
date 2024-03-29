import Head from "next/head";
import Folders from "@/widgets/folders";
import axiosClient from "api-client/base/axios-client";
import { timeCache } from "@/shared/config";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import InfoFile from "@/components/common/file/info";
import { useState } from "react";
import { useModal } from "hooks/use-modal";
import Pagination from "@/widgets/pagiantion";

const FolderPage = ({ data, ...rest }) => {
  const list = data.data;
  let size = 10;
  const [defaults, setDefault] = useState(list[0]);
  const [open, setOpen, toggle] = useModal();
  const [page, setPage] = useState(0);

  const render_list = list.slice(page * size, page * size + size);
  const total = Math.ceil(list.length / size);

  if (list.length === 0) {
    return (
      <div className="px-10">
        <img src="/images/notfound.jpg" className="w-full h-100" />
      </div>
    );
  }
  return (
    <div>
      <Head>
        <title> Danh sách cần tải </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full p-4">
        <div className=" ">
          {render_list.map((item) => (
            <Element
              key={item.id}
              data={item.attributes}
              setOpen={setOpen}
              updateFile={() => {
                setDefault(item);
              }}
            />
          ))}
        </div>
        <div className="my-5">
          <Pagination
            page={page}
            setPage={setPage}
            total={total}
            length={list.length}
            size={size}
          />
        </div>
      </div>
      <InfoFile file={defaults?.attributes?.file} open={open} toggle={toggle} />
    </div>
  );
};

const Element = ({ data, setOpen, updateFile }) => {
  return (
    <div
      onClick={() => {
        setOpen(true);
        updateFile();
      }}
      className="flex items-center my-4 cursor-pointer p-6 rounded-lg shadow bg-card hover:shadow-xl transition-shadow duration-150 ease-in-out ng-star-inserted "
    >
      <div className=" font-[600] text-slate-700 w-[80%] ">{data.title}</div>
      <div className="rounded-md bg-blue-400 ml-auto font-bold text-md text-white px-2 py-0.5">
        Docx
      </div>
      <div className="rounded-full ml-3 w-10 h-10 flex justify-center items-center bg-white shadow">
        <ArrowDownCircleIcon className="fill-gray-400" />
      </div>
    </div>
  );
};
export async function getStaticProps({ query, ...ctx }) {
  const data = await axiosClient("/set-of-indicators?populate=*");
  return {
    props: { data },
    revalidate: timeCache, // will be passed to the page component as props
  };
}

export default FolderPage;
