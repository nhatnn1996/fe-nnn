import Link from "next/link";

const PostMain = () => {
  return (
    <div className="post-main pb-5 mt-2">
      <div className="font-bold text-md text-blue-600 text-md">SITE LIÊN KẾT</div>
      <Link href="/about">
        <div className="post-content w-12/12">site liên kết</div>
      </Link>
      <style jsx>{``}</style>
    </div>
  );
};

export default PostMain;
