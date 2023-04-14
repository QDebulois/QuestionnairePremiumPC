import { memo, ReactNode } from "react";

interface ICardBody {
  children: ReactNode;
}

const CardBody = memo(({ children }: ICardBody) => {
  return <div className="p-6">{children}</div>;
});

CardBody.displayName = "CardBody";

export default CardBody;
