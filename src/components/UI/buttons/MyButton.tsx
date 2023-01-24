import { MouseEvent } from "react";

interface MyButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void,
  children: JSX.Element | string,
  disabled?: boolean
}

function MyButton({ onClick, children, disabled = false }: MyButtonProps) {
  return (
    <button onClick={onClick} className="my-button" disabled={disabled}>
      {children}
    </button>
  );
}

export default MyButton;