import Image from "next/image";

interface ITitleProps {
  text: string;
}

const Title = ({ text }: ITitleProps) => (
  <section className="flex justify-around text-center">
    <div className="
      flex flex-row gap-3 border-4 rounded-md p-2
    border-orange-500 bg-sky-900 bg-opacity-70"
    >
      <Image src={"/logo.png"} width={60} height={60} alt={"Logo"} />
      <h1 className="
        font-['caxo'] my-auto text-4xl text-gray-200 border-b-4 border-orange-700"
      >
        {text}
      </h1>
    </div>
  </section>
);

export default Title;
