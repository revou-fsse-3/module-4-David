import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button = ({ label, ...props }: Props) => {
  return (
    <button
      {...props}
      className={
        "rounded-md bg-amber-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-amber-900 mt-2"
      }
    >
      {label}
    </button>
  );
};

export default Button;
