import { FunctionComponent, useState } from 'react';

interface Props {
  value: string;
  onChange: (val: any) => void;
  onBlur: () => void;
  name: string;
  type?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

const RenderFieldInput: FunctionComponent<Props> = (props) => {
  const {
    value,
    onChange,
    onBlur,
    name,
    type = 'text',
    className,
    disabled,
    placeholder } = props;
  const [typeInput, setTypeInput] = useState(type);

  return (
    <div className="relative">
      <input
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={typeInput}
        disabled={disabled}
        className={className}
        placeholder={placeholder}
      />

    </div>
  );
};

export default RenderFieldInput;
