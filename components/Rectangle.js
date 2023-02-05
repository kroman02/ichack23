import Link from "next/link";

export default function Rectangle() {
  return (
    <div className="rounded-tr-[15rem] w-5/6 h-1/3 absolute bottom-0 left-0 bg-bblue flex flex-col justify-center max-w-xl ">
      <Link href="/login" className="cursor-pointer">
        <button className="text-3xl font-brand font-bold m-5 ml-10 text-bcream md:text-5xl">
          LOGIN
        </button>
      </Link>
      <Link href="/signup" className="cursor-pointer">
        <button className="text-3xl font-brand font-bold m-5 ml-10 text-bcream md:text-5xl">
          SIGN UP
        </button>
      </Link>
    </div>
  );
}
