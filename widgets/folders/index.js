import { url_base } from "@/shared/container/index";
import { localeTime } from "@/shared/helper/function";
import Link from "next/link";
import { useState } from "react";
import { url_api } from "@/shared/container/index";

const Folders = ({ folders }) => {
  const [active, setActive] = useState(folders[0]);
  const [temps, setTemps] = useState([]);

  if (temps.length === 0) {
    fetch(url_api + `/temps?folder=` + active._id)
      .then((response) => response.json())
      .then((data) => {
        setTemps(data);
      });
  }

  const changeAcitve = (item) => {
    return () => {
      setActive(item);
      fetch(url_api + `/temps?folder=` + item._id)
        .then((response) => response.json())
        .then((data) => {
          setTemps(data);
        });
    };
  };

  if (temps)
    return (
      <div className="flex w-full">
        <div className="w-1/3 border-r pr-2">
          {folders.map((element) => (
            <ItemFolder
              key={element.id + "folderitem"}
              value={element}
              active={active._id}
              onClick={changeAcitve(element)}
            />
          ))}
        </div>
        <div className="w-2/3 pl-2">
          {temps.map((element) => (
            <Item value={element} key={element.id + "foldet Itme lemn"} />
          ))}
        </div>
      </div>
    );
  else return null;
};

const ItemFolder = ({ value, active, onClick }) => {
  const activeClass =
    active === value._id ? "bg-blue-500 text-white shadow-2xl " : "";
  return (
    <div
      className={
        "flex items-center hover:shadow-2xl duration-300  p-3 rounded-xs transition mt-2 pointer " +
        activeClass
      }
      onClick={onClick}
    >
      <img src="/icons/folder.svg" alt="" width={30} height={30} />
      <div className="text-sm font-bold ml-3">{value.Name}</div>
    </div>
  );
};

const Item = ({ value }) => (
  <Link href={url_base + value?.file?.url}>
    <a
      target="_blank"
      rel="noreferrer"
      className="w-full x mt-2 flex flex-initial"
    >
      <div className="mr-2 w-full hover:shadow-2xl rounded-md p-4 bg-gray-100 hover:bg-blue-400 hover:scale-95 pointer hover:text-white flex items-align transform duration-500 transition">
        <div className="box icon p-2 flex items-center">
          <div className="bg-gray-100 rounded-md text-white h-10 w-10 flex items-center justify-center">
            <img src="/icons/folder.svg" alt="" width={30} height={30} />
          </div>
        </div>
        <div className="font-bold mx-3 flex flex-col justify-center	 flex-1">
          <div className="text-sm ">{value.name}</div>
          <div className="text-xs font-base ">
            {localeTime(value.published_at)}
          </div>
        </div>
        <div className="ml-auto flex items-center">
          <div className="box icon bg-blue-300 rounded-full shadow-xl text-white p-2 h-10 w-10">
            <img
              src="/icons/cloud-computing.svg"
              alt=""
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </a>
  </Link>
);

export default Folders;
