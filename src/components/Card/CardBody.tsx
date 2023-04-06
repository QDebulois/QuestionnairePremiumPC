import { ReactNode } from "react";

interface ICardBody {
  children: ReactNode;
}

function CardBody({ children }: ICardBody) {
  return <div className="p-6">{children}</div>;
}

export default CardBody;
