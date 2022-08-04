import Head from "next/head";
import Folders from "@/widgets/folders";
import axiosClient from "api-client/base/axios-client";
import { timeCache } from "@/shared/config";
import { FolderIcon, ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import InfoFile from "@/components/common/file/info";
import { useState } from "react";
import { useModal } from "hooks/use-modal";
import { useRouter } from "next/router";
import File from "@/components/common/file/card";
import { motion } from "framer-motion";
import { variantsHidden } from "@/shared/config/motion";
import Breadcrumb from "@/widgets/breadcrum";

const Library = ({ data, ...rest }) => {
  const router = useRouter();
  const list = data.data;

  const [file, setFile] = useState({});
  const [open, setOpen, toggle] = useModal();

  const folder = router.query.folder;
  const parent = list.find((item) => {
    return item.id == folder;
  });

  const listCurrent = list.filter((item) => {
    if (!folder) return !item?.attributes?.parent?.data;
    return item?.attributes?.parent?.data?.id == folder;
  });

  if (listCurrent?.length === 0 && parent?.attributes?.files?.length === 0) {
    return <div className="px-10">Không có file</div>;
  }

  const goBack = () => {
    const id = parent?.attributes?.parent?.data?.id;
    router.push(router.pathname + (id ? "?folder=" + id : ""));
  };

  return (
    <div>
      <Head>
        <title> Thư viện </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full py-4">
        <div className="my-3 ">
          <div
            className="inline-flex items-center cursor-pointer rounded-full font-bold transition-color bg-slate-100 text-slate-700 hover:text-white hover:bg-blue-400 duration-300 px-8 py-2.5 "
            onClick={goBack}
          >
            <ArrowNarrowLeftIcon className="mr-3" />
            Quay lại
          </div>
        </div>
        <motion.div
          key={router.asPath}
          variants={variantsHidden}
          initial={"initial"}
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          {listCurrent?.length > 0 && (
            <div className="text-lg font-bold mt-10">Thư mục</div>
          )}

          <div className="flex mx-[-10px]">
            {listCurrent.map((item) => (
              <Element
                key={item.id}
                data={item.attributes}
                updateFile={() => {
                  router.push(router.pathname + "?folder=" + item.id);
                }}
              />
            ))}
          </div>
          {parent?.attributes?.files.length > 0 && (
            <div className="text-lg font-bold mt-10">Tệp</div>
          )}
          <div className="flex mx-[-10px]">
            {parent?.attributes?.files.map((item) => (
              <File
                data={item}
                updateFile={() => {
                  setOpen(true);
                  setFile(item.file);
                }}
                key={"file" + item.id}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <InfoFile file={file} open={open} toggle={toggle} />
    </div>
  );
};

const Element = ({ data, updateFile }) => {
  return (
    <div
      onClick={() => {
        updateFile();
      }}
      className="flex w-[190px] bg-white flex-col items-center my-4 cursor-pointer px-10 py-6 rounded-xl border-[1px] shadow-md bg-card hover:shadow-xl transition-shadow duration-150 ease-in-out mx-[10px] "
    >
      <FolderIcon className="w-20 h-20 fill-blue-300 mb-1" />
      <div className="text-slate-600 text-xs mb-2">
        {data.files?.length} file
      </div>
      <div className="text-slate-700 font-bold text-xs">{data.title}</div>
    </div>
  );
};

export async function getStaticProps({ query, ...ctx }) {
  const data = await axiosClient(
    "/libraries?populate=files.file&populate=parent"
  );
  return {
    props: { data },
    revalidate: timeCache,
  };
}

export default Library;
