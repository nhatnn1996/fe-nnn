import { BackspaceIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="px-10">
      <img src="/images/not-found.jpg" className="w-full h-100" />

      <div
        className="flex cursor-pointer items-center mt-10 justify-center"
        onClick={() => {
          router.push("/");
        }}
      >
        <BackspaceIcon className="w-6 h-6 mr-3" />
        <div className="text-2xl font-bold text-stone-600">
          Quay lại trang chủ
        </div>
      </div>
    </div>
  );
};

export default NotFound;
