import { localeTime } from "@/shared/helper/function";
import { CollectionIcon, XIcon } from "@heroicons/react/solid";
const mapName = {
  "application/zip": "zip",
};

const InfoFile = ({ file = {}, open, toggle }) => {
  const dataFile = file?.data?.attributes || {};
  const isImage = (dataFile?.mime || "").includes("image");
  const srcImage = process.env.BASE_IMAGE + dataFile.url;
  const styleModal = open ? "" : "translate-x-[100%]";
  return (
    <>
      {/* <div
        onClick={toggle}
        className={`fixed bottom-0 right-0 z-1000 w-screen h-screen  ${styleOverlay}`}
      ></div> */}
      <div
        className={`fixed border-[1px] bottom-0 right-0 z-[1001] flex flex-col transition-all duration-300  flex-auto w-[400px] p-20 md:p-8 bg-white shadow-lg rounded-l-md ${styleModal}`}
      >
        <div
          className="flex items-center justify-end"
          onClick={(event) => {
            event.stopPropagation();
            toggle();
          }}
        >
          <span className="mat-button-wrapper cursor-pointer ">
            <XIcon />
          </span>
        </div>
        <div className="aspect-w-9 aspect-h-6 mt-4">
          {!isImage && (
            <div className="flex items-center justify-center border rounded-lg bg-gray-50 dark:bg-card py-10">
              <CollectionIcon className="w-20 h-20 fill-blue-400" />
            </div>
          )}
          {isImage && (
            <img src={srcImage} width="100%" height={"60%"} style={{objectFit: "cover"}} className="rounded" alt="" />
          )}
        </div>
        <div className="flex flex-col items-start mt-8">
          <div className="text-xl font-medium">
            {dataFile.name || "Không tìm thấy file"}
          </div>
          {dataFile.mime && (
            <div className="mt-1 px-2 py-1.5 rounded text-sm font-semibold leading-5 text-white bg-blue-600">
              {mapName[dataFile.mime] || dataFile.mime || "Không xát định"}
            </div>
          )}
        </div>
        <div className="text-lg font-medium mt-8">Information</div>
        <div className="flex flex-col mt-4 border-t border-b divide-y font-medium">
          <div className="flex items-center justify-between py-3">
            <div className="text-secondary">Created At</div>
            <div>
              {dataFile.createdAt
                ? localeTime(dataFile.createdAt)
                : "Không xát định"}
            </div>
          </div>
          <div className="flex items-center justify-between py-3">
            <div className="text-secondary">Modified At</div>
            <div>
              {dataFile.updatedAt
                ? localeTime(dataFile.updatedAt)
                : "Không xát định"}
            </div>
          </div>
          <div className="flex items-center justify-between py-3">
            <div className="text-secondary">Size</div>
            <div>{Math.ceil(dataFile.size / 1024) || "Không xát định"} MB</div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 w-full mt-8">
          {dataFile.name && (
            <button
              onClick={() => {
                window.open(process.env.API_URL + dataFile.url);
              }}
              mat-flat-button=""
              className="mat-focus-indicator flex-auto mat-flat-button mat-button-base mat-primary"
            >
              <span className="bg-blue-400 rounded-full px-16 py-3 text-xl text-white font-semibold">
                Tải về
              </span>
              <span matripple="" className="mat-ripple mat-button-ripple" />
              <span className="mat-button-focus-overlay" />
            </button>
          )}
          <button
            mat-stroked-button=""
            className="mat-focus-indicator flex-auto mat-stroked-button mat-button-base"
          >
            <span matripple="" className="mat-ripple mat-button-ripple" />
            <span className="mat-button-focus-overlay" />
          </button>
        </div>
      </div>
    </>
  );
};
export default InfoFile;
