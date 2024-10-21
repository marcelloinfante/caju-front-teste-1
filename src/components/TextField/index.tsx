import { InputHTMLAttributes } from "react";

import { Input, TextFieldMain } from "./styles";
import Typography from "../Typography";

export interface TextFieldProps extends InputHTMLAttributes<any> {
  label?: string;
  error?: string;
  style?: React.CSSProperties;
}

const TextField = ({ label, error, style, ...props }: TextFieldProps) => {
  return (
    <TextFieldMain style={style}>
      <Typography color={!!error ? "error" : "textPrimary"}>{label}</Typography>
      <Input error={!!error} {...props} />
      <Typography
        color="error"
        variant="caption"
        style={{
          position: "absolute",
        }}
      >
        {error}
      </Typography>
    </TextFieldMain>
  );
};

export default TextField;
