import { ReactNode, ButtonHTMLAttributes } from "react";

import { button } from "~/theme/palette";
import Typography from "~/components/Typography";

import * as S from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<any> {
  children: ReactNode;
  style?: React.CSSProperties;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
}

const Button = ({
  children,
  style,
  size = "medium",
  color = "primary",
  ...props
}: ButtonProps) => {
  const { textColor, backgroundColor } = button[color];

  return (
    <S.Button type="submit" style={{ backgroundColor, ...style }} {...props}>
      <Typography color={textColor} align="center">
        {children}
      </Typography>
    </S.Button>
  );
};

export default Button;
