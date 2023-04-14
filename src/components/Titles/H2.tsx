import { memo, ReactNode } from "react";

interface ITitleProps {
  children: ReactNode;
}

const H2 = memo(({ children }: ITitleProps) => {
  return (
    <h2 className='mx-14 border-b-2 border-sky-800 text-center font-["caxo"] text-2xl font-bold text-orange-700'>
      {children}
    </h2>
  );
});

H2.displayName = "H2";

export default H2;
