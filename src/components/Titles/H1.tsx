import Image from "next/image";
import { ReactNode, memo } from "react";

interface ITitleProps {
  children: ReactNode;
}

const H1 = memo(({ children }: ITitleProps) => {
  return (
    <section className="flex justify-around text-center">
      <div className="flex flex-row gap-3 rounded-md border-4 border-orange-500 bg-sky-900 bg-opacity-70 p-2">
        <Image src={"/logo.png"} width={60} height={60} alt={"Logo"} />
        <h1 className=" my-auto border-b-4 border-orange-700 font-['caxo'] text-4xl text-gray-200">{children}</h1>
      </div>
    </section>
  );
});

H1.displayName = "H1";

export default H1;
