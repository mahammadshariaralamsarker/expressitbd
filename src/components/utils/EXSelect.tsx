import React from "react";
import { Form, Select, FormItemProps, SelectProps } from "antd";

const { Option } = Select;

type OptionType = {
  value: string;
  label: string;
};

type EXSelectProps = {
  name: string;
  label?: string;
  rules?: FormItemProps["rules"];
  options: OptionType[];
  placeholder?: string;
} & SelectProps;

const EXSelect: React.FC<EXSelectProps> = ({
  name,
  label,
  rules,
  options,
  placeholder,
  ...rest
}) => {
  return (
    <Form.Item className="w-full" name={name} label={label} rules={rules}>
      <Select placeholder={placeholder} {...rest}>
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default EXSelect;
