/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

export default function Pagination({ page, setPage, size, total, length }) {
  console.log(Array(total).fill(23));
  return (
    <div className="bg-white py-3 flex items-center justify-between  ">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Hiển thị <span className="font-medium">{page * size + 1}</span> đến{" "}
            <span className="font-medium">{(page + 1) * size}</span> của{" "}
            <span className="font-medium">{length}</span> kết quả
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <span
              href="#"
              onClick={() => {
                if (page === 0) return;
                window.scrollTo({ top: 0, behavior: "smooth" });
                setPage((index) => {
                  if (index === 0) return 0;
                  return index - 1;
                });
              }}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </span>
            {Array(total)
              .fill(1)
              .map((element, index) => {
                const clx =
                  index === page
                    ? "bg-blue-500 text-white"
                    : "border-gray-300 bg-white hover:bg-blue-600 hover:text-white";
                return (
                  <span
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      setPage(index);
                    }}
                    href="#"
                    key={"pagination" + index + 1}
                    aria-current="page"
                    className={
                      "z-10 cursor-pointer hover:bg-blue-600 hover:text-white duration-300 transition-colors inline-flex  relative items-center px-4 py-2 border text-sm font-medium mx-1 " +
                      clx
                    }
                  >
                    {index + 1}
                  </span>
                );
              })}

            {/* <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
              ...
            </span> */}
            <span
              onClick={() => {
                console.log(page, total);
                if (page + 1 === total) return;
                window.scrollTo({ top: 0, behavior: "smooth" });
                (index) => {
                  if (index === total) return total;
                  return index + 1;
                };
              }}
              href="#"
              className="relative inline-flex cursor-pointer items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          </nav>
        </div>
      </div>
    </div>
  );
}
