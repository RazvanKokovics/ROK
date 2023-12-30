import { AnchorHTMLAttributes } from "react";
import StyledButton from "./StyledButton.style";

type TButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
};

function Button({ children, ...otherProps }: TButtonProps) {
  return <StyledButton {...otherProps}>{children}</StyledButton>;
}

export default Button;
