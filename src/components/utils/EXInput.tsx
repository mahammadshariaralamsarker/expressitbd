import React from "react";
import { Form, Input, FormItemProps, InputProps } from "antd";

type EXInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  rules?: FormItemProps["rules"];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addonAfter?: React.ReactNode;
} & InputProps;

const EXInput: React.FC<EXInputProps> = ({
  name,
  label,
  placeholder,
  rules,
  onChange,
  addonAfter,
  ...rest
}) => {
  return (
    <Form.Item className="w-full " name={name} label={label} rules={rules}>
      <Input
        placeholder={placeholder}
        onChange={onChange}
        addonAfter={addonAfter}
        {...rest}
      />
    </Form.Item>
  );
};

export default EXInput;
