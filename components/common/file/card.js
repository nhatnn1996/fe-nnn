import { TempIcon } from "@/components/icons";
import { EyeIcon } from "@heroicons/react/solid";
import React from "react";

const File = ({ data, updateFile }) => {
  const { file, files } = data;
  const infoFile = file?.data?.attributes || {};
  const tag = infoFile?.mime?.split("/")[1];
  const isImage = infoFile?.mime?.includes("image");
  const src = process.env.BASE_IMAGE + infoFile.url;

  if (isImage)
    return <Picture src={src} title={files} updateFile={updateFile} />;
  return (
    <div
      onClick={updateFile}
      className="flex bg-white w-[160px] flex-col mx-[10px] items-center my-4 cursor-pointer px-4 py-6 rounded-xl border-[1px] shadow-md bg-card hover:shadow-xl transition-shadow duration-150 ease-in-out ng-star-inserted "
    >
      <div className="px-6">
        <TempIcon className="w-16 h-16 stroke-blue-200 mb-1" />
      </div>

      <div className="text-slate-600 text-xs mb-2 text-center">
        {infoFile.mime}
      </div>
      <div className="text-slate-700 font-bold text-xs text-center">
        {files}
      </div>
    </div>
  );
};

const Picture = ({ src, updateFile, title }) => {
  return (
    <div
      onClick={() => {
        updateFile();
        // window.open(src);
      }}
      className="flex rounded overflow-hidden bg-white w-[160px] flex-col mx-[10px] items-center my-4 cursor-pointer  border-[1px]  bg-card transition-shadow duration-150 ease-in-out ng-star-inserted "
    >
      <div className="relative">
        <img
          src={src}
          width="100%"
          height={"60%"}
          style={{ objectFit: "cover" }}
          alt=""
        />
        <div className="absolute opacity-0 bg-slate-50/30  hover:opacity-100 duration-300 transition-all w-full h-full top-0 left-0 flex items-center justify-center">
          <EyeIcon className="w-6 h-6 fill-white" />
        </div>
      </div>

      <div className="px-4">
        <div className="text-slate-700 font-bold text-xs text-center p-4">
          {title}
        </div>
      </div>
    </div>
  );
};

export default File;
