import { ReactNode } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  border: boolean;
  children: ReactNode;
}

const Card = ({ border, children, ...props }: Props) => {
  return (
    <div
      className={`${
        border && "w-96 bg-amber-50 rounded border-amber-50 border shadow-md"
      } p-8 ${props.className}`}
    >
      {children}
    </div>
  );
};

export default Card;
